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
Every colour is a CSS custom property at the top of `assets/style.v1.css`, so a
rebrand is a token swap, not a rewrite.

**To close:** supply logo/colours, or leave as is.

---

## 2. Open decisions

### Bart Kay's title — sources disagree
Nick referred to him as "καθηγητή" (professor). The card says **"Former academic
· physiology and nutrition"**, which avoids taking a side.

| Source | Says |
| --- | --- |
| His own YouTube channel bio | "former professor" in cardiovascular and respiratory physiology |
| His LinkedIn | "YouTube Based Educator and Private Consultant" |
| Third-party bios and interview write-ups | "former **senior lecturer**", "retired senior lecturer" |

Senior lecturer and professor are different ranks in UK/NZ/AU systems, which is
where he taught. A site whose entire pitch is *"we point you to the source, judge
it yourself"* cannot afford to hand someone a rank the record doesn't clearly
support — that is the fastest way to hand a critic a free hit.

"Former academic" is true under every version, so the card uses that. An HTML
comment on the card records why, so it doesn't get "corrected" later.

**Owner: Nick**, as of 2026-08-14 — asking Bart Kay directly. His own answer
settles it better than any third-party bio, and the card can then name the rank
precisely. Until then the card stays as it is.

### Dave Mac's interview count
The card says "well over a thousand". Public sources range from 1,000+ to 1,900+;
the channel's own framing is higher still. The lowest verifiable figure was
chosen because it does not age and cannot be challenged.

**Owner: Nick**, as of 2026-08-14 — asking Dave Mac directly.

Note when the answer comes back: a hard number dates the moment it ships, because
he keeps recording. Either phrase it as of a date ("1,900+ as of 2026") or keep a
floor like "well over a thousand" that stays true without maintenance.

### Directory size — twenty-four, and the grid no longer drives it
Twenty-four cards, as of 2026-08-15. A multiple of both three and six, so it is
flush at **every** width with no orphan row anywhere. Nothing pending here — and
since 2026-08-16 the count is simply the size of the locked roster (§6), not a
number anyone chose.

The grid is `auto-fit / minmax(17rem, 1fr)`, so the column count follows the
viewport rather than fixed breakpoints — three columns on a normal desktop, two
around tablet width, one on a phone. Which counts land flush follows from that:

| Cards | Desktop (3 col) | Tablet (2 col) |
| --- | --- | --- |
| 15 | flush | one orphan |
| 18 | flush | flush |
| 24 (current) | flush | flush |
| multiples of 3 | flush | flush only if also even |

**What changed on 2026-08-15:** the directory is now sorted by a rule — Dave Mac
pinned, everyone else alphabetical ignoring a leading "Dr." — and that rule
**outranks the grid**. Landing on twenty-four was luck, not a target. Do not add,
drop or reorder a card to make the last row come out even; a short final row is
the correct outcome whenever the verified list is not a multiple of three. The
rule is written into both HTML files as a comment and into `README.md` rule 4.

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

### The bot, embedded — planned in Concept Base §16, not built

Concept Base §16 — introduced in v2 and carried into **v3 word for word**, so
nothing below has changed — is the way for someone standing on this site to ask
the bot without leaving it: a floating button that opens a panel, and the panel's
content is **an iframe of the public bot URL**. Three layers, and the boundary
between them is the entire point:

| Layer | Lives in | What it is |
| --- | --- | --- |
| Component | **this repo** | button, panel, open/close, styling — cosmetics only |
| iframe | this repo, one tag | points at the public bot URL |
| Bot | the bot's repo | frontend, worker, index — untouched, on its own origin |

**The rule that keeps the siloing intact:** the component handles appearance and
nothing else. It must **never** `fetch` the bot's worker directly. The moment it
does, this repo has to know the bot's endpoint, wants CORS, and there are two
things that can drift — that is the cross-repo coupling the siloing rule exists to
prevent. The iframe boundary is what keeps "the only connection is a public
hyperlink" literally true: a frame *is* a public URL in a window.

**Do not read "component" as "a second bot."** Copying the bot's code, worker, key
or index into this repo breaks the one-index model and doubles the maintenance for
nothing. "Copy, don't link" governs *static shared elements* — the studio credit,
a logo — and **not** the bot's engine. The bot is embedded, never duplicated. One
bot, one index; this site is a window onto it, not a copy of it, so anything
improved on the bot shows up in both places on its own.

What it will cost this repo on the day it is built:

- **The first JavaScript on the site.** Opening a panel and deferring the frame
  cannot be done the zero-JS way this site ships today. It goes in `/assets/*.js`
  under `script-src 'self'` — never `'unsafe-inline'`.
- **A CSP edit in the same commit** — `frame-src https://askcarnivore.com`. The
  matching `frame-ancestors` for this domain is a header on **the bot's** side,
  set in the bot's repo. See `README.md`, "`frame-ancestors` and `frame-src` point
  in opposite directions".
- **Lazy-load on click.** The iframe must not exist until the button is pressed,
  or every portal page load pays for the bot — on a phone, on an old machine,
  including the visitors who never open it.
- **Analytics stay split.** What happens inside the frame is the bot's to measure;
  what happens around it is ours.

**One direction only:** the bot inside the portal, yes. The portal inside the bot,
no — the bot stays a clean interface and never fills up with commerce.

### The bot's index went video-level — nothing to do here, and one thing not to do

Concept Base v3 rewrites the shared index from *topic → channel* to **topic →
video**, adds a **Start with / Go deep** register per video, tags creators on
three separate axes (register, topic, role) and has a cron scan build the whole
grid. All of that lives on the bot's side of the wall. This repo has no index,
consumes none, and needs no change — which is exactly what v3 §15 says.

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

The site currently ships **zero JavaScript**, which is what the CSP is protecting.
Adding analytics is the first thing that changes that, and it would be the first
time the policy has to be edited at all.

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

### Contact address — shipped 2026-08-16

`info@askcarnivores.com` is live in the footer of `index.html`, `gr/index.html`
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

### The creator list is settled — the roster and the directory are the same 24

This was the last content item blocked on Nick, and Concept Base v3 closes it.
Its §17 **Curation Roster** is described as locked and as Nick's own map, and it
matches the shipped directory **one for one**: every one of the twenty-four names
on it is a card, and every card is on it. Nothing to add, nothing to drop.

The roster sorts those names into buckets — a register lean (Start with / Go
deep), topic buckets (recipes, fertility, metabolic health), a role bucket
(coaches), and Dave Mac on his own testimonials axis. **Those buckets are the
bot's, not this page's.** They are how the names are fed into the bot's scan
layer; here the same twenty-four stay one flat grid in the rule-4 order. See "The
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
card costs us nothing and keeps the line clean across all twenty-four cards.

**If you are editing this card:** do not "complete" it from his bio. The gap is
the point.
