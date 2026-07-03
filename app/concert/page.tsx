import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import RaffleTicketButton from "@/components/RaffleTicketButton";
import RaffleTermsModal from "@/components/RaffleTermsModal";

export const metadata: Metadata = {
  title: "Concert for a Cure 2026 | Chasing a Cure PD",
  description:
    "A private lakeside benefit for Parkinson's research. Public sponsorship, raffle, and giving opportunities are open now.",
  openGraph: {
    title: "Concert for a Cure 2026 | Chasing a Cure PD",
    description:
      "A private lakeside benefit for Parkinson's research. Public sponsorship, raffle, and giving opportunities are open now.",
    url: "https://chasingacurepd.org/concert",
    images: [{ url: "/photos/geist-juicebox-cove.png", width: 1200, height: 400, alt: "Boats on Geist Reservoir — Concert for a Cure 2026" }],
  },
};

/* ──────────────────────────────────────────────
   SPONSOR RECOGNITION DATA
   Add sponsors here as they come in. Each renders as a
   hyperlinked logo (or name, if no logo yet), grouped by tier.
   - logo: path under /public (e.g. "/sponsors/acme.png"). Omit to show the name.
   - Community tier scrolls; Title/Lead/Partner are static.
   TODO: replace the example placeholders below with real sponsors.
────────────────────────────────────────────── */
type SponsorTier = "Title" | "Lead" | "Partner" | "Community" | "InKind";

interface Sponsor {
  name: string;
  tier: SponsorTier;
  url: string;
  logo?: string;
  aspect?: number; // logo width/height, used for equal-area sizing so wide + square logos look balanced
}

const SPONSORS: Sponsor[] = [
  { name: "Indy Boat Co.", tier: "Title", url: "https://indyboatco.com", logo: "/sponsors/indy-boat-co.png", aspect: 5.76 },

  // TODO: Chase Properties URL not yet provided — update url when available.
  { name: "Chase Properties", tier: "Lead", url: "#", logo: "/sponsors/chase-properties-trim.png", aspect: 1.03 },

  { name: "Carrington Homes", tier: "Partner", url: "https://www.carringtonhomes.com/", logo: "/sponsors/carrington-homes-trim.png", aspect: 1.25 },
  { name: "Reis Nichols Jewelers", tier: "Partner", url: "https://www.reisnichols.com/", logo: "/sponsors/reis-nichols-trim.png", aspect: 4.63 },
  { name: "Grey Hunt Interiors", tier: "Partner", url: "https://greyhuntinteriors.com/", logo: "/sponsors/grey-hunt-interiors-trim.png", aspect: 5.20 },

  { name: "ClarityMD", tier: "Community", url: "https://www.claritymd.com/", logo: "/sponsors/claritymd.png", aspect: 1.25 },
  { name: "Drapery Street", tier: "Community", url: "https://www.draperystreet.com/", logo: "/sponsors/drapery-street.png", aspect: 2.53 },
  { name: "Little Eyes", tier: "Community", url: "https://littleeyes.com/", logo: "/sponsors/little-eyes.png", aspect: 1.56 },
  { name: "Revolution EYES", tier: "Community", url: "https://revolution-eyes.com/", logo: "/sponsors/revolution-eyes.png", aspect: 2.68 },
  { name: "The Manning Companies", tier: "Community", url: "https://www.themanningcompanies.com/", logo: "/sponsors/manning.png", aspect: 2.61 },

  // In-Kind — shown only in the bottom recognition section (not the under-hero ribbon).
  { name: "Penn & Beech Candle Co.", tier: "InKind", url: "https://www.pennandbeech.com/pages/indianapolis-fishers", logo: "/sponsors/penn-beech.png", aspect: 2.93 },
  { name: "Piazza Geist Market", tier: "InKind", url: "https://piazza-geist-market.square.site/", logo: "/sponsors/piazza-geist.png", aspect: 3.42 },
  { name: "Poolwerx", tier: "InKind", url: "https://www.poolwerx.com/locations/indiana/poolwerx-noblesville/", logo: "/sponsors/poolwerx.png", aspect: 2.05 },
  { name: "Red Tulip for Parkinson's Awareness", tier: "InKind", url: "https://www.redtulipforparkinsons.org/", logo: "/sponsors/red-tulip.png", aspect: 1.05 },
  { name: "Reforming Indy", tier: "InKind", url: "https://reformingindy.com/", logo: "/sponsors/reforming-indy.png", aspect: 0.98 },
];

const byTier = (t: SponsorTier) => SPONSORS.filter((s) => s.tier === t);

function TierLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        margin: "0 0 24px",
      }}
    >
      <span style={{ height: 1, width: 40, background: "#DFD3D3" }} aria-hidden />
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A97C7C" }}>
        {children}
      </span>
      <span style={{ height: 1, width: 40, background: "#DFD3D3" }} aria-hidden />
    </div>
  );
}

function SponsorCard({ s, area, height, width, bare }: { s: Sponsor; area: number; height: number; width?: number; bare?: boolean }) {
  // Equal-area: each logo renders at ~the same visual area regardless of shape.
  // height = sqrt(area / aspect); width follows naturally from the trimmed logo.
  const logoH = s.logo && s.aspect ? Math.round(Math.sqrt(area / s.aspect)) : undefined;
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      title={s.name}
      className={bare ? "sponsor-logo-bare" : "sponsor-card"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height,
        width: width ?? undefined,
        minWidth: bare ? undefined : width ?? 200,
        padding: bare ? "0 26px" : "16px 24px",
        background: bare ? "transparent" : "#FFFFFF",
        border: bare ? "none" : "1px solid #EDE4E4",
        borderRadius: bare ? 0 : 12,
        textDecoration: "none",
        boxSizing: "border-box",
      }}
    >
      {s.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.logo} alt={s.name} style={{ height: logoH, width: "auto", maxWidth: "100%", objectFit: "contain", display: "block" }} />
      ) : (
        <span style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 600, fontSize: bare ? 14 : 15, color: bare ? "#3B3640" : "#2B2B2B", textAlign: "center", lineHeight: 1.3, whiteSpace: bare ? "nowrap" : "normal" }}>
          {s.name}
        </span>
      )}
    </a>
  );
}

/* Under-hero strip: sponsors grouped by tier with a label + divider before each group.
   Higher tiers render slightly larger (area) to reinforce the hierarchy. */
const STRIP_TIERS: { tier: SponsorTier; label: string; area: number; color: string }[] = [
  { tier: "Title", label: "Title Sponsor", area: 8200, color: "#F98008" },
  { tier: "Lead", label: "Lead Sponsor", area: 6800, color: "#A97C7C" },
  { tier: "Partner", label: "Partner Sponsors", area: 5600, color: "#A97C7C" },
  { tier: "Community", label: "Community Sponsors", area: 4400, color: "#A97C7C" },
];

function StripDivider() {
  return <span aria-hidden style={{ width: 1, height: 46, background: "#E0D3D3", flex: "0 0 auto", alignSelf: "center" }} />;
}

// One full pass of the grouped strip (rendered twice in the marquee for a seamless loop).
function StripPass({ tiers = STRIP_TIERS }: { tiers?: typeof STRIP_TIERS }) {
  const groups = tiers.filter((g) => byTier(g.tier).length > 0);
  return (
    <>
      {groups.map((g, gi) => (
        <Fragment key={g.tier}>
          {gi > 0 && <StripDivider />}
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: g.color, whiteSpace: "nowrap", flex: "0 0 auto", alignSelf: "center", padding: "0 4px" }}>
            {g.label}
          </span>
          <StripDivider />
          {byTier(g.tier).map((s) => (
            <SponsorCard key={`strip-${s.name}`} s={s} area={g.area} height={96} bare />
          ))}
        </Fragment>
      ))}
    </>
  );
}

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
            <div style={{ display: "inline-flex", alignItems: "center", marginBottom: 20, padding: "8px 20px", background: "#EDC2C1", borderRadius: 999 }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A0A0A" }}>
                Saturday, July 18, 2026 · 2–6 PM · Juicebox Cove at Geist
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "#FFFFFF", margin: "0 0 16px", textWrap: "auto" as const }}>
              Concert<br />for a Cure.
            </h1>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 36px)", lineHeight: 1.2, color: "#F98008", margin: "0 0 28px", textWrap: "auto" as const }}>
              Afternoon at the lake. One shared purpose.
            </p>

            <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.6, color: "#FFFFFF", margin: "0 0 32px", maxWidth: 520 }}>
              Anchor in Juicebox Cove and be part of the music, the mission, and the movement to end Parkinson&apos;s disease.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#raffle"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 36px", background: "#EDC2C1", color: "#1A0A0A", borderRadius: 999, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                Boat Raffle
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </a>
              <a
                href="#fifty-fifty"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 28px", background: "#FFFFFF", color: "#111111", borderRadius: 999, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                50/50 Raffle
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSOR STRIP (under hero) ── */}
      {SPONSORS.length > 0 && (
        <section aria-label="Our sponsors" style={{ background: "#FFFFFF", borderBottom: "1px solid #EDE4E4", padding: "48px 0 44px", position: "relative", zIndex: 3, marginTop: -48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#A97C7C" }}>
              Proudly sponsored by
            </div>
            <div className="sponsor-pinned-row" style={{ display: "flex", alignItems: "center", gap: 20, maxWidth: 1240, width: "100%", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
              {/* Pinned Title Sponsor — does not scroll; label stacked above the logo to save width */}
              <div className="sponsor-pinned-title" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flex: "0 0 auto" }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F98008", whiteSpace: "nowrap" }}>
                  Title Sponsor
                </span>
                {byTier("Title").map((s) => (
                  <SponsorCard key={`pinned-${s.name}`} s={s} area={8200} height={72} bare />
                ))}
              </div>
              <span className="sponsor-pinned-divider"><StripDivider /></span>
              {/* Everyone else — scrolls */}
              <div className="sponsor-marquee sponsor-marquee-rightfade" style={{ flex: "1 1 auto", minWidth: 0 }}>
                <div className="sponsor-marquee-track sponsor-strip-track">
                  <StripPass tiers={STRIP_TIERS.filter((g) => g.tier !== "Title")} />
                  {/* duplicate pass for a seamless loop; hidden when motion is reduced */}
                  <span className="sponsor-marquee-dup" aria-hidden style={{ display: "contents" }}>
                    <StripPass tiers={STRIP_TIERS.filter((g) => g.tier !== "Title")} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PUBLIC OPPORTUNITIES ── */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textAlign: "center", marginBottom: 16 }}>
            Join the movement
          </div>
          <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(26px, 3vw, 38px)", color: "#FFFFFF", textAlign: "center", margin: "0 auto 16px", maxWidth: 600, lineHeight: 1.2 }}>
            Everyone has a role in ending Parkinson&apos;s disease.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            Concert for a Cure is a lakeside benefit for Parkinson&apos;s research, featuring a $25,000 Starcraft boat raffle. Every act of support moves the science forward.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="participate-grid">

            {/* Card 1: Boat Raffle */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 16 }}>Boat Raffle</div>
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

            {/* Card 2: 50/50 Raffle */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 16 }}>50/50 Raffle</div>
              <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>50%</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>of the total pot to the winner</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", flex: 1 }}>
                The more tickets sold, the bigger the prize. Winner takes half the pot; the other half funds Parkinson&apos;s research. You do not need to be present to win.
              </p>
              <a href="#fifty-fifty" style={{ display: "block", padding: "13px 0", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textAlign: "center", textDecoration: "none" }}>
                Buy 50/50 Tickets
              </a>
            </div>

            {/* Card 3: Sponsorship */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "36px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 16 }}>Sponsorship</div>
              <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 36, color: "#FFFFFF", lineHeight: 1, marginBottom: 8 }}>3 tiers</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>$2,500 · $5,000 · $10,000</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: "0 0 28px", flex: 1 }}>
                Lead the mission, partner with the experience, or stand with the community. Event tickets, logo placement, and stage recognition included.
              </p>
              <a href="#sponsor" style={{ display: "block", padding: "13px 0", background: "transparent", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 999, fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 15, textAlign: "center", textDecoration: "none" }}>
                View Packages
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOAT RAFFLE ── */}
      <section id="raffle" className="raffle-section" style={{ background: "#111111", padding: "96px 24px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#EDC2C1", marginBottom: 10 }}>Boat Raffle</div>
            <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 48px)", color: "#FFFFFF", margin: 0, lineHeight: 1.15 }}>
              Win a $25,000 boat.<br />Fund a breakthrough.
            </h2>
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

              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, overflow: "hidden", marginBottom: 16 }}>
                <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>More tickets, better odds.</div>
                  <div style={{ display: "inline-flex", alignItems: "center", padding: "4px 10px", background: "rgba(237,194,193,0.15)", border: "1px solid rgba(237,194,193,0.3)", borderRadius: 999, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#EDC2C1" }}>Max 1,000 tickets</span>
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

              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.6 }}>
                Ticket proceeds support Parkinson&apos;s research through The Michael J. Fox Foundation.
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
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 12 }}>50/50 Raffle</div>
            <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 48px)", color: "#000000", margin: "0 0 16px", lineHeight: 1.15 }}>
              Half goes to the winner.<br />Half funds the cure.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6B6F7D", margin: "0 auto", maxWidth: 520 }}>
              Buy tickets, split the pot. The more tickets sold, the bigger the prize. Winner drawn live on July 18.
            </p>
          </div>

          <div style={{ background: "#FFFFFF", border: "1px solid #DCDDE3", borderRadius: 12, overflow: "hidden", marginBottom: 24, boxShadow: "0 1px 2px rgba(20,33,61,0.06), 0 8px 24px rgba(20,33,61,0.06)" }}>
            <div style={{ padding: "16px 24px", borderBottom: "1px solid #EDEDF0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, background: "#FAFAFA" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#6B6F7D" }}>More tickets, better odds. Winner takes 50% of the total pot.</div>
              <div style={{ display: "inline-flex", alignItems: "center", padding: "4px 10px", background: "rgba(169,124,124,0.12)", border: "1px solid rgba(169,124,124,0.3)", borderRadius: 999 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#A97C7C" }}>50% to winner</span>
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
                  <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 20, color: "#000000" }}>{tier.price}</div>
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

          <div style={{ marginTop: 24, textAlign: "center" }}>
            <RaffleTermsModal label="50/50 Raffle" theme="light" />
          </div>

          <p style={{ fontSize: 12, color: "#B8BAC4", margin: "12px 0 0", lineHeight: 1.6, textAlign: "center" }}>
            Indiana Charity Gaming License Number 018323
          </p>

        </div>
      </section>

      {/* ── SPONSORSHIP ── */}
      <section id="sponsor" style={{ background: "#2B2B2B", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

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
          <div style={{ background: "rgba(237,194,193,0.08)", border: "1px solid rgba(237,194,193,0.25)", borderRadius: 12, padding: "28px 32px", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", background: "rgba(237,194,193,0.15)", border: "1px solid rgba(237,194,193,0.3)", borderRadius: 999, marginBottom: 12 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 24 }} className="sponsor-grid">
            {[
              {
                tier: "Lead Sponsor",
                amount: "$10,000",
                availability: "2 spots only",
                tagline: "Anchor the story.",
                perks: [
                  "2-minute remarks from stage",
                  "Signature moment alignment",
                  "4 event guest invitations",
                  "Private welcome with Wendy, Rob & MJFF partner",
                  "Chef Jay moment for your guests",
                  "Indy Boat Co. grand opening invitations",
                  "Dedicated sponsor email",
                  "Full-campaign social spotlight",
                  "Large banner visibility",
                  "Featured website recognition",
                  "Printed program recognition",
                ],
              },
              {
                tier: "Partner Sponsor",
                amount: "$5,000",
                availability: "Limited spots",
                tagline: "Champion the cure.",
                perks: [
                  "2 event guest invitations",
                  "1 warm networking introduction",
                  "Video feature and 5 dedicated social posts",
                  "Logo and paragraph in foundation email",
                  "Featured partner tier on website",
                  "Large banner visibility",
                  "Printed program recognition",
                ],
              },
              {
                tier: "Community Sponsor",
                amount: "$2,500",
                availability: "Limited spots",
                tagline: "Stand with the mission.",
                perks: [
                  "2 dedicated social posts",
                  "Logo in group sponsor email",
                  "Shared sponsor section on website",
                  "Medium banner visibility",
                  "Printed program recognition",
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
                  <div style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: 15, color: "#F98008", lineHeight: 1.4 }}>{s.tagline}</div>
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

          {/* For all 2026 Sponsors */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 12, padding: "32px 40px", textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 14 }}>For all 2026 Sponsors</div>
            <p style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "clamp(16px, 1.8vw, 20px)", color: "rgba(255,255,255,0.75)", margin: "0 auto", lineHeight: 1.6, maxWidth: 560 }}>
              An invitation to our Spring 2027 VIP Donor Reception, an annual gathering to thank the companies and families helping move a cure closer.
            </p>
          </div>

        </div>
      </section>


      {/* ══════════════════════════
          SPONSOR RECOGNITION
      ══════════════════════════ */}
      <section id="our-sponsors" style={{ background: "#FBF7F1", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 14 }}>
              Our 2026 sponsors
            </div>
            <h2 style={{ fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 46px)", lineHeight: 1.15, color: "#000000", margin: "0 0 16px" }}>
              Standing with the mission.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#6B6F7D", margin: "0 auto", maxWidth: 560 }}>
              These partners are helping move a cure closer — with our deepest gratitude, and an open invitation to join them.
            </p>
          </div>

          {/* Title */}
          {byTier("Title").length > 0 && (
            <div style={{ marginBottom: 48 }}>
              <TierLabel>Title Sponsor</TierLabel>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
                {byTier("Title").map((s) => (
                  <SponsorCard key={s.name} s={s} area={13000} height={140} width={360} />
                ))}
              </div>
            </div>
          )}

          {/* Lead */}
          {byTier("Lead").length > 0 && (
            <div style={{ marginBottom: 48 }}>
              <TierLabel>Lead Sponsors</TierLabel>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
                {byTier("Lead").map((s) => (
                  <SponsorCard key={s.name} s={s} area={7200} height={124} width={280} />
                ))}
              </div>
            </div>
          )}

          {/* Partner */}
          {byTier("Partner").length > 0 && (
            <div style={{ marginBottom: 48 }}>
              <TierLabel>Partner Sponsors</TierLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, maxWidth: 860, margin: "0 auto" }}>
                {byTier("Partner").map((s) => (
                  <SponsorCard key={s.name} s={s} area={5000} height={112} />
                ))}
              </div>
            </div>
          )}

          {/* Community — scrolling */}
          {byTier("Community").length > 0 && (
            <div style={{ marginBottom: 48 }}>
              <TierLabel>Community Sponsors</TierLabel>
              <div className="sponsor-marquee">
                <div className="sponsor-marquee-track">
                  {byTier("Community").map((s) => (
                    <SponsorCard key={s.name} s={s} area={2600} height={92} width={200} />
                  ))}
                  {/* duplicate for a seamless loop; hidden when motion is reduced */}
                  {byTier("Community").map((s) => (
                    <span key={`dup-${s.name}`} className="sponsor-marquee-dup" aria-hidden style={{ display: "contents" }}>
                      <SponsorCard s={s} area={2600} height={92} width={200} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* In-Kind — static grid (bottom section only) */}
          {byTier("InKind").length > 0 && (
            <div>
              <TierLabel>In-Kind Sponsors</TierLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, maxWidth: 900, margin: "0 auto" }}>
                {byTier("InKind").map((s) => (
                  <SponsorCard key={s.name} s={s} area={3000} height={96} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>


      <style>{`
        .sponsor-card { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .sponsor-card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px -12px rgba(20,33,61,.35); border-color: #E0D3D3; }
        .sponsor-logo-bare { transition: opacity .2s ease; }
        .sponsor-logo-bare:hover { opacity: .6; }
        .sponsor-strip-track { gap: 8px; align-items: center; }
        .sponsor-marquee { position: relative; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
        /* Pinned-title layout: crisp at the divider, fade only on the right */
        .sponsor-marquee-rightfade { -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 90%, transparent); mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 90%, transparent); }
        @media (max-width: 700px) {
          .sponsor-pinned-row { flex-direction: column !important; gap: 16px !important; }
          .sponsor-pinned-divider { display: none !important; }
          .sponsor-pinned-row .sponsor-marquee { width: 100%; }
        }
        .sponsor-marquee-track { display: flex; gap: 16px; width: max-content; animation: sponsor-scroll 45s linear infinite; }
        .sponsor-marquee:hover .sponsor-marquee-track { animation-play-state: paused; }
        @keyframes sponsor-scroll { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 8px)); } }
        @media (prefers-reduced-motion: reduce) {
          .sponsor-marquee { -webkit-mask-image: none; mask-image: none; }
          .sponsor-marquee-track { animation: none; width: auto; flex-wrap: wrap; justify-content: center; }
          .sponsor-marquee-dup { display: none !important; }
        }
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 24px !important; }
          .sponsor-grid { grid-template-columns: 1fr !important; }
          .participate-grid { grid-template-columns: 1fr !important; }
          .boat-donated-by { display: none !important; }
          .raffle-section { padding-top: 48px !important; }
          .boat-value-bar { padding: 14px 16px !important; gap: 12px !important; flex-direction: column !important; align-items: flex-start !important; }
          .boat-value-bar .value-amount { font-size: 28px !important; }
          .boat-value-bar .value-divider { display: none !important; }
          .boat-value-bar .ibc-logo-box { width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
    </>
  );
}
