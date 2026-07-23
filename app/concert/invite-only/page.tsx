import type { Metadata } from "next";
import Link from "next/link";
import ConcertFAQ from "@/components/ConcertFAQ";
import InviteEnvelopeHero from "@/components/InviteEnvelopeHero";
import RaffleTermsModal from "@/components/RaffleTermsModal";
import TrackedAnchor from "@/components/TrackedAnchor";
import { SponsorRibbon, SponsorRecognition } from "@/components/Sponsors";

export const metadata: Metadata = {
  title: "Concert for a Cure 2026 | Chasing a Cure PD",
  description:
    "Live music, chef-curated food, and a $25K boat raffle. Saturday, July 18, 2026 · 2–6 PM · Fishers, Indiana. Funds benefit The Michael J. Fox Foundation.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Concert for a Cure 2026 | Chasing a Cure PD",
    description:
      "Live music, chef-curated food, and a $25K boat raffle. Saturday, July 18, 2026 · 2–6 PM · Fishers, Indiana. Funds benefit The Michael J. Fox Foundation.",
    url: "https://chasingacurepd.org/concert/invite-only",
    images: [{ url: "/photos/geist-juicebox-cove.png", width: 1200, height: 400, alt: "Boats on Geist Reservoir — Concert for a Cure 2026" }],
  },
};

export default function ConcertPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 24px 80px",
          position: "relative",
          overflow: "hidden",
          background: "#0C0C0E",
        }}
      >
        <InviteEnvelopeHero>
          {/* Frosted glass invitation card */}
          <div style={{
            background: "rgba(8,8,8,0.52)",
            backdropFilter: "blur(28px) saturate(1.2)",
            WebkitBackdropFilter: "blur(28px) saturate(1.2)",
            borderRadius: 20,
            padding: "56px 56px",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
            textAlign: "center",
          }}>

            {/* By Invitation Only — flanked by rules */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 36 }}>
              <div style={{ flex: 1, maxWidth: 64, height: 1, background: "rgba(255,255,255,0.18)" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap" }}>
                By Invitation Only
              </span>
              <div style={{ flex: 1, maxWidth: 64, height: 1, background: "rgba(255,255,255,0.18)" }} />
            </div>

            {/* Heading */}
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(32px, 4.4vw, 58px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "#FFFFFF", margin: "0 0 20px" }}>
              Concert for a Cure.
            </h1>

            {/* Italic subtitle */}
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(18px, 2.2vw, 28px)", lineHeight: 1.2, color: "#EDC2C1", margin: "0 0 32px" }}>
              Afternoon at the lake. One shared purpose.
            </p>

            {/* Thin rule */}
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.14)", margin: "0 auto 24px" }} />

            {/* Date */}
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.60)", margin: "0 0 28px" }}>
              Saturday, July 18, 2026 &nbsp;&middot;&nbsp; 2–6 PM
            </p>

            {/* Body */}
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.72)", margin: "0 auto 40px", maxWidth: 440 }}>
              An intimate gathering of 100 guests. Live music, great company, and every ticket funds Parkinson&apos;s research through The Michael J. Fox Foundation.
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="#about"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#EDC2C1", color: "#1A0A0A", borderRadius: 999, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                Read Below
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6l5 5 5-5" />
                </svg>
              </a>
            </div>

          </div>
        </InviteEnvelopeHero>
      </section>

      {/* ── ABOUT THE EVENING ── */}
      <section id="about" style={{ background: "#FDF7F7", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="two-col"
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", padding: "7px 18px", background: "#1A1A1A", borderRadius: 999, marginBottom: 20 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF" }}>
                By Invitation Only
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-instrument), ‘Instrument Serif’, Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: 1.15,
                color: "#000000",
                margin: "0 0 24px",
                textWrap: "auto" as const,
              }}
            >
              Come because it&apos;s a great time.<br />Stay because it matters.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#2B2B2B", margin: "0 0 20px" }}>
              Concert for a Cure is an invitation-only afternoon at the lake,<br /> hosted at Wendy and Rob&apos;s lake home on Geist Reservoir<br /> in Fishers, Indiana.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#2B2B2B", margin: "0 0 20px", textWrap: "auto" as const }}>
              This is not a gala. It&apos;s not a corporate event. It&apos;s a curated gathering
              of people who believe the science is close, and who want to be part of
              getting it there.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#2B2B2B", margin: "0 0 32px", textWrap: "auto" as const }}>
              Every ticket. Every bid at the live auction. Every raffle ticket.
              Funds raised benefit The Michael J. Fox Foundation for Parkinson&apos;s Research.
            </p>

            {/* Event Details */}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 28 }}>
              <div style={{ fontFamily: "var(--font-poppins), ‘Poppins’, sans-serif", fontWeight: 700, fontSize: 16, color: "#000000", marginBottom: 16 }}>
                Event Details
              </div>
              {[
                { label: "Date", value: "Saturday, July 18, 2026" },
                { label: "Time", value: "2:00 PM – 6:00 PM" },
                { label: "Location", value: "Geist Reservoir · Fishers, Indiana" },
                { label: "Capacity", value: "Limited to 100 guests" },
                { label: "Rain policy", value: "Rain or shine, large tent on-site" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                    paddingBottom: 12,
                    marginBottom: 12,
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9B9FAE", whiteSpace: "nowrap" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#1A1A1A", textAlign: "right" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 16,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >

            {/* The Experience */}
            <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: "#FFFFFF", marginBottom: 20 }}>
              The Experience
            </div>

            {/* Featured performers */}
            <div className="performers-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 26 }}>
              {[
                { name: "Ryan Ahlwardt", role: "FOX59 Indy Now · MC & live performance", photo: "/people/ryan-ahlwardt.jpg", pos: "center 18%" },
                { name: "Chef Jay Holmes", role: "Former Exec. Chef, St. Elmo Steak House", photo: "/people/chef-jay.jpg", pos: "center 20%" },
              ].map((p) => (
                <div key={p.name}>
                  <div style={{ width: "100%", aspectRatio: "1 / 1", borderRadius: 12, overflow: "hidden", marginBottom: 12, background: "#0F0F0F" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.photo} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: p.pos, display: "block" }} />
                  </div>
                  <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: "#FFFFFF", lineHeight: 1.25 }}>{p.name}</div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginTop: 3 }}>{p.role}</div>
                </div>
              ))}
            </div>

            {/* What the afternoon includes */}
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 12 }}>
              The afternoon includes
            </div>
            <ul style={{ margin: "0 0 20px", padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                "Chef Jay Holmes, former Executive Chef at St. Elmo Steak House, curating the food experience",
                "Ryan Ahlwardt of FOX59 Indy Now as MC",
                "Live music by Ryan Ahlwardt & The Indy Nights Band",
                "Premium hosted bar",
                "Curated auction packages",
                "Purposeful connection with business owners, families, homeowners, and local leaders",
              ].map((item) => (
                <li key={item} style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.68)" }}>{item}</li>
              ))}
            </ul>

            {/* Attire */}
            <div style={{ marginTop: 8, padding: "12px 14px", background: "rgba(237,194,193,0.08)", border: "1px solid rgba(237,194,193,0.18)", borderRadius: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#EDC2C1" }}>Attire </span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Summer Casual Cocktail. White and soft neutrals encouraged.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSOR STRIP (after the By Invitation Only section) ── */}
      <SponsorRibbon cutIntoHero={false} />

      {/* ── WAYS TO PARTICIPATE ── */}
      <section id="participate" style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textAlign: "center", marginBottom: 16 }}>
            The 2026 event · Thank you
          </div>
          <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(26px, 3vw, 38px)", color: "#FFFFFF", textAlign: "center", margin: "0 auto 16px", maxWidth: 560, lineHeight: 1.2 }}>
            An afternoon at the lake, for the cure.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            The raffles and tickets are now closed. Together, Concert for a Cure 2026 raised <strong style={{ color: "#FFFFFF" }}>$105,000</strong>{" "}for Parkinson&apos;s research — thank you.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="participate-grid">

            {/* Card 1: Event Ticket */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 16 }}>Event Ticket</div>
              <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>$225</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>per person</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", flex: 1 }}>
                An afternoon at the lake — live music, chef-curated food and cocktails, a live auction, and the raffle draw, with 100 guests.
              </p>
              <TrackedAnchor href="/donate" eventName="donate_clicked" style={{ display: "block", padding: "13px 0", background: "#F98008", color: "#FFFFFF", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textAlign: "center", textDecoration: "none" }}>
                Donate
              </TrackedAnchor>
            </div>

            {/* Card 2: Boat Raffle */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 16 }}>Boat Raffle</div>
              <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>$25,000</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>estimated retail value</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 24px", flex: 1 }}>
                A Starcraft Ski Champ with classic lines inspired by 1950s automotive style, including its signature rear fins. The winner was drawn live at the event on July 18, 2026.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>Donated by</span>
                <a href="https://indyboatco.com" target="_blank" rel="noopener noreferrer" style={{ background: "#FFFFFF", borderRadius: 6, padding: "5px 10px", display: "inline-flex", alignItems: "center" }}>
                  <img src="/ibc-logo-h.png" alt="Indy Boat Co." style={{ width: 80, height: 20, objectFit: "cover", objectPosition: "center", display: "block" }} />
                </a>
              </div>
              <TrackedAnchor href="/donate" eventName="donate_clicked" eventProps={{ raffle: "Boat Raffle" }} style={{ display: "block", padding: "13px 0", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textAlign: "center", textDecoration: "none" }}>
                Donate to the cause
              </TrackedAnchor>
            </div>

            {/* Card 3: 50/50 Raffle */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 16 }}>50/50 Raffle</div>
              <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>50%</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>of the total pot to the winner</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", flex: 1 }}>
                The winner took half the pot; the other half funds Parkinson&apos;s research. Drawn live at the event on July 18, 2026.
              </p>
              <TrackedAnchor href="/donate" eventName="donate_clicked" eventProps={{ raffle: "50/50 Raffle" }} style={{ display: "block", padding: "13px 0", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textAlign: "center", textDecoration: "none" }}>
                Donate to the cause
              </TrackedAnchor>
            </div>

          </div>
        </div>
      </section>

      {/* ── TICKETS ── */}
      <section id="tickets" style={{ background: "#F6F1E6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6F7D", marginBottom: 16, textAlign: "center" }}>
            Tickets · Closed
          </div>
          <h2
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.2,
              color: "#000000",
              margin: "0 auto 20px",
              textAlign: "center",
            }}
          >
            The 2026 event has passed.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "#2B2B2B", textAlign: "center", margin: "0 auto 28px", maxWidth: 520 }}>
            Thank you to the 100 guests who joined us at the lake — and to everyone who gave. Together, Concert for a Cure raised <strong>$105,000</strong>{" "}for Parkinson&apos;s research through The Michael J. Fox Foundation. Ticket sales are now closed, but the mission continues year-round.
          </p>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <a href="/donate" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 34px", background: "#F98008", color: "#FFFFFF", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
              Donate to the cause
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5" /></svg>
            </a>
          </div>

        </div>
      </section>

      {/* ── BOAT RAFFLE ── */}
      <section id="raffle" className="raffle-section" style={{ background: "#111111", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: 20, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 10 }}>Boat Raffle</div>
              <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 48px)", color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
                Win a $25,000 boat.<br />Fund a breakthrough.
              </h2>
            </div>
          </div>

          {/* Boat image + details */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "center" }} className="two-col">

            {/* Boat photo + value bar */}
            <div>
              <div className="boat-photo" role="img" aria-label="2026 Starcraft Ski Champ raffle boat" />
              <div className="boat-value-bar" style={{ display: "flex", alignItems: "center", background: "rgba(0,0,0,0.7)", borderRadius: "0 0 12px 12px", padding: "20px 28px", gap: 28 }}>
                <div style={{ flexShrink: 0 }}>
                  <div className="value-amount" style={{ fontSize: 40, fontWeight: 800, color: "#E8C0C0", lineHeight: 1 }}>$25,000</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>Estimated retail value</div>
                </div>
                <div className="value-divider" style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.2)" }} />
                <div className="ibc-logo-box" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Donated by</div>
                  <div style={{ background: "#fff", borderRadius: 10, border: "1px solid rgba(0,0,0,0.1)", padding: "10px 24px", textAlign: "center" }}>
                    <span style={{ fontSize: 20, fontWeight: 800, color: "#3B82C4", letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>Indy Boat Co.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              {/* Specs */}
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "24px", marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Boat specs</div>
                {[
                  { label: "Make", value: "Starcraft" },
                  { label: "Winner drawn", value: "Live · July 18, 2026" },
                  { label: "Present to win", value: "Not required" },
                ].map((spec, i, arr) => (
                  <div key={spec.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: i < arr.length - 1 ? 12 : 0, marginBottom: i < arr.length - 1 ? 12 : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{spec.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF" }}>{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Raffle closed */}
              <div style={{ background: "rgba(237,194,193,0.08)", border: "1px solid rgba(237,194,193,0.25)", borderRadius: 12, padding: "26px 28px", marginBottom: 16 }}>
                <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 12px", background: "rgba(237,194,193,0.15)", border: "1px solid rgba(237,194,193,0.3)", borderRadius: 999, marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#EDC2C1" }}>Raffle closed</span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", margin: "0 0 20px" }}>
                  The boat raffle has closed and the winner was drawn on July 18, 2026 — thank you to everyone who entered. Together, Concert for a Cure raised <strong style={{ color: "#FFFFFF" }}>$105,000</strong>{" "}for Parkinson&apos;s research.
                </p>
                <a href="/donate" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "#F98008", color: "#FFFFFF", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                  Donate to the cause
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5" /></svg>
                </a>
              </div>

              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.6 }}>
                Proceeds support Parkinson&apos;s research through The Michael J. Fox Foundation.
              </p>
              <div style={{ marginTop: 12 }}>
                <RaffleTermsModal label="Boat Raffle" />
              </div>
            </div>
          </div>

          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", margin: "32px 0 0", lineHeight: 1.6, textAlign: "center" }}>
            Indiana Charity Gaming License Number 018323
          </p>

        </div>
      </section>

      {/* ── 50/50 RAFFLE ── */}
      <section id="fifty-fifty" style={{ background: "#F6F1E6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 12 }}>50/50 Raffle</div>
            <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 48px)", color: "#000000", margin: "0 0 16px", lineHeight: 1.15 }}>
              Half goes to the winner.<br />Half funds the cure.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6B6F7D", margin: "0 auto", maxWidth: 520 }}>
              Half the pot went to the winner; the other half funds the cure. The winner was drawn live on July 18, 2026.
            </p>
          </div>

          {/* Raffle closed */}
          <div style={{ background: "#FFFFFF", border: "1px solid #DCDDE3", borderRadius: 12, padding: "32px 32px", marginBottom: 24, textAlign: "center", boxShadow: "0 1px 2px rgba(20,33,61,0.06), 0 8px 24px rgba(20,33,61,0.06)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", padding: "5px 12px", background: "rgba(169,124,124,0.12)", border: "1px solid rgba(169,124,124,0.3)", borderRadius: 999, marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A97C7C" }}>Raffle closed</span>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#2B2B2B", margin: "0 auto 22px", maxWidth: 480 }}>
              The 50/50 raffle has closed and the winner was drawn on July 18, 2026 — thank you to everyone who played. Together, Concert for a Cure raised <strong>$105,000</strong>{" "}for Parkinson&apos;s research.
            </p>
            <a href="/donate" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 30px", background: "#F98008", color: "#FFFFFF", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Donate to the cause
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5" /></svg>
            </a>
          </div>

          <p style={{ fontSize: 13, color: "#9B9FAE", margin: 0, lineHeight: 1.6, textAlign: "center" }}>
            50% of the total pot went to the winner; the remaining 50% funds Parkinson&apos;s research through The Michael J. Fox Foundation.
          </p>

          <div style={{ marginTop: 24, textAlign: "center" }}>
            <RaffleTermsModal label="50/50 Raffle" theme="light" />
          </div>

          <p style={{ fontSize: 12, color: "#B8BAC4", margin: "12px 0 0", lineHeight: 1.6, textAlign: "center" }}>
            Indiana Charity Gaming License Number 018323
          </p>

        </div>
      </section>

      {/* ── THE EVENING INCLUDES ── */}
      <section style={{ background: "#FDF7F7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B6F7D",
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            The afternoon includes
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}
            className="features-grid"
          >
            {[
              {
                icon: "🎸",
                title: "Live Music",
                description: "A curated live music experience on the lake. Good music, great energy, one shared purpose.",
              },
              {
                icon: "🍽️",
                title: "Food + Cocktails",
                description: "Chef-curated food and cocktails at the lake. Great company and a beautiful setting.",
              },
              {
                icon: "🏷️",
                title: "Live Auction",
                description: "Bid on exclusive items and experiences. Funds raised benefit The Michael J. Fox Foundation for Parkinson's Research.",
              },
              {
                icon: "🎟️",
                title: "Raffle Winner Announced",
                description: "The $25,000 boat raffle winner is drawn live at the event. You do not need to be present to win.",
              },
              {
                icon: "🤝",
                title: "Sponsor Impact",
                description: "Corporate and individual sponsors amplify every gift. See sponsorship packages below.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 12,
                  padding: "28px 24px",
                  boxShadow: "0 1px 2px rgba(20,33,61,0.06), 0 8px 24px rgba(20,33,61,0.06)",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#000000",
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#2B2B2B", margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPONSORSHIP ── */}
      <section id="sponsor" style={{ background: "#2B2B2B", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
              Corporate sponsorship
            </div>
            <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.2, color: "#FFFFFF", margin: "0 0 16px" }}>
              Three ways to stand with the mission.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", margin: 0 }}>
              <span style={{ display: "block" }}>Lead the mission. Partner with the experience. Stand with the community.</span>
              <span style={{ display: "block" }}>Funds raised benefit The Michael J. Fox Foundation for Parkinson&apos;s Research.</span>
            </p>
          </div>

          {/* Title Sponsor — secured */}
          <div style={{ background: "rgba(249,128,8,0.08)", border: "1px solid rgba(249,128,8,0.25)", borderRadius: 12, padding: "28px 32px", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", background: "rgba(249,128,8,0.15)", border: "1px solid rgba(249,128,8,0.3)", borderRadius: 999, marginBottom: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#EDC2C1" }}>Secured</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#FFFFFF", marginBottom: 4 }}>Title Sponsor · $25,000</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                Presented by <strong style={{ color: "#FFFFFF" }}>Indy Boat Co.</strong> With Indy Boat Co. anchoring the event as Title Sponsor, the room has its lead. We are deeply grateful for their partnership and the standard it sets for this year.
              </div>
            </div>
            <a href="https://indyboatco.com" target="_blank" rel="noopener noreferrer" style={{ background: "#FFFFFF", borderRadius: 8, padding: "8px 16px", flexShrink: 0, display: "inline-flex", alignItems: "center" }}>
              <img src="/ibc-logo-h.png" alt="Indy Boat Co." style={{ width: 160, height: 40, objectFit: "cover", objectPosition: "center", display: "block" }} />
            </a>
          </div>

          {/* Open tiers */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }} className="sponsor-grid">
            {[
              {
                tier: "Lead Sponsor",
                amount: "$10,000",
                availability: "3 available",
                description: "For companies that want premium visibility and a meaningful role in the mission.",
                perks: [
                  "Logo on major event signage",
                  "Logo on website and printed program",
                  "Recognition from stage",
                  "Featured sponsor thank you on social media",
                  "Six event tickets",
                  "Option to align with one event moment",
                ],
              },
              {
                tier: "Partner Sponsor",
                amount: "$5,000",
                availability: "6 available",
                description: "For local companies that want strong visibility and guest access.",
                perks: [
                  "Logo on event signage",
                  "Logo on website and printed program",
                  "Group recognition from stage",
                  "Social media group thank you",
                  "Four event tickets",
                  "Option to support one guest experience",
                ],
              },
              {
                tier: "Community Sponsor",
                amount: "$2,500",
                availability: "10 available",
                description: "For small businesses, families, and professionals who want to stand with the mission.",
                perks: [
                  "Name or logo on website",
                  "Name or logo in printed program",
                  "Name listed on event signage",
                  "Two event tickets",
                  "Group sponsor thank you",
                ],
              },
            ].map((s) => (
              <div key={s.tier} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "28px 24px", display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: "#FFFFFF" }}>{s.tier}</div>
                    <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: "#EDC2C1" }}>{s.amount}</div>
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>{s.availability}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{s.description}</div>
                </div>
                <ul style={{ margin: "0 0 24px", padding: "0 0 0 16px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                  {s.perks.map((perk) => (
                    <li key={perk} style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{perk}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:wendy@chasingacurepd.org?subject=Concert for a Cure 2026 - ${s.tier} Inquiry`}
                  style={{ display: "block", padding: "11px 0", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: 14, textAlign: "center", textDecoration: "none" }}
                >
                  Inquire
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SPONSOR RECOGNITION ── */}
      <SponsorRecognition />

      {/* ── FAQ ── */}
      <section style={{ background: "#F6F1E6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B6F7D",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Frequently asked
          </div>
          <h2
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.2,
              color: "#000000",
              margin: "0 auto 40px",
              textAlign: "center",
            }}
          >
            Good to know.
          </h2>
          <ConcertFAQ />
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.2,
              color: "#FFFFFF",
              margin: "0 0 16px",
            }}
          >
            Can&apos;t make it? Still fund the science.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 36px" }}>
            No salaries. No paid staff. Funds raised benefit The Michael J. Fox Foundation for Parkinson&apos;s Research.
          </p>
          <Link
            href="/donate"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 40px",
              background: "#F98008",
              color: "#FFFFFF",
              borderRadius: 999,
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              fontSize: 17,
              textDecoration: "none",
            }}
          >
            Donate Online
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Concert for a Cure 2026",
            description:
              "An afternoon of live music, chef-curated food, and fundraising for Parkinson's research at Geist Reservoir in Fishers, Indiana.",
            startDate: "2026-07-18T14:00:00-05:00",
            endDate: "2026-07-18T18:00:00-05:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Private Lake Home, Geist Reservoir",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fishers",
                addressRegion: "IN",
                addressCountry: "US",
              },
            },
            organizer: {
              "@type": "NonprofitOrganization",
              name: "Chasing a Cure Parkinson's Foundation",
              url: "https://chasingacurepd.org",
            },
            offers: {
              "@type": "Offer",
              url: "https://chasingacurepd.org/concert",
              price: "225",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: "2026-01-01",
            },
          }),
        }}
      />
      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 24px !important; }
          .tickets-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
          .sponsor-grid { grid-template-columns: 1fr !important; }
          .boat-donated-by { display: none !important; }
          .participate-grid { grid-template-columns: 1fr !important; }
          .raffle-section { padding-top: 48px !important; }
          .boat-value-bar { padding: 14px 16px !important; gap: 12px !important; flex-direction: column !important; align-items: flex-start !important; }
          .boat-value-bar .value-amount { font-size: 28px !important; }
          .boat-value-bar .value-divider { display: none !important; }
          .boat-value-bar .ibc-logo-box { width: 100% !important; box-sizing: border-box !important; }
        }
        @media (max-width: 560px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 400px) {
          .performers-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
