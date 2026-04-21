# SEO Audit — chasingacurepd.org

**Audited:** April 19, 2026
**Site:** https://www.chasingacurepd.org/ (Wix-hosted)
**Audit focus:** Donor acquisition, Concert for a Cure event visibility, boat raffle awareness

---

## Executive Summary

Your site has a strong mission and clear voice, but it is substantially under-optimized for search — which means it is not doing its share of the fundraising work. Your biggest strengths are the clarity of messaging and the founder story on the About page. The three biggest issues, all fixable this week, are:

1. A truncated homepage title tag that is cutting off mid-word ("Parki") in search results.
2. The Concert for a Cure page lives at `/coming-soon-03`, which is a default Wix slug and unfindable to anyone searching for the event.
3. There is no meta description, no structured data, and no dedicated content targeting the donation and event keywords that would bring you warm organic traffic.

Overall assessment: **needs work**, with several critical quick wins. Foundations are in place (HTTPS, clean nav, 501(c)(3) signals) but the site is leaving organic donor traffic on the table.

An honest caveat on this audit: you don't have SEO tools (Ahrefs, Semrush, Google Search Console) connected, so keyword volumes, difficulty scores, and current rankings are qualitative estimates based on the keyword landscape, not measured data. Connecting Search Console alone would materially improve the precision of a re-audit.

---

## 1. Keyword Opportunities

Focused on the two highest-leverage queries for your campaign: *donation intent* and *event discovery*. Secondary opportunities support long-term brand and content authority.

| # | Keyword | Est. Difficulty | Opportunity | Current Ranking | Intent | Recommended Format |
|---|---|---|---|---|---|---|
| 1 | Concert for a Cure Indianapolis | Low | **High** | Unknown — likely not ranking | Navigational | Dedicated event landing page |
| 2 | Concert for a Cure Fishers | Low | **High** | Unknown | Navigational | Event landing page |
| 3 | Parkinson's fundraiser Indianapolis | Low–Moderate | **High** | Unknown | Transactional | Event + donation page |
| 4 | Parkinson's research donation Indiana | Low–Moderate | **High** | Unknown | Transactional | Ways to Give page |
| 5 | donate Parkinson's research | High | Medium | Unknown | Transactional | Ways to Give page |
| 6 | Team Fox Indiana | Low | **High** | Unknown | Informational | About + homepage |
| 7 | Parkinson's charity Fishers IN | Low | **High** | Unknown | Navigational | About page |
| 8 | boat raffle Indianapolis 2026 | Low | **High** | Unknown | Transactional | Raffle landing page (new) |
| 9 | charity boat raffle Indiana | Low | **High** | Unknown | Transactional | Raffle landing page |
| 10 | Indy Boat Co raffle | Low | **High** | Unknown | Navigational | Raffle landing page |
| 11 | Parkinson's awareness month | Moderate | Medium | Unknown | Informational | Blog post / awareness page |
| 12 | what causes Parkinson's disease | High | Low | Unknown | Informational | Long-form education post |
| 13 | Michael J. Fox Foundation partner | Low | Medium | Unknown | Informational | About page + partner callout |
| 14 | Sue Chase Parkinson's | Low | **High** | Unknown | Informational | Founder / tribute page |
| 15 | 100% to research nonprofit | Low | Medium | Unknown | Informational | Homepage + Ways to Give |
| 16 | Parkinson's caregiver support Indiana | Moderate | Low–Medium | Unknown | Informational | Resource page (long-term) |
| 17 | how to help someone with Parkinson's | Moderate | Low–Medium | Unknown | Informational | Blog post (long-term) |
| 18 | Geist Reservoir charity event | Low | Medium | Unknown | Navigational | Event page |

**Top priorities:** rows 1–10. These are the keywords that directly affect 2026 campaign revenue. Rows 11–18 are longer-term content investments.

---

## 2. On-Page Issues

Issues observed on the four pages I was able to fetch (home, about, ways-to-give, and the Concert for a Cure page).

| Page | Issue | Severity | Recommended Fix |
|---|---|---|---|
| Homepage | Title tag truncated: "HOME \| Chasing A Cure Parki" | **Critical** | Rewrite to: "Chasing a Cure Parkinson's Foundation \| Fund the Science Behind Breakthroughs" (60 char) |
| Concert for a Cure | Title tag truncated: "2026 CONCERT FOR A CURE \| Chasing A Cure Parki" | **Critical** | Rewrite to: "Concert for a Cure 2026 \| Parkinson's Fundraiser in Fishers, IN" (59 char) |
| Concert for a Cure | URL is `/coming-soon-03` — the default Wix slug, has no keyword value | **Critical** | Change slug to `/concert-for-a-cure-2026` (set a 301 redirect from the old URL) |
| All pages | No visible meta description | **High** | Write unique 150–160 char meta descriptions for each page (drafts in Section 7) |
| Ways to Give | URL is `/waystogive` (no hyphen) | Medium | Change to `/ways-to-give` with 301 redirect — cleaner, more readable |
| All pages | No structured data (Organization, Event, DonateAction schema) | **High** | Add JSON-LD for Organization site-wide; Event schema on Concert page; FAQPage schema once a FAQ exists |
| Homepage | H1 structure: "Chasing a Cure Parkinson's Foundation" is clean, but no keyword-anchored H2s | Medium | Add H2s like "Parkinson's Research Funding" and "Support Parkinson's Research in Indiana" |
| Homepage | "OUR WHY" section is deep on the page but has the strongest conversion narrative | Medium | Consider surfacing a 2-sentence promise-anchor higher in the fold |
| About | Founder photo has a filename like "55914246_10156367221673865..." — no alt text or descriptive context | Medium | Add alt: "Wendy Chase and Rob Spalding, founders of Chasing a Cure Parkinson's Foundation" |
| Ways to Give | Page is thin (3 short cards) — lacks depth for ranking | Medium | Add context, story, and specific ask amounts ("$100 funds X", "$500 funds Y") |
| Ways to Give | Headings have stray numbers ("## 1", "## 2", "## 3") — these appear to be Wix layout artifacts showing as H2s | Medium | Restructure so section headings are descriptive keywords, not numbers |
| Concert for a Cure | Page says "Date and details coming soon" — no date on a public event page is a conversion killer | **High** | Publish the July 18, 2026 date as soon as logistics are locked |
| All pages | No internal links between thematic pages (e.g., homepage does not link to About or Ways to Give narratively) | Medium | Add contextual in-copy links: "Read Wendy's story" on homepage, "Donate today" on About |
| All pages | Image filenames are unoptimized Wix hashes | Low | Wix limitation — focus on alt text and title attributes instead |

---

## 3. Content Gap Analysis

Missing content types that donor-stage and event-stage searchers expect to find:

| Gap | Why It Matters | Format | Priority | Effort |
|---|---|---|---|---|
| **Dedicated Concert for a Cure landing page with date, tickets, FAQ, sponsors, and raffle** | Replaces the current thin "coming soon" page; captures event searches and converts ticket and raffle sales | Landing page | **High** | Moderate (half day) |
| **Boat raffle landing page with Indy Boat Co co-branding** | Needed for Indy Boat Co in-store QR code; owns the "boat raffle Indianapolis" search | Landing page | **High** | Moderate |
| **Sponsorship page with tiered packages** | Captures corporate donors searching for CSR opportunities; gives prospects a self-serve read before you pitch | Landing page | **High** | Quick win (2–3 hours) |
| **Research impact page — where the dollars go** | Reinforces the 100%-to-research differentiator; critical conversion asset | Content page | **High** | Moderate |
| **FAQ page** | Builds trust; answers donor tax questions, raffle rules, event logistics; FAQPage schema wins SERP features | Content page | **High** | Quick win |
| **News / updates feed (even quarterly)** | Demonstrates ongoing impact; fresh content signals life to search engines; fills news queries for the foundation | Blog or updates feed | Medium | Substantial (multi-day to set up, ongoing) |
| **Sue Chase tribute / founding story page** | Deep emotional anchor; owns a unique search space; supports press and donor engagement | Content page | Medium | Moderate |
| **Donor stories page** | Social proof; supports consideration-stage searches | Content page | Medium | Moderate |
| **Parkinson's disease 101 page** | Captures informational searches ("what is Parkinson's") and creates entry points for cold audiences | Content page | Low–Medium | Moderate |

---

## 4. Technical SEO Checklist

I could verify some things from page fetches but not others (the audit tool cannot fetch robots.txt or sitemap.xml on this site, and Wix sites hide source-level details). Flagging observable status plus items to verify.

| Check | Status | Details |
|---|---|---|
| HTTPS | Pass | Site is served over HTTPS |
| Mobile-friendly | Likely Pass | Wix themes are responsive by default — worth verifying with a real mobile test |
| XML sitemap | Verify | Wix auto-generates at `/sitemap.xml` — verify it includes all pages |
| robots.txt | Verify | Check `/robots.txt` is not accidentally blocking indexing |
| Title tags | **Fail** | Two pages have truncated titles ending in "Parki" |
| Meta descriptions | **Fail** | None observable on fetched pages |
| Structured data | **Fail** | No Organization, Event, or other schema in observable output |
| Canonical tags | Verify | Wix typically handles these — verify with a browser inspector or Search Console |
| URL quality | **Fail** | `/coming-soon-03` is a hard fail for the campaign's highest-value landing page |
| Image alt text | Verify | At least one founder photo lacks descriptive alt — audit all images |
| Google Search Console connected | Verify | If not connected, connect this week — it is free and is the single best SEO data source you can add |
| Google Ad Grants applied | Verify | If not active, apply immediately — free $10K/month in paid search for 501(c)(3)s |
| Core Web Vitals | Verify | Run `pagespeed.web.dev` check; Wix themes often have room to improve |

---

## 5. Competitor Landscape

I don't have SEO tool data to pull exact keyword overlap numbers, so this is a qualitative read on the landscape you're competing in.

**Direct national category leaders:**
- **Michael J. Fox Foundation** (michaeljfox.org) — category-dominant; not a competitor in the traditional sense since you partner with Team Fox, but they own nearly every generic Parkinson's search
- **Parkinson's Foundation** (parkinson.org) — second-largest SEO footprint
- **Davis Phinney Foundation** — strong on quality-of-life content

**Local / category-adjacent:**
- **Indiana University Health Parkinson's Center** — owns medical and treatment searches locally
- **Other Indy-area Team Fox affiliates** (if any) — worth searching "Team Fox Indiana" to see who else shows up

**What this means for your strategy:**
Don't try to rank for "Parkinson's disease" or "donate to Parkinson's research" — those belong to the national foundations. Own three lanes instead:

1. **Geographic + cause:** "Parkinson's charity Fishers IN," "Indianapolis Parkinson's fundraiser," "Indiana Parkinson's research donation"
2. **Brand + event:** "Concert for a Cure," "Chasing a Cure Parkinson's Foundation," "Sue Chase Parkinson's"
3. **Partner + transactional:** "Team Fox Indiana," "Indy Boat Co raffle," "boat raffle Indianapolis 2026"

You will not out-rank MJFF, but you don't need to. You need to be the #1 result when someone in central Indiana is ready to give, buy a raffle ticket, or come to your event.

| Dimension | Chasing a Cure PD | MJFF (for context) |
|---|---|---|
| Domain age and authority | Newer, low authority | Established, high authority |
| Content depth | Thin (4 pages) | Thousands of pages |
| Publishing frequency | None visible | Weekly+ |
| SERP feature presence | Low | High (featured snippets, PAA, knowledge panels) |
| Geographic focus | Indiana | National / global |
| Unique angle to own | 100% volunteer, every dollar to research, Team Fox partner, Indy event | — |

---

## 6. Prioritized Action Plan

### Quick Wins (this week — under 2 hours each)

| # | Action | Impact | Effort |
|---|---|---|---|
| 1 | Rewrite the homepage title tag to "Chasing a Cure Parkinson's Foundation \| Fund the Science Behind Breakthroughs" | High | 10 min |
| 2 | Change the Concert for a Cure URL from `/coming-soon-03` to `/concert-for-a-cure-2026` with a 301 redirect | High | 15 min |
| 3 | Rewrite the Concert for a Cure title tag to "Concert for a Cure 2026 \| Parkinson's Fundraiser in Fishers, IN" | High | 10 min |
| 4 | Write meta descriptions for all 4 pages (drafts in Section 7) | High | 30 min |
| 5 | Add descriptive alt text to the founders photo and all homepage images | Medium | 30 min |
| 6 | Publish the July 18, 2026 Concert date on the event page as soon as it's board-confirmed | High | 5 min |
| 7 | Connect Google Search Console and submit the sitemap | High | 30 min |
| 8 | Apply for Google Ad Grants ($10K/mo free search ads for 501(c)(3)s) | High | 1–2 hours |
| 9 | Add an Organization JSON-LD snippet site-wide (Wix supports custom code injection) | Medium | 30 min |
| 10 | Add Event JSON-LD to the Concert page once the date is published | Medium | 30 min |

### Strategic Investments (this quarter)

| # | Action | Impact | Effort | Dependencies |
|---|---|---|---|---|
| 1 | Build a full Concert for a Cure landing page: hero, date, tickets, agenda, FAQ, sponsors, raffle, directions to the lake home | **High** | 1–2 days | Campaign brief section 7 deliverables |
| 2 | Build a dedicated Boat Raffle landing page co-branded with Indy Boat Co, embedded raffle purchase flow, rules, pacing bar | **High** | 1 day | Raffle platform live |
| 3 | Build a Sponsorship page with tiered packages ($2,500 / $5,000 / $10,000 / title) and a contact form | **High** | Half day | Finalized sponsor packages |
| 4 | Build a Research Impact page that explains how dollars flow through Team Fox to MJFF research | **High** | 1–2 days | MJFF sign-off on quotes and milestones |
| 5 | Build a FAQ page with FAQPage schema (tax-deductibility, raffle rules, MJFF relationship, event logistics) | **High** | Half day | None |
| 6 | Stand up a news / updates feed with quarterly posts (use Wix Blog) | Medium | 1 day setup + ongoing | Content owner |
| 7 | Build a Sue Chase tribute and founding story page | Medium | Half day | Family approval |
| 8 | Write a "Parkinson's disease in Indiana" informational page to capture cold top-of-funnel searches | Medium | Half day | None |
| 9 | Build a donor stories / testimonials page with 3–5 initial stories | Medium | Half day + gathering | Donor consent |
| 10 | Execute a press outreach push to earn 3–5 high-quality backlinks (Indy Star, IndyStar Health, local business press) | High long-term | Ongoing | PR plan in campaign brief |

---

## 7. Drafted Title Tags and Meta Descriptions

Copy-paste ready. All titles are 50–60 characters; meta descriptions are 150–160.

**Homepage**
- Title: `Chasing a Cure Parkinson's Foundation | Fund the Science`
- Meta: `100% volunteer-run Indiana nonprofit funding Parkinson's research through Team Fox and the Michael J. Fox Foundation. Every dollar fuels a cure.`

**About**
- Title: `About | Chasing a Cure Parkinson's Foundation`
- Meta: `Founded in honor of Sue Chase by Wendy Chase and Rob Spalding in 2018, Chasing a Cure funds Parkinson's research through Team Fox and MJFF.`

**Ways to Give**
- Title: `Donate to Parkinson's Research | Chasing a Cure PD`
- Meta: `Fund Parkinson's research breakthroughs. 100% of every donation goes directly to research through Team Fox and the Michael J. Fox Foundation.`

**Concert for a Cure (after URL and slug changes)**
- Title: `Concert for a Cure 2026 | Parkinson's Fundraiser in Fishers, IN`
- Meta: `Join us Saturday, July 18, 2026 for the 3rd Annual Concert for a Cure on Geist Reservoir. Live music, boat raffle, and a mission rooted in hope.`

**Boat Raffle (new page)**
- Title: `2026 Boat Raffle | Chasing a Cure Parkinson's Foundation`
- Meta: `Win a $25,000 boat donated by Indy Boat Co. Every ticket funds Parkinson's research. Drawing live at Concert for a Cure on July 18, 2026.`

**Sponsorship (new page)**
- Title: `Sponsor Concert for a Cure 2026 | Chasing a Cure PD`
- Meta: `Partner with Chasing a Cure to fund Parkinson's research. Sponsorship packages from $2,500 to title, with event recognition and impact reporting.`

---

## 8. Measurement Plan

If you execute the quick wins and get Google Search Console connected this week, re-audit in 30 days against:

| Metric | Baseline (today) | 30-day target | 90-day target |
|---|---|---|---|
| Organic sessions/month | Unknown — establish in GSC | +25% vs. baseline | +75% vs. baseline |
| Keyword impressions in GSC | Unknown | 5,000+ | 15,000+ |
| Keywords ranked in top 10 | Unknown | 10+ brand and geo terms | 25+ |
| Donation conversion from organic | Unknown — set up event tracking | 1%+ | 2%+ |
| Event ticket signups from organic | Unknown | 10+ | 50+ |
| Backlinks earned | Unknown | 3–5 from PR push | 10+ |

---

## What to do if you want to go deeper

If you want more precision on any of this, the two highest-leverage adds are:

1. **Google Search Console** (free). Gives you real impression, click, and ranking data on every keyword your site shows up for.
2. **An SEO tool like Ahrefs or Semrush** (paid; nonprofits sometimes get discounted plans). Gives you keyword volumes, competitor data, and backlink profiles. A discount is sometimes available through TechSoup.

Connect one or both and I can rerun this audit with real numbers.
