# askcarnivores.com

Static community portal for the carnivore world. Two pages, one stylesheet, no
JavaScript, no build step, no dependencies.

> **Siloing rule:** this project is completely separate from `askcarnivore.com`
> (the bot). Separate repo, separate Cloudflare Pages project, separate secrets.
> No shared code, no shared tokens, no cross-project imports. The only connection
> between the two is a public hyperlink in the UI.

## Files

```
index.html              English page (default)
gr/index.html           Greek page
assets/style.v1.css     All styling. Versioned filename = cache-busting.
assets/favicon.v1.svg   Favicon
assets/og.v1.png        Social share card (1200×630)
assets/apple-touch-icon.v1.png
_headers                Cloudflare Pages security + cache headers
robots.txt, sitemap.xml
```

## Local preview

No tooling required. Either open `index.html` in a browser, or serve it so the
absolute `/assets/...` paths resolve:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy — Cloudflare Pages

Create a **new** Pages project (do not reuse the bot's project) and connect it to
this repo.

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |
| Root directory | `/` |
| Environment variables | none |

Then **Custom domains → Set up a domain → `askcarnivores.com`**, and add `www`
as a redirect if you want it. Wait for SSL to go active.

Every push to a non-production branch gets its own preview URL. `main` is
production.

## Editing the directory

Cards live in `index.html` between the `DIRECTORY — EDIT HERE` comment markers.
Mirror every change into `gr/index.html`.

Three rules, all non-negotiable:

1. **Every external link** carries `target="_blank" rel="noopener"` — `noopener`
   and nothing else. It must **not** carry `noreferrer`.

   `noopener` is the security half: it stops the opened page from reaching back
   through `window.opener`. `noreferrer` is a separate, privacy-side flag that
   also strips the `Referer` header — and stripping it means a creator's
   analytics cannot see that the visit came from askcarnivores.com.

   Sending creators traffic they can *see* is the whole relationship play. It is
   what makes the outreach email land, and it is why the referrer stays on.

2. **Descriptions state a position or an experience, never a treatment claim.**

   | ✅ | ❌ |
   | --- | --- |
   | "shares her own multi-year experience" | "cured her eczema" |
   | "argues that plants aren't required" | "proves plants are harmful" |
   | "people describing what changed for them" | "how she reversed her diabetes" |

   No "cures", "heals", "reverses", "treats" anywhere in the copy.

3. **Honest bias, not a pamphlet.** The site is openly partial — that's declared in
   the name and stated in the "What this is" section. The line to hold:

   | ✅ honest bias | ❌ pamphlet |
   | --- | --- |
   | "here's what these voices say, go check it" | "settled science, the doubters are bought" |
   | "mainstream medicine says different things" | pretending no mainstream view exists |

   We present these people, we don't sign for them. Never attack mainstream
   medicine to elevate the community — acknowledging it exists is what keeps
   this a directory instead of propaganda.

### Do not list

**Paul Saladino is excluded.** Nick's standing decision, 2026-08-14. He is not
to appear as a source or a reference anywhere in this project — not in the
directory, not in the bot's index, not inside any future tool, not as a citation
in copy. This is not a v1 shortlist call that gets revisited when the real list
lands; it is a permanent exclusion. Do not re-add him, and do not propose him.

### Current directory contents

The starter set is **placeholder** — real people with public links, but Nick's
final list replaces it. Every URL below was checked and returns 200:

| Card | Links |
| --- | --- |
| Dave Mac (first card) | `youtube.com/@zerocarb` |
| Bart Kay (second card) | `youtube.com/@bart-kay` |
| Dr. Ken Berry (third card) | `youtube.com/@KenDBerryMD` · `drberry.com` |
| Dr. Paul Mason (fourth card) | `youtube.com/@DrPaulMason` |
| Dr. Shawn Baker | `youtube.com/@ShawnBakerMD` · `revero.com` |
| Dr. Anthony Chaffee | `youtube.com/@anthonychaffeemd` |
| Kelly Hogan | `youtube.com/@MyZeroCarbLife` |
| Judy Cho | `youtube.com/@NutritionwithJudy` |
| Ben Bikman (ninth card) | `youtube.com/@benbikman` · `benbikman.com` |
| Stories section | `youtube.com/@zerocarb` (Dave Mac — No Carb Life) |

`@zerocarb` appears **twice on purpose**: as the first directory card and as the
destination of the Stories section. Dave Mac is both a creator in his own right
and the archive that section points to. The card's last line says so out loud
("the same channel the stories below point to") so it reads as deliberate rather
than as a duplicate that slipped through. If you ever drop one of the two, drop
the Stories link and not the card, or that section loses its only destination.

That is nine cards — a flush 3 × 3 on desktop. Keep the count a **multiple of
three** as the list grows; twelve is the next size that also lands flush at
tablet width. See PENDING.md, "Directory size", for the grid maths. Verified
spare if a card is ever removed: **Laura Spath**, `youtube.com/@LauraSpath` —
long-term carnivore who also documents the stretches that didn't go to plan.

**Always verify a handle before you add it.** This has caught a wrong channel
every single time it was checked:

- `@DaveMac` is a public-speaking coach, not the carnivore interviewer.
- `@PrimalEdge` is a woodworking channel.
- `@BartKayNutritionScience` — the obvious guess — doesn't exist at all.
- `@DrPaulMasonMD` is a **different channel** from `@DrPaulMason`, with a generic
  "Share your videos with friends" description and no bio. The real one is
  `@DrPaulMason`, canonical `/channel/UC3vzrYZcGqpgchc5sYM5Ybw`.

Open the channel and read its description before shipping the link. A plausible
handle proves nothing.

## The studio credit

The `A NOUSTELOS_STUDIO PROJECT/>` line in the footer is **copied** from the
`askcarnivore.com` placeholder, not imported. That is what the siloing rule
requires: shared visual elements get duplicated, never linked across projects.
If the studio mark changes, it has to be updated in both repos by hand — that
cost is deliberate.

Two details worth keeping if you touch it:

- The `/>` is the studio's mark, not punctuation. It carries `aria-hidden="true"`
  so a screen reader announces "A NOUSTELOS_STUDIO PROJECT" and not a stray slash.
- Like every other outbound link on the site, it is `rel="noopener"` with no
  `noreferrer` (rule 1 above) — attribution is the entire point of a credit line.

## Changing the look

The whole palette is CSS custom properties at the top of `assets/style.v1.css`
— one `:root` block for light, one for dark. Change those tokens and nothing
else.

If you edit the stylesheet, **bump the version in the filename**
(`style.v1.css` → `style.v2.css`) and update the `<link>` in both HTML files.
Assets are cached for a year by `_headers`, so a same-name edit may not show up.

## The 404 page

`404.html` at the repo root is what Cloudflare Pages serves, with a real HTTP 404
status, for any path that doesn't exist.

Without it the first live deploy answered **every** unknown URL with the full
homepage and status 200 — a soft 404. Search engines treat each of those as a
real, distinct page, so an unbounded number of junk URLs get indexed as duplicate
homepages.

If unknown paths still return 200 after this ships, the Pages project is in
single-page-app mode, which rewrites everything to `index.html` and overrides the
404 page. Turn that off in the project's build settings — this is a static site
and has no client-side router.

## Rollback

Cloudflare Pages keeps every deployment: **Pages → Deployments → ⋯ → Rollback**.
Or `git revert <commit> && git push`.

## Out of scope for v1

Tools (macro calculator, electrolytes, Get Started guide), affiliate links,
events, any database, accounts, or backend forms. Don't add them here — they're
a later phase.

See **[PENDING.md](PENDING.md)** for the full list of what is not done and why:
what is waiting on Nick, which decisions are still open, and which gaps are
deliberate rather than forgotten. Read it before concluding something is missing.
