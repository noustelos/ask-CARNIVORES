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
assets/favicon.v2.svg   Favicon — "AC", light + dark via a media query inside the SVG
assets/og.v1.png        Social share card (1200×630)
assets/apple-touch-icon.v2.png
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

`main` is production — a push to it deploys. This project is worked on directly
on `main`, with no feature branches: preview locally (VS Code **Go Live**, or the
server command above), then one commit and push. Cloudflare will hand any
non-production branch its own preview URL if one is ever wanted, but that is not
the working flow here.

## Editing the directory

Cards live in `index.html` between the `DIRECTORY — EDIT HERE` comment markers.
Mirror every change into `gr/index.html`.

Four rules, all non-negotiable:

1. **Every external link** carries `target="_blank" rel="noopener"` — `noopener`
   and nothing else. It must **not** carry `noreferrer`.

   `noopener` is the security half: it stops the opened page from reaching back
   through `window.opener`. `noreferrer` is a separate, privacy-side flag that
   also strips the `Referer` header — and stripping it means a creator's
   analytics cannot see that the visit came from askcarnivores.com.

   Sending creators traffic they can *see* is the whole relationship play. It is
   what makes the outreach email land, and it is why the referrer stays on.

   **The footer `mailto:` is the one link with neither.** `info@askcarnivores.com`
   hands off to a mail client rather than opening a page, so there is no opener to
   sever and no referrer to send. `target="_blank"` on it produces a stray blank
   tab on some setups. Don't "fix" it into consistency with the rule above.

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

4. **The order is a rule, not a judgement call.** Dave Mac is pinned first
   because he is structural — his channel is the testimonials backbone and the
   Stories section's only destination. Everyone after him is **alphabetical by
   SURNAME, ignoring a leading "Dr."** — changed on 2026-08-17, when Nick asked
   for surnames; before that it sorted on the first name shown:

   | Card | Sorts under | Because |
   | --- | --- | --- |
   | Dr. Ken Berry | B, on "Berry" | surname, and a leading "Dr." is ignored |
   | Coach Stephen | S, on "Stephen" | no surname → the handle without "Coach" |
   | Coach Carnivore Cam | C, on "Carnivore Cam" | same rule, "Coach" dropped |
   | SHAPEFIXER | S, on "Shapefixer" | a pure handle sorts as itself |
   | Dr. Robert Kiltz / Robert Lustig | both R | then on the surname |

   A new card **slots into that rule** — the order is never re-decided, and it
   is never tidied to make the grid come out flush. The alphabet wins over
   symmetry. The rule is repeated as a comment in both HTML files so it does
   not have to be rediscovered, and the "not a ranking, not an endorsement"
   line above the grid stays exactly as written: pinning one card for a
   structural reason is not a ranking of the other twenty-three.

### "Not a ranking" here, relevance-ranked there — both are correct

The line above the grid says the directory is **not a ranking**. The bot, on the
other domain, *does* order what it shows — "for this question, at this depth,
these fit". Those look like a contradiction and are not, so don't reconcile them
by editing either one (Concept Base v3 §8 and §14.5 set this out).

| Surface | What it orders | Stance |
| --- | --- | --- |
| This directory | people | no general hierarchy — alphabetical, one structural pin |
| The bot | answers to one question | relevance to *that* question, per topic |

Ranking people is a judgement we don't make. Matching a question to a source is
the product. Berry showing up third on a deep question isn't "worse than" — he is
first on a different question. The bot's own wording for it is *"not a ranking,
it's a match"*; ours is "not a ranking, not an endorsement". Keep both.

### Do not list

**Paul Saladino is excluded.** Nick's standing decision, 2026-08-14. He is not
to appear as a source or a reference anywhere in this project — not in the
directory, not in the bot's index, not inside any future tool, not as a citation
in copy. This is not a v1 shortlist call that gets revisited when the real list
lands; it is a permanent exclusion. Do not re-add him, and do not propose him.

**Also not on the list: Dr. Kelli Ritter.** A scope call rather than a judgement
of her work — her channel's subject is chronic-anxiety recovery, and the
mental-health angle on this list is Georgia Ede's, who comes at it from food.
Nick decided it on 2026-08-15 and Concept Base v3 §17 records it in the roster,
so it is settled: don't re-propose her. Reasoning in full in PENDING.md. This
one is **not** in the page-source comment — unlike the Saladino note, which Nick
asked to stay visible there.

### Current directory contents

**These twenty-seven are the list**, not a starter set, and the list is **closed
at twenty-seven**. Don't add, drop or propose names; a change comes from Nick.
Every URL below was checked and returns 200.

⁵ = added 2026-08-17: **Dr. Sten Ekberg, Jason Fung and Nick Norwitz**. The
directory ran ahead of the bot's curation roster for a few hours; **Concept Base
v3.1 closed the gap the same day**, so §17 holds all twenty-seven and the two
match one for one again. A new name enters only if Nick judges it equally
significant.

**Ekberg's role line is credential-safe on purpose.** He is a chiropractor, not
a physician; "Dr. Ekberg" is his own branding. v3.1 makes that a rule in the
roster itself, not just a comment on his card. Never rewrite the line into
doctor, physician, or anything medical.

In card order — Dave Mac pinned, then alphabetical **by surname** per rule 4
above (changed 2026-08-17; it used to sort on the first name shown):

| # | Card | Links |
| --- | --- | --- |
| 1 | Dave Mac *(pinned first)* | `youtube.com/@zerocarb` |
| 2 | Dr. Shawn Baker | `youtube.com/@ShawnBakerMD` · `revero.com` |
| 3 | Dr. Ken Berry | `youtube.com/@KenDBerryMD` · `drberry.com` |
| 4 | Ben Bikman | `youtube.com/@benbikman` · `benbikman.com` |
| 5 | Dr. Elizabeth Bright | `youtube.com/@DrElizabethBright` · `elizbright.com` |
| 6 | Coach Carnivore Cam | `youtube.com/@coachcarnivorecam` |
| 7 | Carnivore Teacher Alpha | `youtube.com/@CarnivoreteacherAlpha` |
| 8 | Dr. Anthony Chaffee | `youtube.com/@anthonychaffeemd` |
| 9 | Judy Cho | `youtube.com/@NutritionwithJudy` |
| 10 | Dr. Georgia Ede | `youtube.com/@GeorgiaEdeMD` · `diagnosisdiet.com` |
| 11 | Dr. Sten Ekberg ⁵ | `youtube.com/@drekberg` |
| 12 | Maria Emmerich | `youtube.com/@MariaEmmerich` · `mariamindbodyhealth.com` |
| 13 | Dr. Gary Fettke | `nofructose.com` · `youtube.com/@garyfettke3210` |
| 14 | Jason Fung ⁵ | `youtube.com/@DrJasonFung` |
| 15 | Kelly Hogan | `youtube.com/@MyZeroCarbLife` |
| 16 | Bart Kay | `youtube.com/@bart-kay` |
| 17 | Dr. Robert Kiltz | `youtube.com/@doctorkiltz` · `kiltzhealth.com` |
| 18 | Robert Lustig | `robertlustig.com` · `youtube.com/@RobertLustigMD` |
| 19 | Dr. Paul Mason | `youtube.com/@DrPaulMason` |
| 20 | Nick Norwitz ⁵ | `youtube.com/@nicknorwitzMDPhD` |
| 21 | Amber O'Hearn | `mostly-fat.com` · `youtube.com/@AmberOHearn` |
| 22 | Dr. Philip Ovadia | `youtube.com/@IFixHearts` · `ifixhearts.com` |
| 23 | SHAPEFIXER | `youtube.com/@shapefixer` |
| 24 | Richard Smith | `youtube.com/@Richard-A-Smith` · `richardsmithnutrition.com` |
| 25 | Laura Spath | `youtube.com/@LauraSpath` · `lauraspath.com` |
| 26 | Coach Stephen | `youtube.com/@CoachStephen` · `theukcarnivore.com` |
| 27 | Lisa Wiedeman | `youtube.com/@carnivoredoctor` · `carnivore-doctor.com` |
| — | Stories section | `youtube.com/@zerocarb` (Dave Mac — No Carb Life) |

**Carnivore Teacher Alpha, Coach Carnivore Cam and SHAPEFIXER are YouTube-only
on purpose.** None of them runs an ordinary site; the only other links on their
channels are a storefront, a booking page and a book listing. Those are commerce,
and v1 carries no affiliate or shop links. Add a site link if one of them
launches a real one. (They used to be the last three cards and were covered by
one comment; the alphabetical re-sort scattered them, so the note now names them
in the `DIRECTORY` comment instead of pointing at a position.)

Four of these cards list **Site before YouTube**, which is deliberate and should
not be tidied into consistency:

- **Lustig's** channel last posted in 2022, **Fettke's** in 2019, and
  **O'Hearn's** in April 2025. All three channels are genuinely theirs and worth
  keeping as an archive, but the site is where each is actually reachable, so the
  site leads.
- **Kiltz** is the reverse — he posts daily, so YouTube leads. His site link goes
  to `kiltzhealth.com` because `doctorkiltz.com` now redirects there; link the
  destination, not the redirect.

Two of the new cards needed the same "link the destination, not the redirect"
call. **O'Hearn's** old blogs are `ketotic.org` — whose apex now fails the TLS
handshake outright — and `empiri.ca`, which redirects to `mostly-fat.com`. That
last one is the live site and the one linked. **Bright's** site is `elizbright.com`
and not the `drelizabethbright.com` you would guess; that domain does not resolve.

Lustig is also the one name here who is **not** a carnivore voice — he argues
metabolic dysfunction and processed food from a public-health angle. His card says
so out loud, so nobody reads the directory as claiming him.

`@zerocarb` appears **twice on purpose**: as the first directory card and as the
destination of the Stories section. Dave Mac is both a creator in his own right
and the archive that section points to. The card's last line says so out loud
("the same channel the stories below point to") so it reads as deliberate rather
than as a duplicate that slipped through. If you ever drop one of the two, drop
the Stories link and not the card, or that section loses its only destination.

That is twenty-seven cards. Twenty-seven is a multiple of three but not of two,
so the desktop grid stays flush (3 × 9) and the tablet width now leaves **one
orphan on the last row**. That is expected and it is not to be fixed: the
alphabetical rule decides the order and the count is simply how many names Nick
holds, so nothing gets added, dropped or re-sorted to square the grid. (It was
twenty-four and flush at every width until 2026-08-17 — luck, not design.)
See PENDING.md, "Directory size", for the grid maths.

Laura Spath used to be listed here as the **verified spare** if a card was ever
removed. She is card 25 now, so there is no spare — pick one and verify it the
same way if a replacement is ever needed.

**Always verify a handle before you add it.** This has caught a wrong channel
every single time it was checked:

- `@DaveMac` is a public-speaking coach, not the carnivore interviewer.
- `@PrimalEdge` is a woodworking channel.
- `@BartKayNutritionScience` — the obvious guess — doesn't exist at all.
- `@DrPaulMasonMD` is a **different channel** from `@DrPaulMason`, with a generic
  "Share your videos with friends" description and no bio. The real one is
  `@DrPaulMason`, canonical `/channel/UC3vzrYZcGqpgchc5sYM5Ybw`.
- `@Richard-Smith-Nutrition` is what the search results hand you for Richard
  Smith, reads perfectly, and **does not exist**. His handle is
  `@Richard-A-Smith`.
- `@KelliRitter` is the same trap as `@DrPaulMasonMD` — it exists, it reads
  right, and it is an **empty shell**: default "Share your videos with friends"
  description, zero videos. The real channel is `@DrKelliRitter`, and it is about
  chronic-anxiety recovery rather than carnivore. She was proposed for the
  directory and dropped; see PENDING.md.
- `@ElizabethBright` exists and has **no videos on it**. Hers is
  `@DrElizabethBright`. A third channel ID, the one interview write-ups
  circulate for her, returns a 404.
- `@Carnivore70Something` does not exist, and neither does
  `carnivore70something.com` — the domain is NXDOMAIN, not merely down. Both
  were proposed for Lisa Wiedeman. Her real handle is `@carnivoredoctor`.

**Check the site too, not just the handle.** Three of the domains proposed in the
same pass were dead: one NXDOMAIN, one failing TLS at the apex, one that only
resolves on `www`. A domain that "looks right" in a brief proves as little as a
handle that looks right in a search result.

The fastest reliable check is the channel's RSS feed, which is static XML and
needs no cookie banner or JavaScript:

```sh
curl -s "https://www.youtube.com/feeds/videos.xml?channel_id=<CHANNEL_ID>"
```

It returns the channel's real name and its recent uploads with dates, which
settles both questions at once — whether it is the right person, and whether the
channel is still alive.

Open the channel and read its description before shipping the link. A plausible
handle proves nothing.

## The footer contact line

`info@askcarnivores.com` sits in `.footer-meta` on **three** pages —
`index.html`, `gr/index.html` and `404.html`. Change it in all three or they
drift; the 404 is the one that gets forgotten, and it is the page where a
contact line matters most, since that is where someone lands when a link breaks.

Three decisions worth keeping:

- **The address is shown in full**, not hidden behind the word "Contact". A
  visible address can be read and copied by anyone whose browser has no mail
  handler — plenty of desktop setups don't.
- **No `target`, no `rel`** — see rule 1 above for why.
- **No obfuscation.** Splitting the address up to defeat harvesters needs
  JavaScript, and this site ships none. A role address is what takes the spam
  instead of a person's inbox; that is the trade, and it was made knowingly.

The CSP needs **no change** for it. `form-action 'none'` governs form
submissions, not link navigation, and a `mailto:` is neither a fetch nor a
frame — so `default-src 'none'` has nothing to say about it.

### `<!--email_off-->` is load-bearing — do not delete it

The address is wrapped in `<!--email_off-->` … `<!--/email_off-->` in all three
files. Those markers are the fix for a real bug, not tidiness.

**What happened, 2026-08-16.** The address shipped, and the live site showed
`[email protected]` while Go Live showed it correctly. Nothing was wrong with the
markup. Cloudflare's **Email Address Obfuscation** (Scrape Shield — **on by
default on every zone**, nobody switched it on) rewrites any address it finds in
your HTML into that placeholder, and injects
`/cdn-cgi/scripts/…/email-decode.min.js` to swap the real one back in on the
client. Our CSP is `default-src 'none'` with no `script-src`, so **the decoder is
blocked and the placeholder is all anyone ever sees** — both the visible text and
the `href`, which becomes `/cdn-cgi/l/email-protection#<hex>`.

This is the CSP's silent-failure mode arriving from an unexpected direction: the
break was introduced by the *edge*, not by our code, which is why it could not
reproduce locally — `_headers` does not apply on localhost, and neither does
Scrape Shield.

`<!--email_off-->` tells Cloudflare to leave that block alone. It is the right
fix rather than allowing the script, because this site's whole point is shipping
no JavaScript, and we deliberately chose an unobfuscated role address anyway.

If it ever needs turning off zone-wide instead: **dashboard → Security →
Settings → filter "Client-side abuse" → Email Address Obfuscation → Off**, or a
`PATCH` of the `email_obfuscation` zone setting to `"off"`. That was not done —
a fix living in the repo is versioned and cannot be silently undone by someone
clicking around the dashboard.

Two related traps worth knowing, from Cloudflare's own docs: the rewrite skips
`<script>`, `<noscript>`, `<textarea>`, `<head>` and every HTML attribute except
an `<a>` tag's `href`, and it does not run at all when the response carries
`Cache-Control: no-transform`. So an address that seems immune in one place may
still be rewritten in another.

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

### The icons

`favicon.v2.svg` is the mark: **AC**, the domain's initials, in the wordmark's
own two tones — the `A` in `--ink`, the `C` in `--accent`, on a `--bg` tile. It
carries a `prefers-color-scheme` media query so it flips to the dark tokens on
dark browser chrome, the same swap `style.css` does, and the tile colours match
the two `theme-color` meta tags exactly.

The light colours are **presentation attributes** and the media query only
overrides them. Keep it that way: anywhere the internal `<style>` is ignored, the
icon still renders correctly instead of coming out black.

Two things that will silently break this file:

- **No `--` inside an XML comment.** It is illegal in XML, so writing a CSS
  custom property name in a comment stops the whole file parsing and the favicon
  just disappears. Say "the ink token", not the literal name.
- **The icons are under `/assets/*`**, so they are cached for a year like
  everything else there. Redrawing one means **bumping its filename version** and
  updating the `<link>` in `index.html`, `gr/index.html` **and `404.html`** —
  three files, not two.

`apple-touch-icon.v2.png` is the same mark rastered at 180 × 180 for the iOS home
screen, full-bleed with no corner radius because iOS applies its own mask. It is
generated, not hand-drawn: Arial Bold at the same cap ratio and tracking as the
SVG, supersampled 4× and downscaled. Redraw it whenever the SVG changes, or the
two drift apart.

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

## The CSP — read this before adding anything external

The `Content-Security-Policy` line in `_headers` is the one thing on this site
that fails **silently**. Nothing errors, nothing looks broken, the addition just
does nothing. That is by design, and it is why this section exists.

Current policy:

```
default-src 'none'; img-src 'self'; style-src 'self'; font-src 'self';
base-uri 'none'; form-action 'none'; frame-ancestors 'none'
```

`default-src 'none'` denies every resource type that is not named explicitly.
Only images, stylesheets and fonts are allowed, and only from our own origin.
Everything unlisted inherits the deny — so **all** JavaScript, all `fetch`/XHR,
and all iframes are currently blocked. That is correct today: the site ships zero
JavaScript, and the CSP is what keeps it that way.

### It does not apply on localhost

`_headers` is a Cloudflare Pages file. Live Server and `python3 -m http.server`
do not read it, so **locally there is no CSP at all**. A script that works
perfectly in Go Live can be dead on the live site. If you want to test a policy
before deploying, paste it into a temporary `<meta>` tag in the page:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; ...">
```

Delete it before committing — `_headers` is the real policy, and two sources of
truth is how they drift. (`frame-ancestors` is ignored in a `<meta>` tag; it only
works as a real header.)

### Diagnosing a block

Open DevTools → Console. A CSP block always logs a line starting `Refused to
load…` or `Refused to execute…`, naming the directive that stopped it. That
directive name is the fix — it is the one you need to extend.

### What to add, by case

Add the host to the named directive, keep `default-src 'none'`, and never reach
for `'unsafe-inline'` on `script-src` — it disables the protection wholesale.
Put the JavaScript in a file under `/assets/` and allow `'self'` instead.

| You are adding | Directive(s) to extend |
| --- | --- |
| Cloudflare Web Analytics | `script-src https://static.cloudflareinsights.com` + `connect-src https://cloudflareinsights.com` |
| Our own JS (a v1.1 tool) | `script-src 'self'`, with the code in `/assets/*.js` |
| An embedded YouTube video | `frame-src https://www.youtube-nocookie.com` + `img-src` for the thumbnail host |
| The bot in a panel on this site | `frame-src https://askcarnivore.com` + `script-src 'self'` for the open/close — see below |
| A web font from a CDN | `font-src` the file host + `style-src` the CSS host |
| An image from another domain | `img-src` that host |

Change the header and ship the feature **in the same commit**. Splitting them is
what produces the silent failure — the feature lands, appears fine locally, and
is inert in production with nothing in the logs to say why.

### `frame-ancestors` and `frame-src` point in opposite directions

Two directives look alike and do opposite jobs, and the planned bot panel
(Concept Base §16) needs one of them:

- **`frame-ancestors 'none'`** — backed by `X-Frame-Options: DENY` — says *nobody
  may put this site inside a frame*. It is about **us being framed**, and it stays
  as it is.
- **`frame-src`** says *which sites a page here may put inside a frame of its
  own*. It is absent today, so `default-src 'none'` denies all of them.

Framing the bot needs `frame-src https://askcarnivore.com` on **this** site and a
matching `frame-ancestors https://askcarnivores.com` on **the bot's** side — the
bot's own header, set in the bot's own repo. Neither is a shared secret and
neither breaks the siloing rule: an iframe is a public URL in a window. Details
and the rest of what it costs are in PENDING.md, "The bot, embedded".

## Rollback

Cloudflare Pages keeps every deployment: **Pages → Deployments → ⋯ → Rollback**.
Or `git revert <commit> && git push`.

## Out of scope for v1

Tools (macro calculator, electrolytes, Get Started guide, shopping list),
affiliate links, events, any database, accounts, or backend forms. Don't add them
here — they're a later phase. The events calendar has a spec now (Concept Base v3
§13) and is still a later phase; its build rules are in PENDING.md.

See **[PENDING.md](PENDING.md)** for the full list of what is not done and why:
what is waiting on Nick, which decisions are still open, and which gaps are
deliberate rather than forgotten. Read it before concluding something is missing.
