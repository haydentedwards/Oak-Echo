# Oak & Echo Audio

Website for Oak & Echo Audio, built with TanStack Start (React + Vite + Nitro)
and Supabase.

## Stack

- **TanStack Start** (React 19, file-based routing via `src/routes`)
- **Vite** for dev/build, **Nitro** for the server build (Cloudflare target by
  default — see `vite.config.ts`)
- **Supabase** for the contact/inquiry form (`src/integrations/supabase`,
  `supabase/migrations`, `supabase/functions`)
- **Bun** as the package manager (`bun.lock`, `bunfig.toml`)

## Getting started

```bash
bun install
cp .env.example .env   # then fill in your Supabase project values
bun run dev
```

Other scripts: `bun run build`, `bun run preview`, `bun run lint`,
`bun run format`.

## Environment variables

Copy `.env.example` to `.env` and fill in your own Supabase project's URL and
publishable (anon) key — found in the Supabase dashboard under
**Project Settings → API**. `.env` is git-ignored and should never be
committed.

## Contact form email notifications

The contact form writes to a Supabase `inquiries` table. Email notifications
on new submissions require a one-time setup (Supabase Edge Function +
Resend). See [`SETUP_NOTIFICATIONS.md`](./SETUP_NOTIFICATIONS.md) for the
full walkthrough.

## Deploying

The Nitro build targets Cloudflare Workers by default. After `bun run build`,
deploy the output with your preferred Cloudflare deployment method (e.g.
`wrangler deploy`), or adjust the Nitro preset in `vite.config.ts` /
`@lovable.dev/vite-tanstack-config` for a different host. Remember to set the
same environment variables from `.env` in your hosting provider's dashboard.
