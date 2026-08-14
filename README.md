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

Two rules, both non-negotiable:

1. **Every external link** carries `target="_blank" rel="noopener noreferrer"`.
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

### Current directory contents

The starter set is **placeholder** — real people with public links, but Nick's
final list replaces it. Every URL below was checked and returns 200:

| Card | Links |
| --- | --- |
| Dr. Shawn Baker | `youtube.com/@ShawnBakerMD` · `revero.com` |
| Dr. Ken Berry | `youtube.com/@KenDBerryMD` · `drberry.com` |
| Dr. Anthony Chaffee | `youtube.com/@anthonychaffeemd` |
| Dr. Paul Saladino | `youtube.com/@paulsaladinomd` · `carnivoremd.com` |
| Kelly Hogan | `youtube.com/@MyZeroCarbLife` |
| Judy Cho | `youtube.com/@NutritionwithJudy` |
| Stories section | `youtube.com/@zerocarb` (Dave Mac — No Carb Life) |

Verified spare, if you want a seventh: **Laura Spath**,
`youtube.com/@LauraSpath` — long-term carnivore who also documents the stretches
that didn't go to plan. Six cards is what makes the grid land as a clean 3×2 on
desktop, which is why she isn't in by default.

**Always verify a handle before you add it.** Several obvious-looking guesses
resolve to completely different people — `@DaveMac` is a public-speaking coach
and `@PrimalEdge` is a woodworking channel. Load the page before you ship it.

## The studio credit

The `A NOUSTELOS_STUDIO PROJECT/>` line in the footer is **copied** from the
`askcarnivore.com` placeholder, not imported. That is what the siloing rule
requires: shared visual elements get duplicated, never linked across projects.
If the studio mark changes, it has to be updated in both repos by hand — that
cost is deliberate.

Two details worth keeping if you touch it:

- The `/>` is the studio's mark, not punctuation. It carries `aria-hidden="true"`
  so a screen reader announces "A NOUSTELOS_STUDIO PROJECT" and not a stray slash.
- The link is `rel="noopener"` **without** `noreferrer`. Stripping the referrer
  would hide where the traffic came from, and attribution is the entire point of
  a credit line.

## Changing the look

The whole palette is CSS custom properties at the top of `assets/style.v1.css`
— one `:root` block for light, one for dark. Change those tokens and nothing
else.

If you edit the stylesheet, **bump the version in the filename**
(`style.v1.css` → `style.v2.css`) and update the `<link>` in both HTML files.
Assets are cached for a year by `_headers`, so a same-name edit may not show up.

## Rollback

Cloudflare Pages keeps every deployment: **Pages → Deployments → ⋯ → Rollback**.
Or `git revert <commit> && git push`.

## Out of scope for v1

Tools (macro calculator, electrolytes, Get Started guide), affiliate links,
events, any database, accounts, or backend forms. Don't add them here — they're
a later phase.
