import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ConcertFAQ from "@/components/ConcertFAQ";
import RaffleTicketButton from "@/components/RaffleTicketButton";

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
          minHeight: "72vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 24px 64px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('/photos/geist-juicebox-cove.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.60) 45%, rgba(8,8,8,0.25) 75%, rgba(8,8,8,0.05) 100%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "inline-flex", alignItems: "center", marginBottom: 20, padding: "8px 20px", background: "#F98008", borderRadius: 999 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF" }}>
                Saturday, July 18, 2026 · 2–6 PM · Fishers, Indiana
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "#FFFFFF", margin: "0 0 16px", textWrap: "auto" as const }}>
              Concert for<br />a Cure.
            </h1>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 36px)", lineHeight: 1.2, color: "#F98008", margin: "0 0 28px", textWrap: "auto" as const }}>
              Afternoon at the lake. One shared purpose.
            </p>

            <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.6, color: "#FFFFFF", margin: "0 0 32px", maxWidth: 520 }}>
              Live music, great company, and every ticket funds Parkinson&apos;s research through The Michael J. Fox Foundation.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#participate"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 36px", background: "#F98008", color: "#fff", borderRadius: 999, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                Ways to Participate
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </a>
              <a
                href="#sponsor"
                style={{ display: "inline-flex", alignItems: "center", padding: "15px 28px", background: "#FFFFFF", color: "#111111", borderRadius: 999, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, textDecoration: "none" }}
              >
                Sponsorship
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAYS TO PARTICIPATE ── */}
      <section id="participate" style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textAlign: "center", marginBottom: 16 }}>
            Three ways to be part of it
          </div>
          <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(26px, 3vw, 38px)", color: "#FFFFFF", textAlign: "center", margin: "0 auto 48px", maxWidth: 560, lineHeight: 1.2 }}>
            Join us at the lake, win a boat, or split the pot.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="participate-grid">

            {/* Card 1: Event Ticket */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F98008", marginBottom: 16 }}>Event Ticket</div>
              <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>$225</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>per person</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", flex: 1 }}>
                An afternoon at the lake. Live music, chef-curated food and cocktails, live auction, and the raffle draw. Limited to 100 guests.
              </p>
              <a href="#tickets" style={{ display: "block", padding: "13px 0", background: "#F98008", color: "#FFFFFF", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textAlign: "center", textDecoration: "none" }}>
                Get Tickets
              </a>
            </div>

            {/* Card 2: Boat Raffle */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F98008", marginBottom: 16 }}>Boat Raffle</div>
              <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>$25,000</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>estimated retail value</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 24px", flex: 1 }}>
                Win a Starcraft Ski Champ with classic lines inspired by 1950s automotive style, including its signature rear fins. Winner drawn live at the event. You do not need to be present to win.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>Donated by</span>
                <a href="https://indyboatco.com" target="_blank" rel="noopener noreferrer" style={{ background: "#FFFFFF", borderRadius: 6, padding: "5px 10px", display: "inline-flex", alignItems: "center" }}>
                  <img src="/ibc-logo-h.png" alt="Indy Boat Co." style={{ width: 80, height: 20, objectFit: "cover", objectPosition: "center", display: "block" }} />
                </a>
              </div>
              <a href="#raffle" style={{ display: "block", padding: "13px 0", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textAlign: "center", textDecoration: "none" }}>
                Buy Raffle Tickets
              </a>
            </div>

            {/* Card 3: 50/50 Raffle */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F98008", marginBottom: 16 }}>50/50 Raffle</div>
              <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>50%</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>of the total pot to the winner</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", flex: 1 }}>
                The more tickets sold, the bigger the prize. Winner takes half the pot; the other half funds Parkinson&apos;s research. You do not need to be present to win.
              </p>
              <a href="#fifty-fifty" style={{ display: "block", padding: "13px 0", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textAlign: "center", textDecoration: "none" }}>
                Buy 50/50 Tickets
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT THE EVENING ── */}
      <section style={{ background: "#FDF7F7", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="two-col"
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B6F7D",
                marginBottom: 16,
              }}
            >
              About the afternoon
            </div>
            <h2
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
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
              Concert for a Cure is an afternoon at the lake, live music, good company,
              and one shared purpose. Hosted at Wendy and Rob&apos;s lake home on
              Geist Reservoir in Fishers, Indiana.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#2B2B2B", margin: "0 0 20px", textWrap: "auto" as const }}>
              This is not a gala. It&apos;s not a corporate event. It&apos;s a gathering
              of people who believe the science is close, and who want to be part of
              getting it there.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#2B2B2B", margin: 0, textWrap: "auto" as const }}>
              Every ticket. Every bid at the live auction. Every raffle ticket.
              Funds raised benefit The Michael J. Fox Foundation for Parkinson&apos;s Research.
            </p>
          </div>

          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 16,
              padding: 48,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#FFFFFF",
                marginBottom: 8,
              }}
            >
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
                  paddingBottom: 16,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, color: "#FFFFFF", textAlign: "right" }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKETS ── */}
      <section id="tickets" style={{ background: "#F6F1E6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6F7D", marginBottom: 16, textAlign: "center" }}>
            Tickets
          </div>
          <h2
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.2,
              color: "#000000",
              margin: "0 auto 32px",
              textAlign: "center",
            }}
          >
            Join 100 guests at the lake.
          </h2>

          {/* What's included */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
            {["Chef-curated food + cocktails", "Live music", "Live auction", "Raffle winner announced"].map((item) => (
              <div key={item} style={{ padding: "7px 14px", background: "#FFFFFF", border: "1px solid #DCDDE3", borderRadius: 999, fontSize: 13, fontWeight: 500, color: "#2B2B2B" }}>
                {item}
              </div>
            ))}
          </div>

          {/* Zeffy ticket embed */}
          <div style={{ marginBottom: 16, borderRadius: 12, overflow: "hidden", border: "1px solid #DCDDE3" }}>
            <iframe
              title="Ticket purchase powered by Zeffy"
              style={{ border: 0, width: "100%", height: 560, display: "block" }}
              src="https://www.zeffy.com/embed/ticketing/3rd-annual-concert-for-a-cure-parkinsons-research"
              allow="payment"
            />
          </div>

        </div>
      </section>

      {/* ── BOAT RAFFLE ── */}
      <section id="raffle" style={{ background: "#111111", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: 20, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F98008", marginBottom: 10 }}>Boat Raffle</div>
              <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 48px)", color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
                Win a $25,000 boat.<br />Fund a breakthrough.
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 4 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>Donated by</span>
              <a href="https://indyboatco.com" target="_blank" rel="noopener noreferrer" style={{ background: "#FFFFFF", borderRadius: 6, padding: "5px 10px", display: "inline-flex", alignItems: "center" }}>
                <img src="/ibc-logo-h.png" alt="Indy Boat Co." style={{ width: 100, height: 25, objectFit: "cover", objectPosition: "center", display: "block" }} />
              </a>
            </div>
          </div>

          {/* Boat image + details */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "center" }} className="two-col">

            {/* Boat photo */}
            <div>
              <div style={{ borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/photos/raffle-boat-new.png" alt="2026 Stingray raffle boat" width={700} height={450} style={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }} priority />
                <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)", borderRadius: 8, padding: "8px 14px" }}>
                  <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 22, color: "#F98008", lineHeight: 1 }}>$25,000</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Estimated retail value</div>
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

              {/* Ticket tiers */}
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>More tickets, better odds.</div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", background: "rgba(249,128,8,0.15)", border: "1px solid rgba(249,128,8,0.3)", borderRadius: 999, flexShrink: 0 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F98008", display: "inline-block" }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F98008" }}>Max 1,000 tickets</span>
                  </div>
                </div>
                {[
                  { price: "$100", tickets: "1 ticket" },
                  { price: "$275", tickets: "3 tickets" },
                  { price: "$400", tickets: "5 tickets" },
                ].map((tier, i) => (
                  <div key={tier.price} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                      <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 20, color: "#FFFFFF" }}>{tier.price}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{tier.tickets}</div>
                    </div>
                    <RaffleTicketButton
                      url="https://www.rafflebox.us/raffle/ccpf"
                      raffleName="Boat Raffle"
                      style={{ padding: "8px 18px", background: "#F98008", color: "#FFFFFF", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 13 }}
                    >
                      Buy
                    </RaffleTicketButton>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.6, whiteSpace: "nowrap" }}>
                Every ticket funds Parkinson&apos;s research through The Michael J. Fox Foundation.
              </p>
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
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F98008", marginBottom: 12 }}>50/50 Raffle</div>
            <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 48px)", color: "#000000", margin: "0 0 16px", lineHeight: 1.15 }}>
              Half goes to the winner.<br />Half funds the cure.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6B6F7D", margin: "0 auto", maxWidth: 520 }}>
              Buy tickets, split the pot. The more tickets sold, the bigger the prize. Winner drawn live on July 18.
            </p>
          </div>

          {/* Ticket tiers */}
          <div style={{ background: "#FFFFFF", border: "1px solid #DCDDE3", borderRadius: 12, overflow: "hidden", marginBottom: 24, boxShadow: "0 1px 2px rgba(20,33,61,0.06), 0 8px 24px rgba(20,33,61,0.06)" }}>
            <div style={{ padding: "16px 24px", borderBottom: "1px solid #EDEDF0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, background: "#FAFAFA" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#6B6F7D" }}>More tickets, better odds. Winner takes 50% of the total pot.</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", background: "rgba(249,128,8,0.12)", border: "1px solid rgba(249,128,8,0.3)", borderRadius: 999 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F98008", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F98008" }}>50% to winner</span>
              </div>
            </div>
            {[
              { tickets: "5 tickets",   price: "$25" },
              { tickets: "15 tickets",  price: "$50" },
              { tickets: "40 tickets",  price: "$100" },
              { tickets: "100 tickets", price: "$200" },
              { tickets: "400 tickets", price: "$500" },
            ].map((tier, i, arr) => (
              <div key={tier.price} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: i < arr.length - 1 ? "1px solid #EDEDF0" : "none" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 22, color: "#000000" }}>{tier.price}</div>
                  <div style={{ fontSize: 14, color: "#6B6F7D" }}>{tier.tickets}</div>
                </div>
                <RaffleTicketButton
                  url="https://www.rafflebox.us/raffle/ccpf5050"
                  raffleName="50/50 Raffle"
                  style={{ padding: "8px 20px", background: "#F98008", color: "#FFFFFF", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 13 }}
                >
                  Buy
                </RaffleTicketButton>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13, color: "#9B9FAE", margin: 0, lineHeight: 1.6, textAlign: "center" }}>
            Winner drawn live at the event on July 18, 2026. You do not need to be present to win. 50% of the total pot goes to the winner; the remaining 50% funds Parkinson&apos;s research through The Michael J. Fox Foundation.
          </p>

          <p style={{ fontSize: 12, color: "#B8BAC4", margin: "24px 0 0", lineHeight: 1.6, textAlign: "center" }}>
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
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", background: "rgba(249,128,8,0.15)", border: "1px solid rgba(249,128,8,0.3)", borderRadius: 999, marginBottom: 12 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F98008", display: "inline-block" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#F98008" }}>Secured</span>
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
                    <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: "#F98008" }}>{s.amount}</div>
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
              color: "#fff",
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
          .two-col { grid-template-columns: 1fr !important; gap: 48px !important; }
          .tickets-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr 1fr !important; }
          .sponsor-grid { grid-template-columns: 1fr !important; }
          .participate-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
