# CLAUDE.md

Guidance for Claude Code working in this repo.

`README.md` and `PENDING.md` are the source of truth for content rules and for
what is deliberately unfinished. **Read `PENDING.md` before concluding something
is missing** — most gaps are decisions, not defects. This file covers only what
an agent needs on top of those.

## What this is

`askcarnivores.com` — a static community portal for the carnivore world. Two
pages (EN + EL), one stylesheet, **zero JavaScript**, no build step, no
dependencies, no backend.

```
index.html            English page (default)
gr/index.html         Greek page — mirror of index.html
assets/style.v1.css   All styling; versioned filename = cache-busting
_headers              Cloudflare Pages security + cache headers
404.html              Real 404 (Pages serves it with a 404 status)
robots.txt, sitemap.xml
```

No install, no test suite, no lint.

## Workflow — no branches

Work directly on `main`. **Do not create branches and do not propose them.** The
loop is: edit → preview → one commit → push, and the push is the deploy.

Nick previews with the VS Code **Go Live** button (Live Server). Any static
server works and one is required — the pages use absolute `/assets/...` paths, so
opening the file directly leaves it unstyled:

```sh
python3 -m http.server 8000
```

Two things local preview cannot show you, because `_headers` is a Cloudflare
file and does not apply on localhost:

- **The CSP.** Scripts run fine locally and are blocked live. See the trap below.
- **Cache headers.** A stale asset only shows up in production.

Anything touching those needs a check *after* the deploy. The safety net is
**Pages → Deployments → ⋯ → Rollback**, not a pre-merge preview.

## Hard rules — do not violate these

1. **Siloing.** `askcarnivores.com` (this portal) and `askcarnivore.com` (the
   bot) are separate repos, separate Pages projects, separate secrets and
   analytics. Never `import`/fetch across them, never reuse a token or analytics
   ID. Shared visual elements (the Noustelos Studio footer credit, logos) are
   **copied by hand** into each repo — the duplicate-maintenance cost is
   deliberate. When copying one, say so in the commit message. The only permitted
   link between the two projects is a public hyperlink in the UI.

2. **Paul Saladino is permanently excluded.** Not as a directory card, not as a
   source, not as a citation, not in any future tool. Do not add him and **do not
   propose him** — including when suggesting candidates. The `DO NOT LIST` note
   lives in an HTML comment in both `index.html` and `gr/index.html`; Nick has
   confirmed he is fine with it being readable in the page source, so leave it
   where it is and do not soften it.

3. **External links carry `target="_blank" rel="noopener"` — never
   `noreferrer`.** Stripping the referrer hides our traffic from a creator's
   analytics, and creators *seeing* that traffic is the entire relationship play.

4. **No treatment claims.** Descriptions state a position or a personal
   experience. No "cures", "heals", "reverses", "treats" anywhere in copy.

5. **Honest bias, not a pamphlet.** We present these people; we don't sign for
   them. Never attack mainstream medicine to elevate the community.

6. **Both languages, always.** Every content change to `index.html` must be
   mirrored into `gr/index.html`. Cards live between the `DIRECTORY — EDIT HERE`
   comment markers.

## Things that will bite you

- **Bump the CSS filename version** when editing the stylesheet
  (`style.v1.css` → `style.v2.css`) and update the `<link>` in *both* HTML files.
  `_headers` caches `/assets/*` for a year as `immutable`; a same-name edit may
  never reach users.
- **The CSP blocks all scripts** (`default-src 'none'`). Any snippet added
  without also editing `_headers` fails silently — page still works, no error, no
  data. This is the trap waiting for Cloudflare Web Analytics.
- **Verify every YouTube handle by opening the channel.** A plausible handle
  proves nothing: `@DaveMac` is a speaking coach, `@PrimalEdge` is woodworking,
  `@BartKayNutritionScience` does not exist, and `@DrPaulMasonMD` is a different
  channel from the real `@DrPaulMason`.
- **Keep the directory card count a multiple of three.** The grid is
  `auto-fit / minmax(17rem, 1fr)`, so it is three columns on desktop and two at
  tablet width. Nine (current) is flush on desktop; twelve is the next size flush
  at both. Anything else leaves a short final row.
- **Everything in this repo is publicly readable** at `askcarnivores.com/<file>`
  and on the public GitHub repo — `README.md`, `PENDING.md`, this file included.
  `robots.txt` keeps them out of search results but does not block access. Keep
  credentials, private reasoning about named people, and commercially sensitive
  material out of all of them.
- **`@zerocarb` appears twice on purpose** — as the first card and as the Stories
  destination. It is not a duplicate that slipped through.

## Out of scope for v1

Tools (macro calculator, electrolytes, Get Started), affiliate links, events, any
database, accounts, or backend forms. Nick settled on 2026-08-14 that tools come
later. Don't build them here; don't re-derive them as gaps.
