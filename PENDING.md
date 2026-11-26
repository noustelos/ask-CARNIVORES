# Pending — what is not done

State of `askcarnivores.com` as of **2026-08-16**, reconciled against Concept Base
**v3**. The site is live and passes the build brief's Urgent QA. Everything below is deliberately *not* built, and why.

**What v3 changed for this repo.** Almost nothing structural — v3 §15 says the
portal and directory briefs stand, because the portal is static and v3's rewrite
is about the *bot's* index. Two things do land here: the creator list is no longer
placeholder (it now matches the locked roster, §6 below), and the events calendar
has a real spec instead of a one-line mention (§3 below). Everything else v3 adds
— video-level index, Start/Deep registers, the scan-to-grid layer — is the bot's
side of the wall and needs no change here.

Nothing here is a defect. It is either waiting on Nick, waiting on a decision, or
ruled out of v1 on purpose.

---

## 1. Blocked on Nick

### Contact address — closed 2026-08-16, see §6

### Buy-me-a-coffee
Brief §11 and Concept Base §3 both include it. Not added — no link was supplied.

Concept Base is specific about placement on the **bot**: footer, discreet, never
between question and answer. On the portal it is a plain footer link, so no
design work is pending, only the URL.

The bot is waiting on the same link (v3 status list), so one URL closes it in both
repos — copied by hand into each, like every other shared element.

**To close:** give the link.

### Final creator list — no longer blocked, see §6
Closed by Concept Base v3 §17. Moved to "Done, recorded so it isn't re-litigated".

### Logo and brand direction
Brief §11 lists these as open. None supplied, so the site uses a plain type
wordmark and a self-designed palette: bone, deep charcoal, one muted rust accent.
Every colour is a CSS custom property at the top of `assets/style.v5.css`, so a
rebrand is a token swap, not a rewrite.

**To close:** supply logo/colours, or leave as is.

---

## 2. Open decisions

### ~~Bart Kay's title~~ — **settled 2026-08-31: "Former professor"**
Nick instructed the change; he owned this question and closed it. The cards read
**"Former professor · nutrition science"** / **«Πρώην καθηγητής · διατροφική
επιστήμη»**, and an HTML comment on each records that the hedge was deliberate
and was lifted on purpose — so nobody reinstates it after reading a third-party
bio. The history below is kept because that is exactly the argument someone
would make.

Previously the card said **"Former academic"**, which avoided taking a side:

| Source | Says |
| --- | --- |
| His own YouTube channel bio | "former professor" in cardiovascular and respiratory physiology |
| His LinkedIn | "YouTube Based Educator and Private Consultant" |
| Third-party bios and interview write-ups | "former **senior lecturer**", "retired senior lecturer" |

Senior lecturer and professor are different ranks in UK/NZ/AU systems, which is
where he taught. A site whose entire pitch is *"we point you to the source, judge
it yourself"* cannot afford to hand someone a rank the record doesn't clearly
support — that is the fastest way to hand a critic a free hit.

"Former academic" was true under every version, so the card used that while the
question was open — the reasoning above still holds for any *other* name whose
rank is contested. It stopped applying here on 2026-08-31, when the owner of the
question answered it.

### ~~Dave Mac's interview count~~ — **settled 2026-08-31: "already 2K conversations"**
Nick instructed the number; he owned this question and closed it. The cards read
**"already 2K conversations"** / **«ήδη 2K συζητήσεις»**.

The card previously said "well over a thousand" — public sources ranged from
1,000+ to 1,900+, and the lowest verifiable figure was chosen because it does not
age and cannot be challenged.

**One consequence, accepted rather than overlooked:** a hard number dates the
moment it ships, because he keeps recording. "2K" is a floor phrased as a round
figure, so it stays true for a while, but it is not maintenance-free the way
"well over a thousand" was. It will want revisiting.

**The Stories section was brought in line the same day.** It said *"well over a
thousand conversations"* and now says *"2K conversations"*, so the number appears
once, in one form, on each page. It was outside the first instruction and Nick
extended the scope after it was flagged.

**Both places move together from now on** — the card's bio and the Stories
paragraph, in both languages. Four lines, one number. That is the maintenance
cost the round figure brings with it.

### Directory size — twenty-seven, and the grid no longer drives it
**Twenty-seven cards, as of 2026-08-17** (24 until then). A multiple of three but
not of two: flush on desktop, **one orphan on the last tablet row**. Nothing
pending here — the count is simply how many names Nick holds, not a number anyone
chose, and the orphan is the correct outcome rather than a bug.

The grid is `auto-fit / minmax(17rem, 1fr)`, so the column count follows the
viewport rather than fixed breakpoints — three columns on a normal desktop, two
around tablet width, one on a phone. Which counts land flush follows from that:

| Cards | Desktop (3 col) | Tablet (2 col) |
| --- | --- | --- |
| 15 | flush | one orphan |
| 18 | flush | flush |
| 24 | flush | flush |
| 27 (current) | flush | one orphan |
| multiples of 3 | flush | flush only if also even |

**What changed on 2026-08-15:** the directory is now sorted by a rule — Dave Mac
pinned, everyone else alphabetical ignoring a leading "Dr." — and that rule
**outranks the grid**. Landing on twenty-four was luck, not a target. Do not add,
drop or reorder a card to make the last row come out even; a short final row is
the correct outcome whenever the verified list is not a multiple of three. The
rule is written into both HTML files as a comment and into `README.md` rule 4.

**What changed on 2026-08-17:** the rule now sorts on **surname**, not on the
first name shown, and three cards were added. The tablet orphan arrived with
them — and stays. This is exactly the case the paragraph above was written for.

Laura Spath was recorded here as the verified spare if a card ever needed
replacing. She is a card in her own right now, so **there is no spare** — verify
a fresh name the same way if one is ever needed.

---

## 3. Not built on purpose (v1.1+)

Ruled out by Build Brief §6. Listed so nobody re-derives them as gaps:

- **Tools** — macro calculator, electrolytes, Get Started, printable shopping list
- **Affiliate / Amazon integration** — belongs inside the tools, per Concept §3
- **Community events** — now has a real spec in Concept Base v3 §13, below
- **Any database, accounts, sign-up, or backend form**
- **Anything belonging to the bot** — hard siloing rule, see `README.md`. The one
  planned exception is a *framed window* onto the bot, described below; a window
  is not a copy, and nothing of the bot's ever lands in this repo.

### Tools — decided 2026-08-14: later
The two source documents disagreed. Build Brief §6 ruled tools out of v1;
Concept Base §11 counted 2-3 of them in. Nick has settled it: **tools are built
later**, so the brief stands and the portal ships without them.

One consequence to carry forward rather than rediscover. Concept Base §3 puts
affiliate income *inside* the tools — "shopping list with links", "Get Started
that suggests books". So until the tools exist, **the portal has no income path
at all**, and under Model A the portal is what subsidises the free bot. Nothing
is broken by this; it just means the money side of the plan starts with v1.1, not
with launch.

First tool when it reopens: **Get Started (7 days)** — the proposal, not a
decision. Concept Base v3 still lists "which portal tool first" as an open
question (§12) with Get Started as the suggestion, on share value.

Concept Base **v2** (2026-08-15) had already dropped the tools out of its own
first shippable scope, and **v3** keeps them out — its §11 core is the bot only —
so the two documents no longer disagree and there is nothing left to settle here.
v3 also names the tool set slightly more fully than the brief did: Get Started,
Electrolytes, **Shopping List**, macro calculator (§5).

### Events calendar — specced in Concept Base v3 §13, not built

The one portal feature v3 promoted from a bullet to a section. It is the
switchboard idea applied to events: the portal never *runs* an event, it routes
to one. Recorded here so the rules are known before anyone starts, not
rediscovered halfway.

**The risk is maintenance, not build.** A calendar showing last month's events
looks abandoned — worse than having none. Everything below follows from that:

- **Curated-first.** Fifteen to twenty real events from a finite set of
  organisers (Revero/Baker retreats, low-carb and carnivore conferences, talks).
  "Every event on the planet" is the vision, not v1.1.
- **Static, no backend.** A JSON or markdown file rendered as a calendar view —
  same shape as the directory, same zero-infrastructure rule.
- **Self-submission form is v-next**, separately. That is the point where static
  becomes backend, with moderation and spam to answer for, and it is deliberately
  a later step.

**Commission — locked rules, do not soften:**

- **Never solicited.** Accepted only if the organiser offers it, so there is no
  pay-to-play.
- **Payment never decides** whether an event is listed or how high it sits.
- **Disclosed** wherever it exists.
- It is a bonus and a side effect — likely the portal's first income path — not
  the reason the calendar exists.

**Safeguards, all of them familiar from the directory:** show times in the local
zone *and* name the zone; carry a disclaimer that we do not run these events and
the organiser should be confirmed; **summarise, never copy** an organiser's
description; and hold the same link-label discipline as rule 2 — an event
listing describes what it is, not what it fixes.

**Order:** after the real directory/index content, not before. Sourcing rides on
the same outreach email as everything else — it is ask #3 in it (Concept §10).

### The bot, embedded — Concept Base §16, **shipped 2026-08-30**

Someone standing on this site can now ask the bot without leaving it: a floating
launcher opens a panel, and the panel holds **an iframe of the bot's public
`/embed` page**. Three layers, and the boundary between them is the entire point:

| Layer | Lives in | What it is |
| --- | --- | --- |
| Component | **this repo** | launcher, panel, open/close, styling — cosmetics only |
| iframe | this repo, one tag | points at the public bot URL |
| Bot | the bot's repo | frontend, worker, index — untouched, on its own origin |

**The rule that keeps the siloing intact, and it still holds:** the component
handles appearance and nothing else. It **never** `fetch`es the bot's worker. The
moment it does, this repo has to know the bot's endpoint, wants CORS, and there
are two things that can drift — the cross-repo coupling the siloing rule exists to
prevent. The iframe boundary is what keeps "the only connection is a public
hyperlink" literally true: a frame *is* a public URL in a window. `ask.v1.js`
carries this in a comment at the top; that comment is the spec, not decoration.

**"Component" never meant "a second bot."** The bot's code, worker, key and index
stay where they are. "Copy, don't link" governs *static shared elements* — the
studio credit, a logo — and **not** the bot's engine. One bot, one index; this
site is a window onto it, so anything improved on the bot shows up here on its
own, with no deploy of ours.

#### What it is, concretely

- `assets/ask.v1.js` — **the first and only JavaScript on the site**, ~60 lines,
  `defer`, versioned filename like the CSS. Under `script-src 'self'`, never
  `'unsafe-inline'`.
- **Progressive enhancement.** In the HTML the launcher and the banner's "Just
  Ask" button are ordinary links to `askcarnivore.com`, both carrying `data-ask`.
  One delegated listener upgrades them into the panel. If the script fails to
  load, both still work — with the page load §16 wants to avoid, but nobody is
  stranded and there is no fallback copy to maintain.
- **Lazy-load, once.** The iframe ships with no `src`; it is set on the first
  press and never again. A visitor who never asks never pays for the bot.
- **The `src` is never cleared on close.** Close, reopen, and the conversation is
  still there. For someone who shut the panel by accident, wiping the thread is
  the worst thing we could do — and this audience shuts things by accident.
- **`inert` on the rest of the page**, not a focus trap: a trap cannot see into a
  cross-origin frame, so the page outside the panel leaves the tab order
  entirely, which is also what a screen reader needs.
- **CSP, same commit:** `script-src 'self'` and `frame-src https://askcarnivore.com`
  added to the single `/*` block in `_headers`. Host-only, and *in that block* —
  the reasoning is in the file's own comment and in `README.md`.
- **Analytics stay split.** What happens inside the frame is the bot's to
  measure; what happens around it is ours. Nothing was added either side.

#### The trap this build uncovered — do not add `sandbox`

The iframe carries **no `sandbox` attribute**, deliberately, and there is a
comment saying so next to the tag in both HTML files.

`sandbox` without `allow-same-origin` gives the framed page an **opaque origin**.
The bot's own `chat.js` then calls `/api/ask` with `Origin: null`, the worker's
origin check cannot parse that and rejects it, and the panel renders a flawless
chat that answers **403 to every question**. The failure looks like our bug and
is not. `allow-scripts allow-same-origin` together is close to no sandbox at all
for a cross-origin frame, so the attribute buys nothing here and costs this. The
isolation comes from the origin boundary and from `frame-src` naming exactly one
host.

#### Who it is for (Concept Base v3.1 §16)

The audience is **50+, most of them managing something medical**. That is also
the answer to the obvious shortcut — *why not just link across to the bot?* A
redirect is **more** friction for this age group, not less: two page loads, a
change of surroundings, and "where am I / how do I get back". The panel keeps the
person on the page; closing it *is* the back button. It also protects "Just Ask"
— ask where you are.

So the chrome is built for ease, not for cleverness, and all four held:

- **A large launcher with WORDS on it** — "Ask a question" / «Ρωτήστε» — not a
  small chat-bubble glyph. A cryptic icon is not recognised as "you can ask here".
  It is also **never hidden on scroll**: a launcher that disappears is one this
  audience does not find again.
- **Large tap targets** — the launcher is 3.5rem tall and full-width on a phone;
  the × is 2.9rem square.
- **A full-screen panel on mobile**, a corner panel from 40rem up, with an
  unmistakable **×** at the top right. The launcher hides while the panel is
  open, so two competing controls never split attention.
- **Closing is the "back"** — no redirect to undo. Esc and the backdrop close it
  too, and focus returns to whichever control opened it.

**One direction only:** the bot inside the portal, yes. The portal inside the
bot, no — the bot stays a clean interface and never fills up with commerce.

#### What is still open

- The framed `/embed` page is **English only**. A Greek visitor opens a Greek
  launcher and finds an English chat. Decided on 2026-08-30 not to warn about it:
  this audience already operates in English for this material. If that changes,
  the fix belongs on the bot's side, not here.
- The panel was verified on a preview deploy for chrome, CSP and script. **The
  frame itself cannot be checked on a preview** — the bot's `frame-ancestors`
  names `askcarnivores.com` and `www.` only, so `*.pages.dev` is blocked and the
  panel opens empty there. Expected, not a bug.

### Highlights — Concept Base §16's second window, **shipped 2026-08-30**

`/highlights/` and `/gr/highlights/` are a full-page iframe of the bot's `/highlights`,
which renders a card stack of the videos Nick marks `blog=yes` in the sheet.
Same model as the ask panel and for the same reason: **the list is the bot's**,
and this repo is a window onto it rather than a second copy. One index, one
place it is curated, and anything he adds to the sheet appears here without a
deploy on either side.

**It cost this repo no CSP change at all.** `frame-src https://askcarnivore.com`
is host-only, so it already covered a second page on that host. If a frame is
ever pointed at a *different* host, that is when the header moves.

**Zero JavaScript on these two pages.** Unlike the panel, this is a page rather
than a control, so there is nothing to open or close — a plain `<iframe>` with a
`src`, no launcher, no lazy-load. `ask.v1.js` is still the site's only script
and it is not loaded here.

The iframe carries **no `sandbox`**, the same rule as the panel's but for a
different reason: this page runs no fetch, so there is no `Origin` to break.
What a sandbox would break is the links — every card opens YouTube with
`target="_blank"`, and without `allow-popups` none of them would open.

**The launcher is deliberately absent from this page, and from the story
pages.** Decided 2026-08-30: they are content, and a floating button over
content competes with it. Asking is the *directory's* action, and the directory
is one tap away in the menu. So the launcher lives on `/` and `/gr/` only. This
is a decision, not an inconsistency to tidy up — do not add it "for symmetry".

**The name.** It was "What's New" until review on 2026-08-30, when the name and
the sort turned out to disagree: `pin` lifts a video above the calendar, so the
order is editorial first and chronological second, and a name promising recency
promised something the page does not keep. Renamed to Highlights / Επιλογές, and
the routes moved with it — `/highlights/`, `/gr/highlights/`, and the bot's
`/highlights`. No redirects: neither path had ever been live.

**No dates on the cards**, also from that review. The sheet's `date` is the day
Nick added the row, not the day the video came out, so on a card it answered a
question nobody asked with a number a reader would misread. It stays in the
sheet, orders the page — pinned first, then newest — and never appears on it.

**A trap this feature uncovered.** The bot's Pages project falls back to its
`index.html` for any unknown path and returns **200**, so a wrong iframe path
does not fail: it quietly frames the bot's chat instead. That is exactly how
this nearly shipped — the portal preview framed `/new` before the bot's branch
was merged, and showed a working chat panel where the list should have been. A
green status code proves nothing about a frame; after changing a framed URL,
look inside it on the live page.

**No footer on these two pages** (2026-08-30, after the live check). The framed
page ends with its own "Positions and personal experience, not medical advice",
so the portal's footer put a second disclaimer immediately below the first and
cut the list off visually. The frame is the content on this page, so it gets the
screen. Every other page — directory, story, 404 — keeps the full footer, where
the disclaimer is the page's own promise and nothing else is making it.

The **chat panel does not have this problem** and needs no equivalent change: it
is an overlay, not a page, so the footer sits *behind* it rather than stacked
below it, and there is no separate chat page in this repo.

**What is still open:** the framed page is English, like `/embed`, so a Greek
visitor gets a Greek page around an English list. Same call as the panel, same
reasoning — this audience already operates in English for this material — and
the fix, if it is ever wanted, belongs on the bot's side.

### The bot's index went video-level — nothing to do here, and one thing not to do

Concept Base v3 rewrites the shared index from *topic → channel* to **topic →
video**, adds a **Start with / Go deep** register per video, tags creators on
three separate axes (register, topic, role) and has a cron scan build the whole
grid. All of that lives on the bot's side of the wall. This repo has no index,
consumes none, and needs no change — which is exactly what §15 says, in v3 and
again in v3.1.

The thing not to do: **don't drag any of it onto the cards.** No "Start with" or
"Go deep" badges, no topic or role filters, no swapping a channel link for a
video link. The directory is a page of *people*, deliberately — the bot is the
surface that answers per question. Cards would also rot the moment the scan
re-ranked something, and this site has nothing that re-ranks.

### Creator email addresses on the cards — considered, advised against
Nick asked whether each card should carry the creator's public email as a
clickable `mailto:`. Recommended against, for reasons that outlast the question:

- **It undercuts the outreach.** The plan is to email these people asking for
  their topic lists and their blessing (Concept §10). Finding their address
  already republished on our site turns "I'm sending you traffic" into "why is my
  email on your website".
- **It is the thing §6 forbids, in another form.** "Link-out, not rehost. We send
  traffic to creators, we don't mine them." Copying their contact details onto our
  page moves data *to us* instead of sending people *to them*.
- **Public ≠ free to republish.** One address on their own About page is a
  different exposure from nine addresses aggregated into one machine-readable
  list, which is exactly the shape address harvesters collect. It measurably
  increases their spam.
- **GDPR.** Email addresses are personal data, "it was public" is not a lawful
  basis for republication, and any of them can demand removal. The project already
  claims privacy as a value.
- **Rot.** Addresses change. A dead one on our card reads as our mistake.

The YouTube link already reaches their About tab, where the address lives and
stays current. If an explicit contact affordance is ever wanted, link their
**contact page**, not the address.

Reopen only if a creator gives an address for public use themselves — then there
is consent, and it belongs in v1.1 with the relationship already built.

---

## 4. Nice-to-have not done

### Cloudflare Web Analytics
Brief §8 lists it as nice-to-have, cookieless. Not added.

**This one has a trap.** `default-src 'none'` in the `_headers` CSP blocks **all**
scripts, so dropping in the analytics snippet without touching the CSP means it
silently does nothing — page keeps working, no visible error, no data collected.
It needs `script-src` for the beacon host and `connect-src` for where it reports.

The site now ships exactly **one** script, `assets/ask.v1.js` for the ask panel,
under `script-src 'self'`. Analytics would be a *second* one, and — unlike ours —
a third-party host, so it still needs its own `script-src` and `connect-src`
entries. "There is already a script-src" is not the same as "this beacon is
allowed".

Full runbook — the exact directives, why it cannot be tested on localhost, and
how to read a CSP block in the console — is in `README.md`, "The CSP".

**To close:** decide if it's wanted, then set the CSP and the snippet together in
one commit.

---

---

## 5. Known and accepted

### These docs are readable on the live domain
Cloudflare Pages serves every file in the repo, so `README.md`, `PENDING.md` and
`.gitignore` are all reachable at `askcarnivores.com/<file>`. Verified, not
theoretical.

`robots.txt` now disallows them, which keeps them out of search results — the
part that actually mattered, since otherwise they surface as pages of the site.
It does **not** block direct access, and nothing can: the GitHub repo is public,
so the same text is a click away regardless.

Worth knowing when writing in these files. This one included: anything put here
is effectively published. Keep credentials, private reasoning about named people,
and anything commercially sensitive out of them.

---

## 6. Done, recorded so it isn't re-litigated

- **Open Graph tags + favicon** (§8 nice-to-have) — both shipped.
- **Soft 404** — the first live deploy answered every unknown URL with the
  homepage and status 200. Fixed with `404.html`; verified returning a real 404.
- **`noreferrer` removed** from outbound links so creators can see the traffic in
  their own analytics. Reasoning in `README.md` rule 1.
- **Paul Saladino** — permanently excluded. See `README.md`, "Do not list". Nick
  has confirmed he is fine with that note being readable in the page source.

### SEO and `llms.txt` — shipped 2026-09-06

The head of every page was already carrying title, description, canonical, a
reciprocal `hreflang` triple, Open Graph and a Twitter card, so this was
addition rather than repair: `/llms.txt`, `Organization` + `WebSite` JSON-LD on
the two directory pages, AI crawlers named explicitly in `robots.txt`, and
`sitemap.xml` reordered into language pairs. How each works is in `README.md`,
"Search engines and language models". Recorded here are the three things that
were decided against, so they are not proposed again as gaps:

- **No `Person` entries and no `ItemList` in the structured data**, and **no
  creator list in `llms.txt`.** Nick chose the narrow option in both on
  2026-09-06. Publishing the twenty-seven as a machine-readable list of named
  individuals is a different act from listing them on a page: "not a ranking,
  not an endorsement" is a promise this site makes in prose, and `ItemList`'s
  `itemListOrder: ItemListUnordered` is a field in the data, not a guarantee
  about how anything downstream renders it. The wider version is a real SEO
  gain and it was turned down knowingly, not overlooked. It stays available if
  he ever changes his mind — it is not blocked on anything.
- **No `<lastmod>` in the sitemap.** Nothing in a repo with no build step keeps
  the dates honest, and a stale one is discounted. It becomes worth adding the
  day something maintains it, and not before.
- **No email in the JSON-LD.** Cloudflare's Email Address Obfuscation rewrites
  addresses in markup and `<!--email_off-->` cannot wrap the inside of a script
  block, so an address there could be silently rewritten into
  `[email protected]` inside valid-looking JSON — invisible on localhost, exactly
  like the 2026-08-16 breakage. Contact stays in the footer and in `llms.txt`.

One thing worth knowing rather than deciding: a `<script type="application/ld+json">`
block is **not** governed by `script-src 'self'`, because a script
whose type is not a JavaScript MIME type is never executed. The CSP needed no
change and must not be loosened for it. `assets/ask.v1.js` remains the only
executable script on the site.

### "My Story" and the header menu — shipped 2026-08-29

The site said what it is and who is on it, and never who made it or why.
`/about/` and `/gr/about/` now carry Nick's own account. Recorded here so three
decisions are not re-opened:

- **Two pages, not a toggle.** It follows this site's i18n — parallel URLs with
  `hreflang` — because the CSP here (`default-src 'none'`) blocks every script,
  so the bot's single-page scripted switch could not run even if we wanted it.
  The two sites solving this differently is correct, not drift.
- **The menu is the home for sections, and the footer is not.** The link went
  into a header `<nav>` built as a list from day one, because FAQ and others are
  coming. It was briefly in both places; that was a mistake and was undone.
- **The stylesheet went v2 → v3** for the menu's rules. First time this repo's
  versioning convention was exercised on a real change: rename, update the
  `<link>` in every page, delete the old file.

Also changed that day, and bigger than the page: **the no-branches workflow was
replaced** by branch → preview → merge, because local preview cannot see the CSP
or the cache headers. See `README.md` and `CLAUDE.md`.

### Contact address — shipped 2026-08-16

`info@noustelos.gr` is live in the footer of `index.html`, `gr/index.html`
**and `404.html`**.

The site launched with no address at all: `hello@askcarnivores.com` was written
first and pulled before launch, because the mailbox did not exist and a
`mailto:` that bounces breaks the same honesty rule the under-construction
notice exists to satisfy. The mailbox is real now, so the comment that marked
the spot has become the link.

**The 404 gained one, having been recorded here as not needing it.** That note
was written when there was no address to add; with one, the broken-link page is
the *best* place for it — it is where someone lands when a link is dead and the
only way they can tell us. Not a reversal of a decision, a decision that had
lost its premise.

Mechanics and the three standing decisions — full address rather than the word
"Contact", no `target`/`rel`, no obfuscation — are in `README.md`, "The footer
contact line". Nothing about the CSP changes.

**It broke on the live site the same day, and the cause is worth remembering.**
The page showed `[email protected]` in production while Go Live showed it
correctly. Cloudflare's Email Address Obfuscation — a Scrape Shield feature
that is **on by default**, that nobody enabled — had rewritten the address and
injected a decoder script that our own CSP then blocked. Fixed in-repo by
wrapping the link in `<!--email_off-->`; full write-up in `README.md`.

Two things this proves rather than suggests. **The edge can change our HTML**,
so "it works locally" now has a second failure mode on top of `_headers` — the
markup that reaches a visitor is not necessarily the markup we committed. And
**the CSP's silent failure can be triggered by something we did not add**: the
blocked script was Cloudflare's, injected into a page that ships no JavaScript
of its own.

### The creator list is settled — twenty-seven, and closed at twenty-seven

This was the last content item blocked on Nick, and Concept Base v3 closed it.
Its §17 **Curation Roster** is locked and is Nick's own map, and it matches the
shipped directory **one for one**.

That match broke for a few hours on 2026-08-17, when **Dr. Sten Ekberg, Jason
Fung and Nick Norwitz** landed as cards before the roster knew about them.
**Concept Base v3.1 closed the gap the same day**: the roster is now twenty-seven
too, the three are bucketed on the bot's side, and the list is **closed at
twenty-seven** — a new name enters only if Nick judges it equally significant.
Never read the three additions as an invitation to propose a fourth.

**Sten Ekberg carries a hard rule** that v3.1 promotes from a card comment to the
roster itself: he is a **chiropractor, never an MD**. No surface here may imply
a medical degree — the role line on his card is credential-safe on purpose and
is not to be "completed" from his branding.

The roster sorts those names into buckets — a register lean (Start with / Go
deep), topic buckets (recipes, fertility, metabolic health), a role bucket
(coaches), and Dave Mac on his own testimonials axis. **Those buckets are the
bot's, not this page's.** They are how the names are fed into the bot's scan
layer; here all twenty-seven stay one flat grid in the rule-4 order. See "The
bot's index went video-level" above for why they must not be imported onto cards.

Two consequences worth stating plainly:

- **Do not propose additions.** The list is not a starter set waiting to be
  improved. A new name is Nick's call and arrives from the roster, not from a
  helpful sweep of the space.
- **Register tags for the women are still open** on the bot's side (v3 §14.11 —
  Nick has not listened to those channels yet). That is a bot-index gap and
  **nothing is pending on the cards**, which carry no register at all.

**The visible wording stays "Starter directory" / "a starting set"** (and
"Αρχικός κατάλογος" in Greek). Nick kept it on 2026-08-16, after the list was
settled: on the page it reads as *"not exhaustive"*, which is still true and
still the right note to strike. It is not a leftover — do not tidy it into
"the definitive list" to match this section.

### The 2026-08-15 additions — seven proposed, six shipped

Six cards were added and the whole directory re-sorted. Recorded because three of
the seven candidate links in the brief were wrong, and the corrections are the
kind of thing a later pass would helpfully undo.

**Dr. Kelli Ritter was proposed and is not in the directory.** This is a scope
call, not a judgement of her work: her channel's subject is chronic-anxiety
recovery, and the mental-health angle on this list is Georgia Ede's, who comes at
it from food. Nick decided on 2026-08-15, and **Concept Base v3 §17 carries that
decision into the roster**, so it is settled rather than open — do not re-propose
her on a later pass. If Nick ever reopens it, the real channel is
`@DrKelliRitter` — `@KelliRitter` is an empty shell with no videos on it, which is
what the brief's candidate handle pointed at.

Two cards shipped with copy **different from what the brief specified**, because
the brief's version did not survive checking:

- **Lisa Wiedeman** was briefed as "Carnivore70Something", eating this way "for
  decades" and "into her seventies". None of that holds: no such handle exists,
  `carnivore70something.com` is NXDOMAIN, and her own channel says *"16 year
  Carnivore Veteran since 2009"*. The card says 2009 and uses the name she
  actually goes by, CarnivoreDoctor.
- **Amber O'Hearn** was briefed with `ketotic.org`. That is her old blog and its
  apex now fails the TLS handshake. Her live site is `mostly-fat.com`, which is
  also where her other old domain, `empiri.ca`, redirects.

Do not "restore" any of these from the brief — the brief is the older source.

### The SHAPEFIXER card — why it stops where it does

Moved here from an HTML comment on the card itself, at Nick's request, so it is
not sitting in the page source next to the man's name.

His own channel bio states that he regained normal heart function and that he
regenerated an arthritic hip. That is a treatment claim in the exact shape rule 2
exists to keep off this site, sitting in the primary source.

So the card carries **the decision he made** — turning down heart surgery and a
hip replacement to go at it through diet — and **not the outcome he reports**.
The first is his experience, which the rule allows. The second would be a medical
outcome asserted in our voice, which it does not.

Nick's point, and it is a fair one: a man who publishes a recovery claim on his
own site owns that claim and its consequences, and listing him is not agreeing
with him. True — the card attributes rather than endorses, and the section
intro already says the directory is "not a ranking, not an endorsement".

The rule still holds for a different reason. It is not about his liability, it is
about ours: a directory that restates a health outcome becomes a place that
published it, whoever said it first. Attribution is not much of a shield when the
sentence is on our page. Keeping the claim on his channel and the decision on our
card costs us nothing and keeps the line clean across every card.

**If you are editing this card:** do not "complete" it from his bio. The gap is
the point.
