# Pending — what is not done

State of `askcarnivores.com` as of **2026-08-14**. The site is live and passes the
build brief's Urgent QA. Everything below is deliberately *not* built, and why.

Nothing here is a defect. It is either waiting on Nick, waiting on a decision, or
ruled out of v1 on purpose.

---

## 1. Blocked on Nick

### Contact address
No email anywhere on the site. `hello@askcarnivores.com` was written first and
then removed before launch: the mailbox does not exist, and a `mailto:` that
bounces breaks the same honesty rule the under-construction notice exists to
satisfy.

Google Workspace is planned. A comment marks the spot in the footer of
`index.html` and `gr/index.html`. `404.html` has no contact line and does not
need one.

**To close:** give the real address, it goes into both footers.

### Buy-me-a-coffee
Brief §11 and Concept Base §3 both include it. Not added — no link was supplied.

Concept Base is specific about placement on the **bot**: footer, discreet, never
between question and answer. On the portal it is a plain footer link, so no
design work is pending, only the URL.

**To close:** give the link.

### Final creator list
The nine directory cards are a placeholder starter set. They are real people with
links verified as live, not dummy text, so the page reads as finished — but they
are not Nick's picks.

**To close:** give the list. Editing instructions and content rules are in
`README.md` under "Editing the directory".

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

### Directory size — settled at nine, growing in threes
Nine cards: a flush 3 × 3 on desktop, single column on mobile. Nothing pending
here.

The grid is `auto-fit / minmax(17rem, 1fr)`, so the column count follows the
viewport rather than fixed breakpoints — three columns on a normal desktop, two
around tablet width, one on a phone. Which counts land flush follows from that:

| Cards | Desktop (3 col) | Tablet (2 col) |
| --- | --- | --- |
| 9 (current) | flush | one orphan |
| 12 | flush | flush |
| multiples of 3 | flush | flush only if also even |

So **keep it a multiple of three** as the list grows — twelve is the next size
that is flush at every width, and is the one to aim for when Nick's real list
lands. The lone tablet orphan at nine is accepted; it is a half-width gap on one
breakpoint, not a broken layout. Verified spare if a replacement is ever needed:
**Laura Spath**, `youtube.com/@LauraSpath`.

---

## 3. Not built on purpose (v1.1+)

Ruled out by Build Brief §6. Listed so nobody re-derives them as gaps:

- **Tools** — macro calculator, electrolytes, Get Started, printable shopping list
- **Affiliate / Amazon integration** — belongs inside the tools, per Concept §3
- **Community events**
- **Any database, accounts, sign-up, or backend form**
- **Anything belonging to the bot** — hard siloing rule, see `README.md`

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

First tool when it reopens: Get Started (7 days), per Concept Base §12 — highest
share value.

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

**This one has a trap.** The CSP in `_headers` is currently:

```
default-src 'none'; img-src 'self'; style-src 'self'; font-src 'self'; ...
```

`default-src 'none'` blocks **all** scripts. Dropping in the analytics snippet
without touching the CSP means it silently does nothing — the page keeps working,
no visible error, and no data is collected. It needs an explicit `script-src` for
the beacon host plus `connect-src` for where it reports.

The site currently ships **zero JavaScript**, which is what the CSP is protecting.
Adding analytics is the first thing that changes that.

**To close:** decide if it's wanted, then set the CSP and the snippet together.

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
