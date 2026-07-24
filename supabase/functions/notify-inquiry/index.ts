// supabase/functions/notify-inquiry/index.ts
//
// Sends an email notification whenever a new row is inserted into
// public.inquiries. Deployed as a Supabase Edge Function and triggered
// by a Database Webhook (Dashboard → Database → Webhooks) configured
// to fire on INSERT for the inquiries table and call this function.
//
// Setup required before this works (see SETUP_NOTIFICATIONS.md at the
// project root for full step-by-step instructions):
//   1. Deploy this function:  supabase functions deploy notify-inquiry
//   2. Create a Resend account (resend.com) and verify a sending domain
//      (or use their shared test domain while testing).
//   3. Set the API key as a secret:
//        supabase secrets set RESEND_API_KEY=re_xxxxxxxx
//   4. In the Supabase Dashboard, create a Database Webhook:
//        Table: public.inquiries
//        Events: Insert
//        Type: Supabase Edge Functions
//        Function: notify-inquiry
//
// Update NOTIFY_TO_EMAIL and NOTIFY_FROM_EMAIL below once a sending
// domain is set up.

const NOTIFY_TO_EMAIL = "hello@oakandechoaudio.com";
const NOTIFY_FROM_EMAIL = "Oak & Echo Website <notifications@oakandechoaudio.com>";

interface InquiryRecord {
  id: string;
  name: string;
  partner: string | null;
  email: string;
  ceremony_date: string | null;
  venue: string | null;
  guests: number | null;
  message: string | null;
  created_at: string;
}

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: InquiryRecord;
  old_record: InquiryRecord | null;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderEmailHtml(record: InquiryRecord): string {
  const rows: Array<[string, string]> = [
    ["Name", record.name],
    ["Partner", record.partner ?? "—"],
    ["Email", record.email],
    ["Ceremony date", record.ceremony_date ?? "—"],
    ["Venue", record.venue ?? "—"],
    ["Guest count", record.guests != null ? String(record.guests) : "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:6px 12px 6px 0;color:#6b6963;font-size:13px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:6px 0;color:#2d2d2d;font-size:14px;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const messageHtml = record.message
    ? `<p style="margin-top:20px;white-space:pre-wrap;color:#2d2d2d;font-size:14px;line-height:1.6;">${escapeHtml(record.message)}</p>`
    : `<p style="margin-top:20px;color:#9a978d;font-size:14px;">No additional message provided.</p>`;

  return `
    <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;padding:24px;">
      <p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#c7a56b;margin-bottom:4px;">New Inquiry</p>
      <h1 style="font-size:22px;color:#23352b;margin:0 0 20px;">Oak &amp; Echo — Website Contact Form</h1>
      <table role="presentation" style="border-collapse:collapse;width:100%;">
        ${rowsHtml}
      </table>
      ${messageHtml}
      <p style="margin-top:24px;font-size:12px;color:#9a978d;">
        Submitted ${new Date(record.created_at).toLocaleString("en-US", { timeZone: "America/New_York" })} ET
        — reply directly to this inquiry at
        <a href="mailto:${escapeHtml(record.email)}" style="color:#23352b;">${escapeHtml(record.email)}</a>.
      </p>
    </div>
  `;
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set. Add it with: supabase secrets set RESEND_API_KEY=...");
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (payload.type !== "INSERT" || payload.table !== "inquiries") {
    // Not an event we care about — acknowledge without sending anything.
    return new Response(JSON.stringify({ skipped: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const record = payload.record;

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: NOTIFY_FROM_EMAIL,
      to: [NOTIFY_TO_EMAIL],
      reply_to: record.email,
      subject: `New ceremony inquiry — ${record.name}${record.ceremony_date ? ` (${record.ceremony_date})` : ""}`,
      html: renderEmailHtml(record),
    }),
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text();
    console.error("Resend API error:", emailResponse.status, errorText);
    return new Response(JSON.stringify({ error: "Failed to send notification email" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ sent: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
