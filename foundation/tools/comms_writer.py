#!/usr/bin/env python3
"""
Campaign Comms Writer — Chasing a Cure Parkinson's Foundation
Drafts emails, social posts, scripts, and letters in Wendy's voice.

Usage:
  python3 tools/comms_writer.py --list
  python3 tools/comms_writer.py --schedule
  python3 tools/comms_writer.py --type save-the-date
  python3 tools/comms_writer.py --type raffle-push --notes "We're at 35% of target, pacing behind"
  python3 tools/comms_writer.py --type fund-a-need --notes "Opening pledges: Dr. Smith $2K, Jones family $1K"
"""

import anthropic
import argparse
import os
import sys
from datetime import date, timedelta
from pathlib import Path
import re

REPO_ROOT = Path(__file__).parent.parent
CAMPAIGN_START = date(2026, 4, 20)
EVENT_DATE = date(2026, 7, 18)
MODEL = "claude-sonnet-4-6"

# ── Campaign content calendar ────────────────────────────────────────────────

CONTENT_TYPES = {
    "save-the-date": {
        "label": "Save-the-Date Email (T-13)",
        "week": 1,
        "due": "2026-04-26",
        "channel": "email",
        "brief": (
            "T-13 save-the-date to the full donor file. Announce Concert for a Cure, "
            "Saturday July 18 at the lake home in Geist, Fishers, Indiana. "
            "Warm, personal opener from Wendy. Tease the live music, the $25K boat raffle, "
            "the fund-a-need. One CTA: RSVP interest / save the date. "
            "Short — 200 words max. Subject line required."
        ),
    },
    "major-donor": {
        "label": "Major Donor Letter (T-13, Week 1)",
        "week": 1,
        "due": "2026-04-26",
        "channel": "letter/email",
        "brief": (
            "Personal 1:1 outreach to top 25 major-donor prospects. Deeply personal, "
            "direct ask from Wendy before the public launch. Reference the quiet phase — "
            "they're hearing this before the general donor file. Ask for a specific gift "
            "($1K–$10K range) tied to a research milestone. Needs a [NAME] placeholder "
            "and a [GIFT AMOUNT] placeholder. 250–350 words."
        ),
    },
    "sponsor-outreach": {
        "label": "Sponsor Package Cover Letter (T-12, Week 2)",
        "week": 2,
        "due": "2026-05-03",
        "channel": "email",
        "brief": (
            "Personal outreach to corporate sponsor prospects alongside the sponsor package. "
            "Professional, specific, quick to the point. Name the Indy Boat Co partnership "
            "as the anchor example. Packages from $2,500–$10,000. "
            "Needs [COMPANY NAME] and [CONTACT NAME] placeholders. "
            "Ask for a specific response: a call this week. 200 words max."
        ),
    },
    "linkedin-launch": {
        "label": "LinkedIn Launch Post (T-12, Week 2)",
        "week": 2,
        "due": "2026-05-03",
        "channel": "social/linkedin",
        "brief": (
            "Wendy and/or Rob's personal LinkedIn announcement for Concert for a Cure 2026. "
            "Professional but personal. Opens with the mission, pivots to the event, "
            "invites network to attend or sponsor. Ends with the link to the event page. "
            "No hashtag soup — 1–2 max. 150–200 words."
        ),
    },
    "public-invite": {
        "label": "Public Invitation Email (T-8, Week 5)",
        "week": 5,
        "due": "2026-05-24",
        "channel": "email",
        "brief": (
            "Campaign goes fully public. Full donor file. Announce Concert for a Cure, "
            "open ticket sales, and raffle ticket sales. Reference the campaign video "
            "launching this week. Two CTAs: get tickets + buy raffle tickets. "
            "Wendy's voice, warm launch energy, mission stays front and center. "
            "300–400 words. Subject line required."
        ),
    },
    "raffle-launch": {
        "label": "Boat Raffle Launch Email (T-7, Week 7 / ~June 1)",
        "week": 7,
        "due": "2026-06-07",
        "channel": "email",
        "brief": (
            "Announce the $25,000 boat raffle donated by Indy Boat Co. "
            "Three tiers: $100/1 ticket, $250/3 tickets, $500/10 tickets. "
            "Cap: 500 tickets total — use that scarcity. "
            "Drawing live at Concert for a Cure, July 18. Winner need not be present. "
            "Mention the Indy Boat Co grand opening June 8 as the activation moment. "
            "CTA: buy now. 250–350 words. Subject line required."
        ),
    },
    "raffle-push": {
        "label": "Raffle Urgency Push Email",
        "week": None,
        "due": None,
        "channel": "email",
        "brief": (
            "Mid-campaign raffle urgency push. Provide pacing progress in --notes. "
            "Restate the $25K prize, the three tiers, the ticket cap. "
            "Urgency without desperation — the science framing keeps it mission-forward. "
            "Very short: 150–200 words. Strong subject line required."
        ),
    },
    "indy-boat-activation": {
        "label": "Indy Boat Co Grand Opening Email (T-5, Week 8 / June 8)",
        "week": 8,
        "due": "2026-06-14",
        "channel": "email",
        "brief": (
            "Indy Boat Co grand opening weekend is the campaign's public inflection point. "
            "This email rides that moment: celebrate the partnership, remind raffle buyers "
            "this is the moment in-store sales begin, show momentum. "
            "Warm co-branded energy — Indy Boat Co is a peer, not just a sponsor. "
            "200–250 words. Subject line required."
        ),
    },
    "matching-gift": {
        "label": "Matching Gift Window Email (T-4, Week 9)",
        "week": 9,
        "due": "2026-06-21",
        "channel": "email",
        "brief": (
            "Announce a matching gift window. Double-your-impact framing. "
            "Time-limited: provide window dates in --notes. "
            "Tie the match to a specific research outcome ('your matched gift funds X'). "
            "Strong urgency CTA. 200 words. Subject line required."
        ),
    },
    "donor-spotlight": {
        "label": "Donor/Sponsor Spotlight (Social)",
        "week": 6,
        "due": None,
        "channel": "social/IG/FB/LinkedIn",
        "brief": (
            "Weekly spotlight celebrating a donor or sponsor. Provide their name and story "
            "in --notes. Warm, personal, community-forward. "
            "One post adapted for IG/FB (casual) and LinkedIn (professional). "
            "Celebrates their commitment without making it about them alone — "
            "pivots back to the mission and the science. "
            "IG/FB: 80–100 words. LinkedIn: 120–150 words."
        ),
    },
    "countdown-2weeks": {
        "label": '"2 Weeks Out" Email (T-2, Week 11)',
        "week": 11,
        "due": "2026-07-05",
        "channel": "email",
        "brief": (
            "July 5 — two weeks to Concert for a Cure. Final ticket + raffle push. "
            "Urgency on both: limited tickets remaining, raffle closes at the event. "
            "Personal note from Wendy. Reminder of the fund-a-need live ask at the event. "
            "Short and urgent: 200 words. Subject line required."
        ),
    },
    "countdown-final": {
        "label": "Final Countdown Email (T-1, Week 12 / ~July 12)",
        "week": 12,
        "due": "2026-07-12",
        "channel": "email",
        "brief": (
            "One week to Concert for a Cure. Very short and urgent. "
            "Last chance for tickets and raffle. Logistics reminder for ticket holders "
            "(exact address coming, etc.). "
            "100–150 words max. Subject line required. This is the 'last chance' email."
        ),
    },
    "fund-a-need": {
        "label": "Fund-a-Need Script (Live at Concert for a Cure)",
        "week": 13,
        "due": "2026-07-11",
        "channel": "stage/script",
        "brief": (
            "Live paddle-raise script for the emcee or Wendy to deliver from the stage "
            "on July 18. Tied to a specific MJFF research milestone — provide it in --notes "
            "or the script will use a placeholder. Seeded with pre-committed opening pledges: "
            "provide names/amounts in --notes. "
            "Cadence: open with the story beat, pivot to the specific ask, "
            "name the first pledges to seed the room, hold the paddle for different levels. "
            "4–5 minutes spoken (~500–650 words). Includes stage direction notes in [brackets]."
        ),
    },
    "thank-you": {
        "label": "Post-Event Thank-You + Total Raised Email",
        "week": None,
        "due": "2026-07-26",
        "channel": "email",
        "brief": (
            "Post-event thank you to all attendees, donors, and raffle participants. "
            "Announce the total raised. Name the research it will fund through MJFF. "
            "Warm, grateful, closes the loop on the promise to Sue. "
            "CTA: become a recurring monthly donor. "
            "250–300 words. Subject line required. "
            "Provide total raised amount in --notes."
        ),
    },
    "press-release": {
        "label": "Indy Boat Co Partnership Press Release (Week 8)",
        "week": 8,
        "due": "2026-06-08",
        "channel": "press",
        "brief": (
            "Announce the Indy Boat Co partnership: donated $25K boat for the raffle + "
            "grand opening proceeds benefit Chasing a Cure. "
            "AP style. Lead paragraph answers who/what/when/where/why. "
            "Quote from Wendy (in her voice). Quote from Indy Boat Co rep — leave as [PLACEHOLDER]. "
            "Boilerplate at end. 400–500 words."
        ),
    },
    "social-mission": {
        "label": "Mission/Urgency Social Post",
        "week": None,
        "due": None,
        "channel": "social/IG/FB/LinkedIn",
        "brief": (
            "Standalone social post on mission and urgency. One idea, punchy, human. "
            "Use the numbers. No hashtag soup. "
            "Provide a specific angle or theme in --notes, or the writer will choose one. "
            "IG/FB: 60–80 words. LinkedIn: 100–130 words."
        ),
    },
    "social-science": {
        "label": "Research/Science Social Post",
        "week": None,
        "due": None,
        "channel": "social/IG/FB/LinkedIn",
        "brief": (
            "Post highlighting the science — what Team Fox / MJFF funds, why it matters. "
            "Builds credibility and donor confidence. "
            "Provide a specific research angle in --notes, or the writer will use the "
            "MJFF partnership and the $185M raised stat. "
            "60–80 words for IG/FB, 100–130 for LinkedIn."
        ),
    },
}

# ── Source document loader ────────────────────────────────────────────────────

def load_sources():
    paths = {
        "messaging_guide": REPO_ROOT / "marketing" / "messaging-guide.md",
        "campaign_brief": REPO_ROOT / "marketing" / "campaign-brief-q-fundraising.md",
        "voice_narrative": REPO_ROOT / "design" / "wendy-voice-narrative.html",
    }
    docs = {}
    for key, path in paths.items():
        if path.exists():
            docs[key] = path.read_text(encoding="utf-8")
        else:
            print(f"Warning: {path} not found — skipping.", file=sys.stderr)
            docs[key] = ""
    return docs

def strip_html_tags(text):
    """Lightly strip HTML tags while preserving content."""
    text = re.sub(r"<style[^>]*>.*?</style>", "", text, flags=re.DOTALL)
    text = re.sub(r"<script[^>]*>.*?</script>", "", text, flags=re.DOTALL)
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"  +", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()

# ── System prompt ─────────────────────────────────────────────────────────────

def build_system(docs):
    voice_text = strip_html_tags(docs.get("voice_narrative", ""))
    return f"""You are the Campaign Comms Writer for Chasing a Cure Parkinson's Foundation. \
You draft campaign communications — emails, social posts, scripts, letters — in Wendy Chase's \
documented voice. You have three source documents. Read all three before writing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENT 1 — MESSAGING GUIDE (canonical source)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{docs.get('messaging_guide', '')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENT 2 — CAMPAIGN BRIEF: SUMMER 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{docs.get('campaign_brief', '')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENT 3 — WENDY'S VOICE: NARRATIVE & TONE OF VOICE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{voice_text}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WRITING RULES (non-negotiable)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. VOICE. Write in Wendy's documented voice at all times. Her rhythm: short sentences carry weight, long sentences build the argument, rule of three, repeat on purpose, end where you began.
2. LANGUAGE. NEVER use "100% of every dollar," "every penny," "zero overhead." Use "directly to research through MJFF and Team Fox," "no salaries," "as lean as a foundation legally can."
3. ANCHORS. Use the three anchor lines verbatim when appropriate. Never paraphrase: "Science fuels hope." / "We fund the science behind breakthroughs." / "Your gift flows directly to the research."
4. WORDS. Use: fund, fuel, advance, breakthrough, promise, science, research, cure, family, hope, Sue, Wendy, Rob, volunteer-run. Avoid: fight, suffer, victim, awareness (as goal), give back, exclamation points.
5. FORMAT. For emails: subject line first, then body, then a 1-line "Personalize:" note for Wendy. For social: provide IG/FB version and LinkedIn version separately. For scripts: include stage direction in [brackets].
6. LENGTH. Respect the word count guidance in the brief.
7. END every draft with exactly this line: --- Draft ready for Wendy's review.
"""

# ── Writer ────────────────────────────────────────────────────────────────────

def write_draft(content_type_key, notes="", stream=True):
    if content_type_key not in CONTENT_TYPES:
        print(f"Unknown content type: {content_type_key}")
        print("Run --list to see all types.")
        sys.exit(1)

    ct = CONTENT_TYPES[content_type_key]
    docs = load_sources()

    user_message = (
        f"DRAFT REQUEST\n"
        f"Type: {ct['label']}\n"
        f"Channel: {ct['channel']}\n"
        f"{'Week: ' + str(ct['week']) if ct['week'] else ''}\n"
        f"{'Due: ' + ct['due'] if ct['due'] else ''}\n\n"
        f"Brief:\n{ct['brief']}\n"
        f"{chr(10) + 'Additional context: ' + notes if notes else ''}\n\n"
        f"Write the complete, production-ready draft now."
    )

    client = anthropic.Anthropic()

    today = date.today().isoformat()
    slug = content_type_key.replace("-", "_")
    drafts_dir = REPO_ROOT / "drafts"
    drafts_dir.mkdir(exist_ok=True)
    out_path = drafts_dir / f"{today}-{slug}.md"

    header = f"# {ct['label']}\n_Generated {today}{' | Notes: ' + notes if notes else ''}_\n\n"

    print(f"\nDrafting: {ct['label']}")
    print(f"Output → {out_path.relative_to(REPO_ROOT)}\n")
    print("─" * 60)

    full_text = header

    if stream:
        with client.messages.stream(
            model=MODEL,
            max_tokens=2048,
            system=[
                {
                    "type": "text",
                    "text": build_system(docs),
                    "cache_control": {"type": "ephemeral"},
                }
            ],
            messages=[{"role": "user", "content": user_message}],
        ) as s:
            for chunk in s.text_stream:
                print(chunk, end="", flush=True)
                full_text += chunk
            usage = s.get_final_message().usage
    else:
        response = client.messages.create(
            model=MODEL,
            max_tokens=2048,
            system=[
                {
                    "type": "text",
                    "text": build_system(docs),
                    "cache_control": {"type": "ephemeral"},
                }
            ],
            messages=[{"role": "user", "content": user_message}],
        )
        body = response.content[0].text
        print(body)
        full_text += body
        usage = response.usage

    print("\n" + "─" * 60)
    cache_read = getattr(usage, "cache_read_input_tokens", 0)
    cache_write = getattr(usage, "cache_creation_input_tokens", 0)
    print(f"Tokens — input: {usage.input_tokens} | cached: {cache_read} | cache write: {cache_write} | output: {usage.output_tokens}")

    out_path.write_text(full_text, encoding="utf-8")
    print(f"Saved → {out_path.relative_to(REPO_ROOT)}\n")
    return out_path

# ── Schedule view ─────────────────────────────────────────────────────────────

def show_schedule():
    today = date.today()
    days_in = (today - CAMPAIGN_START).days
    current_week = max(1, min(13, (days_in // 7) + 1))
    days_to_event = (EVENT_DATE - today).days

    print(f"\nCampaign Week {current_week} of 13  |  T-{14 - current_week}  |  {days_to_event} days to July 18\n")
    print(f"{'TYPE':<22} {'LABEL':<40} {'WEEK':>5}  {'DUE':<12}  STATUS")
    print("─" * 100)

    for key, ct in sorted(CONTENT_TYPES.items(), key=lambda x: (x[1]["week"] or 99, x[0])):
        week = ct["week"]
        due = ct["due"] or "—"
        status = ""
        if week and week < current_week:
            status = "past"
        elif week == current_week:
            status = "◀ THIS WEEK"
        elif week == current_week + 1:
            status = "↑ UP NEXT"

        # Check if draft exists
        slug = key.replace("-", "_")
        existing = list((REPO_ROOT / "drafts").glob(f"*-{slug}.md"))
        if existing:
            status += " ✓ drafted"

        week_str = str(week) if week else "—"
        print(f"{key:<22} {ct['label']:<40} {week_str:>5}  {due:<12}  {status}")

    print()

# ── List ──────────────────────────────────────────────────────────────────────

def list_types():
    print("\nAvailable content types:\n")
    for key, ct in CONTENT_TYPES.items():
        print(f"  {key:<22}  {ct['label']}")
    print()

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Campaign Comms Writer — Chasing a Cure PD",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("--type", "-t", help="Content type to draft (see --list)")
    parser.add_argument("--notes", "-n", default="", help="Additional context for this draft")
    parser.add_argument("--schedule", "-s", action="store_true", help="Show campaign schedule")
    parser.add_argument("--list", "-l", action="store_true", help="List all content types")
    parser.add_argument("--no-stream", action="store_true", help="Disable streaming output")

    args = parser.parse_args()

    if args.list:
        list_types()
        return
    elif args.schedule:
        show_schedule()
        return

    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("Error: ANTHROPIC_API_KEY environment variable not set.")
        sys.exit(1)

    if args.type:
        write_draft(args.type, notes=args.notes, stream=not args.no_stream)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
