# Chasing a Cure PD — Website UI Kit

A hi-fi recreation of the core marketing-site surfaces for chasingacurepd.org. Uses the tokens in `../../colors_and_type.css` and the primary-logo mark in `../../assets/`.

## What's in here

- `index.html` — an interactive click-thru of the site. Click the top-nav links to flip between pages:
  - **Home** — hero, three-anchor promise, urgency stats, Sue's story, research partner, donate CTA, footer
  - **About** — founding story, founder bios (Wendy + Rob), MJFF partnership block
  - **Ways to Give** — donation amount picker, 100%-to-research promise, monthly giving
  - **Concert for a Cure** — event hero, date / location, ticket tiers, raffle callout, FAQ
- `Nav.jsx`, `Hero.jsx`, `StatBand.jsx`, `StorySection.jsx`, `PartnerBlock.jsx`, `WaysToGive.jsx`, `ConcertPage.jsx`, `AboutPage.jsx`, `Footer.jsx` — the components

## Fidelity notes

- The Wix site could not be scraped during build, so section copy is pulled verbatim from `messaging-guide.md` § 11 (Website Copy Blocks) and § 7 (Core Message Blocks). This is the canonical copy — it should match or supersede the live site.
- Photography is represented with styled placeholders; real imagery is flagged in the root README.
- Icon system is Lucide via CDN (flagged substitution).
- The donation-amount picker is styled after Zeffy/Team Fox typical donation UIs — the actual platform is Zeffy.
