# CLAUDE.md

Guidance for Claude Code working in this repo.

`README.md` and `PENDING.md` are the source of truth for content rules and for
what is deliberately unfinished. **Read `PENDING.md` before concluding something
is missing** — most gaps are decisions, not defects. This file covers only what
an agent needs on top of those.

## What this is

`askcarnivores.com` — a static community portal for the carnivore world. Six
pages (EN + EL of three), one stylesheet, **one small script**, no build step, no
dependencies, no backend. The script is the ask panel (§16), shipped
2026-08-30 — the site's zero-JS run ended there, on purpose and once.

```
index.html            English directory (default)
gr/index.html         Greek directory — mirror of index.html
about/index.html      English "My Story"
gr/about/index.html   Greek "My Story" — mirror of about/index.html
whats-new/index.html      English "What's New" — an iframe of the bot's /new
gr/whats-new/index.html   Greek mirror of it
assets/style.v5.css   All styling; versioned filename = cache-busting
assets/ask.v1.js      The ask panel (§16) — the only script on the site
_headers              Cloudflare Pages security + cache headers
404.html              Real 404 (Pages serves it with a 404 status)
robots.txt, sitemap.xml
```

Pages come in language pairs at parallel URLs (`/x/` and `/gr/x/`), with
`hreflang` alternates in the head and in `sitemap.xml`. That — not a toggle —
is how this site is bilingual. The bot next door does it the other way, with
one page and a script; it can, because its CSP allows scripts and this one's
does not.

No install, no test suite, no lint.

## Workflow — branch, preview, merge

**Changed 2026-08-29. The old rule was "work directly on `main`, never branch";
it no longer applies.** A push to `main` is the deploy, so anything bigger than
a typo gets a branch and a preview first:

```sh
git checkout -b some-change
git push -u origin some-change   # → https://some-change.askcarnivores.pages.dev
```

Cloudflare builds every branch under that hostname automatically — nothing to
configure. Wait for it, check it, **then** merge to `main`.

Why it changed: local preview is blind to the two things most likely to break
this site. `_headers` is a Cloudflare file and does not apply on localhost, so
neither of these shows up until it is live:

- **The CSP.** Scripts run fine locally and are blocked in production.
- **Cache headers.** A stale asset only appears in production.

A deploy preview has both, and a real URL to hand to Nick. **Rollback**
(Pages → Deployments → ⋯ → Rollback) is still the net, but it is a net rather
than a plan.

**One thing a preview still cannot show you: the bot panel's frame.** The bot's
`frame-ancestors` names `askcarnivores.com` and `www.` only, so on a
`*.pages.dev` preview the browser blocks the frame and the panel opens empty.
Check the chrome, the CSP and the script there; check the frame itself once it
is live. That is expected behaviour, not a bug to chase.

Nick also previews locally with the VS Code **Go Live** button (Live Server).
Any static server works and one is required — the pages use absolute
`/assets/...` paths, so opening the file directly leaves it unstyled:

```sh
python3 -m http.server 8000
```

Small, obvious edits — a typo, one card's wording — may still go straight to
`main`. The rule is about size and risk, not ceremony.

## Hard rules — do not violate these

1. **Siloing.** `askcarnivores.com` (this portal) and `askcarnivore.com` (the
   bot) are separate repos, separate Pages projects, separate secrets and
   analytics. Never `import`/fetch across them, never reuse a token or analytics
   ID. Shared visual elements (the Noustelos Studio footer credit, logos) are
   **copied by hand** into each repo — the duplicate-maintenance cost is
   deliberate. When copying one, say so in the commit message. The only permitted
   link between the two projects is a public hyperlink in the UI.

   **Both repos can be worked at the same time, and which one is open in VS
   Code decides nothing.** They are separate checkouts in separate folders with
   no shared file, no symlink and no common parent — an editor or an agent acts
   on the folder it was pointed at and cannot reach the other by accident. The
   siloing rule is about content and code (no imports, no shared tokens, no
   cross-repo fetches), not about tooling. The real hazard is the opposite of
   confusion: **forgetting to mirror** a hand-copied shared element. Change one,
   change the other, and say so in the commit message.

   **"Copy, don't link" covers static elements — never the bot's engine.** The
   bot panel (Concept Base v3.1 §16, shipped) is an **iframe of the public bot
   URL** wrapped in portal-side chrome: `assets/ask.v1.js` styles and opens it,
   and it must **never** `fetch` the bot's worker. Never copy the bot's code, worker, key or
   index into this repo — one bot, one index; this site is a window onto it. Full
   consequences in `PENDING.md`, "The bot, embedded".

2. **Paul Saladino is permanently excluded.** Not as a directory card, not as a
   source, not as a citation, not in any future tool. Do not add him and **do not
   propose him** — including when suggesting candidates. The `DO NOT LIST` note
   lives in an HTML comment in both `index.html` and `gr/index.html`; Nick has
   confirmed he is fine with it being readable in the page source, so leave it
   where it is and do not soften it.

3. **External links carry `target="_blank" rel="noopener"` — never
   `noreferrer`.** Stripping the referrer hides our traffic from a creator's
   analytics, and creators *seeing* that traffic is the entire relationship play.
   The footer `mailto:` is the one exception and carries neither attribute: it
   opens a mail client, not a page. Don't add them to it.

4. **No treatment claims.** Descriptions state a position or a personal
   experience. No "cures", "heals", "reverses", "treats" anywhere in copy.

5. **Honest bias, not a pamphlet.** We present these people; we don't sign for
   them. Never attack mainstream medicine to elevate the community.

6. **Both languages, always.** Every content change to `index.html` must be
   mirrored into `gr/index.html`. Cards live between the `DIRECTORY — EDIT HERE`
   comment markers. The footer contact line, `info@askcarnivores.com`, is the one
   thing that lives in **three** files — both index pages *and* `404.html`.

7. **The directory order is mechanical.** Dave Mac is pinned first (structural —
   he is the testimonials backbone). Everyone else is alphabetical **by surname**,
   ignoring a leading "Dr." — so "Dr. Ken Berry" sorts under B. Accounts with no
   surname use the handle with "Coach" dropped. A new card slots into that rule;
   the order is never re-decided and never adjusted to make the grid come out
   even. *(Sorted on first names until 2026-08-17.)* Full rule with worked
   examples in `README.md`, rule 4.

8. **The directory list is closed — do not propose names.** **Twenty-seven cards**
   as of 2026-08-17, when Nick added Sten Ekberg, Jason Fung and Nick Norwitz.
   All twenty-seven are his curation roster (Concept Base v3.1 §17), matched one
   for one, and the roster is **closed at twenty-seven**: a new name enters only
   if he judges it equally significant. It is not a starter set
   waiting to be improved, so never suggest additions, and never "restore" a name
   that is absent. Kelli Ritter was proposed once and decided out on scope
   grounds; that is now in the roster too. Changes arrive from Nick.

   The roster also sorts those names into register / topic / role buckets. Those
   belong to **the bot's index**, not to these cards — see the bite below.

## Things that will bite you

- **Bump the CSS filename version** when editing the stylesheet
  (`style.v5.css` → `style.v6.css`) and update the `<link>` in **all seven** HTML
  files — two directory pages, two story pages, two What's New pages, `404.html`. `_headers` caches
  `/assets/*` for a year as `immutable`; a same-name edit may never reach anyone
  who already has the old one. Delete the old file in the same commit. The edge
  keeps serving it for a while afterwards, which is harmless once nothing links
  to it — do not let that fool you into thinking the bump did not work. The same
  rule governs `assets/ask.v1.js`.
- **Mirror across the language pair, and now across six pages.** A change to
  chrome — header menu, status strip, footer — belongs in every page that has
  it, with the right language. The mirror comments in the markup name their
  counterparts; keep them accurate when you add a page.
- **The ask launcher is only on the two directory pages, on purpose.** Not on
  the story pages, not on What's New, not on `404.html`. Those are content, and
  a floating button over content competes with it; asking is the directory's
  action and the menu is one tap away. Do not "fix" the inconsistency by adding
  it everywhere — the decision is in `PENDING.md`.
- **`frame-src` is host-only, so a second framed page needed no CSP change.**
  `/whats-new/` frames the bot's `/new` under the same
  `frame-src https://askcarnivore.com` the panel already had. If you ever add a
  frame to a *different* host, that is when the header moves.
- **The CSP blocks all scripts, iframes and fetches** (`default-src 'none'` in
  `_headers`). Anything external added without also editing that line fails
  **silently** — page still works, no error, nothing in the logs. It does not
  apply on localhost either, so the failure only appears in production. Extend
  the header and ship the feature in the same commit; the per-case directives are
  in `README.md`, "The CSP".
- **Never put a `sandbox` attribute on the bot's iframe.** It is absent on
  purpose and there is a comment next to the tag saying so. `sandbox` without
  `allow-same-origin` gives the framed page an **opaque origin**, so the bot's
  own `chat.js` calls `/api/ask` with `Origin: null`, the worker's origin check
  rejects it, and the panel shows a flawless chat that answers **403 to every
  question**. It looks like our bug and is not. `allow-scripts allow-same-origin`
  together is close to no sandbox at all for a cross-origin frame, so the
  attribute buys nothing and costs that. The isolation is the origin boundary
  plus `frame-src` naming exactly one host.
- **Keep the CSP comments *outside* the `/*` block in `_headers`.** An indented
  `#` line inside a block is not reliably parsed as a comment; the surrounding
  file puts every comment above its block, and so should you.
- **`frame-ancestors` is not `frame-src`.** `frame-ancestors 'none'` (plus
  `X-Frame-Options: DENY`) stops *us being framed* and stays exactly as it is.
  Putting the bot in a frame *here* is `frame-src`, which now names
  `https://askcarnivore.com` — **host-only**, because Pages serves that page as
  both `/embed` and `/embed.html` and a path in `frame-src` is skipped after a
  redirect anyway. The bot's side has its own `frame-ancestors` for this domain,
  set in the bot's repo — never here.
- **Verify every YouTube handle *and* every domain by opening it.** A plausible
  handle proves nothing and neither does a plausible domain: `@DaveMac` is a
  speaking coach, `@PrimalEdge` is woodworking, `@BartKayNutritionScience` does
  not exist, `@DrPaulMasonMD` is a different channel from the real
  `@DrPaulMason`, and `@KelliRitter` / `@ElizabethBright` both exist as **empty
  shells** with zero videos next to the real `@DrKelliRitter` /
  `@DrElizabethBright`. On the domain side, `carnivore70something.com` is
  NXDOMAIN and `ketotic.org` fails TLS at the apex. The full list of traps,
  and the RSS-feed check that settles them, is in `README.md`.
- **The card count follows the alphabet, not the grid.** The grid is
  `auto-fit / minmax(17rem, 1fr)` — three columns on desktop, two at tablet
  width — so multiples of six are flush everywhere and multiples of three are
  flush on desktop only. Twenty-four (current) happens to be flush at every
  width. That is a nice-to-have, **not** a constraint: rule 7 above wins, so
  never add, drop or move a card to make the last row come out even.
- **Never delete the `<!--email_off-->` markers** around the footer address.
  Cloudflare's Email Address Obfuscation is on by default, rewrites the address
  into `[email protected]`, and injects a decoder script that our CSP blocks — so
  the placeholder is what the live site shows, while localhost looks fine. It
  broke exactly that way on 2026-08-16. Full account in `README.md`.
- **The edge can rewrite our HTML.** That is a second reason "it works in Go
  Live" proves nothing, alongside `_headers` not applying locally. Check the
  live page source, not just the local one, after anything content-shaped ships.
- **Everything in this repo is publicly readable** at `askcarnivores.com/<file>`
  and on the public GitHub repo — `README.md`, `PENDING.md`, this file included.
  `robots.txt` keeps them out of search results but does not block access. Keep
  credentials, private reasoning about named people, and commercially sensitive
  material out of all of them.
- **`@zerocarb` appears twice on purpose** — as the first card and as the Stories
  destination. It is not a duplicate that slipped through.
- **The bot's index model is not this page's model.** Concept Base v3 rewrote the
  shared index to *topic → video*, with a Start-with/Go-deep register per video
  and cron-built ranking. All of it is bot-side. Don't put register badges, topic
  or role filters, or video links on the cards — the directory lists *people*, on
  purpose, and nothing here re-ranks. v3 §15 says the portal briefs stand.
- **"Not a ranking" here vs. the bot's relevance ordering is not a contradiction.**
  We refuse to rank *people*; the bot matches *a question* to sources. Don't
  "fix" either wording to agree with the other — `README.md` has the table.

## Out of scope for v1

Tools (macro calculator, electrolytes, Get Started, shopping list), affiliate
links, events, any database, accounts, or backend forms. Nick settled on
2026-08-14 that tools come later, and Concept Base v3 keeps them out of the first
shippable scope. Don't build them here; don't re-derive them as gaps.

The **events calendar** now has a full spec (Concept Base v3 §13) but is still
later, and it comes with locked rules — curated-first, static, commission never
solicited and never deciding order. Read `PENDING.md`, "Events calendar", before
touching it.

The **embedded bot panel** (Concept Base v3.1 §16) is **built and shipped**
(2026-08-30) — launcher, panel, and an iframe of the bot's public `/embed` page,
driven by `assets/ask.v1.js`. It is no longer out of scope and no longer waiting
on anything: the bot is live, with a real worker, a 16-topic × 27-creator
curation, scan and sheet layers, and its own About page. Read `PENDING.md`,
"The bot, embedded", before changing any part of it.
