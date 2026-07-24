export type JournalArticle = {
  slug: string;
  title: string;
  kicker: string;
  dek: string;
  date: string;
  readTime: string;
  hero?: string;
  body: string[];
  /** If set, the journal listing links straight to this file for direct
   *  download instead of navigating to the in-app article page. */
  pdfUrl?: string;
};

export const JOURNAL: JournalArticle[] = [
  {
    slug: "why-ceremony-audio-matters",
    title: "Why ceremony audio matters more than couples expect",
    kicker: "Essay Nº 01",
    dek: "The ceremony is the shortest, most-remembered part of the day — and the part most likely to be lost to wind, hum, or an ambitious DJ speaker.",
    date: "March 2026",
    readTime: "6 min read",
    pdfUrl: "/downloads/oak-papers-essay-01-why-ceremony-audio-matters.pdf",
    hero: "/assets/images/editorial-wide.jpg",
    body: [
      "The ceremony is twenty minutes long. Everything else — cocktails, dinner, dancing, the send-off — happens after. And yet the ceremony is what couples ask their photographer to send first, what parents watch back on their phones for years, and what guests describe when they tell the story of your wedding.",
      "It is also the part most likely to fail acoustically. Outdoor spaces absorb sound. Wind carries voices away from microphones. Fabric arches muffle direct speech. A DJ speaker aimed at a dance floor cannot double as a ceremony PA — the physics are wrong, and so is the intention.",
      "Professional ceremony audio is not the same discipline as event sound reinforcement. It is closer to broadcast — a small number of voices, captured cleanly, delivered evenly to a listening audience, with backups running unnoticed in parallel. Nothing dramatic. Nothing you notice.",
      "When it works, no one mentions it. When it doesn't, no one forgets.",
    ],
  },
  {
    slug: "outdoor-ceremony-checklist",
    title: "An outdoor ceremony checklist for couples and planners",
    kicker: "Guide Nº 02",
    dek: "Twelve small questions to ask before your outdoor ceremony — most of which have nothing to do with audio, and all of which affect it.",
    date: "April 2026",
    readTime: "5 min read",
    pdfUrl: "/downloads/oak-papers-guide-02-outdoor-ceremony-checklist.pdf",
    body: [
      "Outdoor ceremonies are the reason ceremony audio specialists exist. They are also the reason a general AV team will show up with the wrong equipment. Before your wedding, work through these questions with your planner.",
      "Where does the sun set? A west-facing aisle at 6 p.m. means squinting officiants, backlit couples, and microphones catching wind off the field. Rotate the aisle if you can.",
      "Where is the nearest power? Battery-powered PA is beautiful and necessary in the wrong locations — but a reliable extension run from a barn or coach house is always calmer.",
      "What is on the guest side of the aisle? A tree line reflects sound gently back. An open lawn absorbs it entirely and requires more coverage per row.",
      "What is your rain plan, and does the audio team know about it? Nothing else matters if the answer is no.",
    ],
  },
  {
    slug: "planning-for-wind",
    title: "Planning for wind: the invisible variable at every outdoor wedding",
    kicker: "Field Notes Nº 03",
    dek: "Wind is the single most common cause of poor ceremony audio — and one of the easiest to plan around when it is treated as a design constraint.",
    date: "April 2026",
    readTime: "4 min read",
    pdfUrl: "/downloads/oak-papers-field-notes-03-planning-for-wind.pdf",
    body: [
      "Wind is not a problem you solve on the day. It is a variable you design around weeks in advance.",
      "Lavalier microphones with the correct windscreen — foam beneath, furry cover on top — reject moving air far better than any digital filter. But the placement matters more than the accessory. A lav on the lapel is exposed. A lav placed inside the jacket, under the tie knot, is protected.",
      "For readers and officiants, we prefer a small handheld microphone with an internal windscreen when the forecast is over eight knots. It looks deliberate in photos and it eliminates the largest source of outdoor audio failure.",
      "None of this is dramatic. It is the boring, patient side of the work.",
    ],
  },
  {
    slug: "working-with-your-videographer",
    title: "Working with your videographer: a note on clean audio",
    kicker: "Vendor Notes Nº 04",
    dek: "How a good ceremony-audio team hands off to a videographer — and why the videographer usually breathes a sigh of relief.",
    date: "May 2026",
    readTime: "4 min read",
    pdfUrl: "/downloads/oak-papers-vendor-notes-04-working-with-your-videographer.pdf",
    body: [
      "Videographers rarely say it aloud, but ceremony audio is the part of the day they are privately most nervous about. Their camera-top microphones catch the ambience — footsteps, wind, distant conversation — but not the officiant clearly enough to publish.",
      "A dedicated ceremony audio team changes this. We provide a clean XLR or 3.5mm feed of the main program mix to the video team's recorder, with a written channel list and gain notes.",
      "We also always maintain our own independent backup recording of the same feed — because we have seen too many good weddings lost when a single recorder failed.",
      "The videographer edits calmly. The couple hears their vows in the film exactly as they were spoken. Everyone sleeps better.",
    ],
  },
  {
    slug: "questions-to-ask-your-officiant",
    title: "Questions to ask your officiant about ceremony audio",
    kicker: "Guide Nº 05",
    dek: "Officiants are audio partners, whether they know it or not. Five short questions to ask before the day.",
    date: "May 2026",
    readTime: "3 min read",
    pdfUrl: "/downloads/oak-papers-guide-05-questions-to-ask-your-officiant.pdf",
    body: [
      "Do you prefer a handheld microphone or a lavalier? Some officiants speak in a warmer register with a handheld in front of them. Others gesture too much for a handheld to work — a lavalier keeps their hands free.",
      "Do you plan to project? Officiants trained in theatre or ministry often over-project into a microphone. We adjust gain to match — but only if we know in advance.",
      "Will you use a written script or read from a phone? A phone tilted forward blocks a lavalier. A written script rustles. Both are solvable if we plan for them.",
      "Where will you stand? A three-foot difference changes the acoustic entirely.",
      "Will there be a unity moment or a signing? These are the two most common places we lose audio — because the mic moves and no one accounts for it.",
    ],
  },
  {
    slug: "how-we-hide-our-equipment",
    title: "How we hide our equipment — and why that is most of the job",
    kicker: "Field Notes Nº 06",
    dek: "A short catalogue of the small choices that keep audio equipment out of your ceremony photographs.",
    date: "June 2026",
    readTime: "5 min read",
    pdfUrl: "/downloads/oak-papers-field-notes-06-how-we-hide-our-equipment.pdf",
    body: [
      "Every piece of Oak & Echo equipment is chosen twice — once for how it sounds, and again for how it looks. If we cannot conceal it, we do not carry it.",
      "Our speakers finish in matte black or aged brass. We place them behind florals, at tree lines, or beyond the aisle where sightlines are already broken. Battery-powered options let us skip the extension cord entirely.",
      "Microphones sit under jacket lapels, along the inside of a tie, or clipped behind a boutonnière. When a handheld is required, we choose one with a low-profile capsule.",
      "Cable, when it must run, is gaffed in narrow runs along baseboards, buried under aisle runners, or looped tight behind ceremony arches. We remove every mark we leave.",
      "The best compliment we ever receive is a photographer's email after the wedding: \"I didn't have to remove a single speaker in post.\"",
    ],
  },
];