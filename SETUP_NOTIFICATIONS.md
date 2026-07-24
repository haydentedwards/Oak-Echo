# Setting Up Inquiry Email Notifications

This project now includes `supabase/functions/notify-inquiry/index.ts`, which
emails you whenever someone submits the contact form. The code is complete,
but it needs to be **deployed** and **connected to a real email account** —
those two steps require your own credentials, so I couldn't do them for you.
Here's exactly what to do, in order.

## 1. Install the Supabase CLI (if you don't have it)

```bash
npm install -g supabase
```

## 2. Log in and link this project

```bash
supabase login
supabase link --project-ref oovysgctlzwmvkwfdqsd
```

(That project ref is already in `supabase/config.toml`.)

## 3. Create a Resend account

Resend (resend.com) is the easiest transactional email provider to wire up.
Free tier is plenty for a wedding-inquiry volume of email.

1. Sign up at https://resend.com
2. Add and verify a sending domain (ideally `oakandechoaudio.com`, via the
   DNS records Resend gives you) — or use their shared test domain for now
   while you're still setting things up.
3. Create an API key from the Resend dashboard. It will look like
   `re_xxxxxxxxxxxxxxxxx`.

## 4. Deploy the function

```bash
supabase functions deploy notify-inquiry
```

## 5. Add the API key as a secret

```bash
supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

## 6. Update the sender/recipient addresses (if needed)

Open `supabase/functions/notify-inquiry/index.ts` and check these two lines
near the top:

```ts
const NOTIFY_TO_EMAIL = "hello@oakandechoaudio.com";
const NOTIFY_FROM_EMAIL = "Oak & Echo Website <notifications@oakandechoaudio.com>";
```

`NOTIFY_FROM_EMAIL` must use a domain you verified in Resend in step 3, or
Resend will reject the send. If you're still using their shared test domain,
set this to whatever test address they gave you, then redeploy
(`supabase functions deploy notify-inquiry`).

## 7. Wire up the Database Webhook

This is the piece that actually triggers the function when someone submits
the form:

1. Go to your Supabase Dashboard → **Database** → **Webhooks**.
2. Click **Create a new webhook**.
3. Configure it:
   - **Table:** `public.inquiries`
   - **Events:** `Insert` (only)
   - **Type:** `Supabase Edge Functions`
   - **Edge Function:** `notify-inquiry`
4. Save.

## 8. Test it

Submit the contact form on your site (or insert a test row directly in the
Supabase Table Editor) and confirm the email arrives. Check
**Edge Functions → notify-inquiry → Logs** in the dashboard if it doesn't —
that will show you the exact error (usually an unverified sending domain or
a missing/incorrect API key).

---

Once this is working, every inquiry submitted through the contact form will
land in your inbox within a few seconds, in addition to being saved in the
`inquiries` table as before.
