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

   **"Copy, don't link" covers static elements — never the bot's engine.** The
   planned bot panel (Concept Base v3 §16) is an **iframe of the public bot URL**
   wrapped in portal-side chrome: the component styles and opens it, and it must
   **never** `fetch` the bot's worker. Never copy the bot's code, worker, key or
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
   he is the testimonials backbone). Everyone else is alphabetical by the name on
   the card, ignoring a leading "Dr." only. A new card slots into that rule; the
   order is never re-decided and never adjusted to make the grid come out even.
   Full rule with worked examples in `README.md`, rule 4.

8. **The directory list is closed — do not propose names.** The twenty-four cards
   are Nick's curation roster (Concept Base v3 §17), matched one for one: every
   roster name is a card, every card is a roster name. It is not a starter set
   waiting to be improved, so never suggest additions, and never "restore" a name
   that is absent. Kelli Ritter was proposed once and decided out on scope
   grounds; that is now in the roster too. Changes arrive from Nick.

   The roster also sorts those names into register / topic / role buckets. Those
   belong to **the bot's index**, not to these cards — see the bite below.

## Things that will bite you

- **Bump the CSS filename version** when editing the stylesheet
  (`style.v1.css` → `style.v2.css`) and update the `<link>` in *both* HTML files.
  `_headers` caches `/assets/*` for a year as `immutable`; a same-name edit may
  never reach users.
- **The CSP blocks all scripts, iframes and fetches** (`default-src 'none'` in
  `_headers`). Anything external added without also editing that line fails
  **silently** — page still works, no error, nothing in the logs. It does not
  apply on localhost either, so the failure only appears in production. Extend
  the header and ship the feature in the same commit; the per-case directives are
  in `README.md`, "The CSP".
- **`frame-ancestors` is not `frame-src`.** `frame-ancestors 'none'` (plus
  `X-Frame-Options: DENY`) stops *us being framed* and stays. Putting the bot in a
  frame *here* needs `frame-src`, which is absent, so `default-src 'none'` denies
  it. The bot's side needs its own `frame-ancestors` for this domain, set in the
  bot's repo — not here.
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

The **embedded bot panel** (Concept Base v3 §16, unchanged from v2) is planned but
not now — it waits on the bot itself, which is still a placeholder. It would also
end the site's zero-JS run, so it is a deliberate later step, not an oversight.
