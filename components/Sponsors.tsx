import { Fragment, type ReactNode, type CSSProperties } from "react";

/* ──────────────────────────────────────────────
   SPONSOR RECOGNITION — shared across concert pages
   Add sponsors here as they come in. Each renders as a
   hyperlinked logo (or name, if no logo yet), grouped by tier.
   - logo: path under /public (e.g. "/sponsors/acme.png"). Omit to show the name.
   - aspect: logo width/height, used for equal-area sizing so wide + square logos look balanced.
   - Community tier scrolls; Title/Lead/Partner/In-Kind are static.
   - In-Kind is shown only in the bottom recognition section (not the under-hero ribbon).
────────────────────────────────────────────── */
type SponsorTier = "Title" | "Lead" | "Partner" | "Community" | "InKind";

interface Sponsor {
  name: string;
  tier: SponsorTier;
  url?: string; // omit (or "#") to render the logo without a link
  logo?: string;
  aspect?: number;
}

const SPONSORS: Sponsor[] = [
  { name: "Indy Boat Co.", tier: "Title", url: "https://indyboatco.com", logo: "/sponsors/indy-boat-co.png", aspect: 5.76 },

  { name: "Chase Properties", tier: "Lead", logo: "/sponsors/chase-properties-trim.png", aspect: 1.03 }, // no website link

  { name: "Carrington Homes", tier: "Partner", url: "https://www.carringtonhomes.com/", logo: "/sponsors/carrington-homes-trim.png", aspect: 1.25 },
  { name: "Reis Nichols Jewelers", tier: "Partner", url: "https://www.reisnichols.com/", logo: "/sponsors/reis-nichols-trim.png", aspect: 4.63 },
  { name: "Grey Hunt Interiors", tier: "Partner", url: "https://greyhuntinteriors.com/", logo: "/sponsors/grey-hunt-interiors-trim.png", aspect: 5.20 },

  { name: "ClarityMD", tier: "Community", url: "https://www.claritymd.com/", logo: "/sponsors/claritymd.png", aspect: 1.25 },
  { name: "Drapery Street", tier: "Community", url: "https://www.draperystreet.com/", logo: "/sponsors/drapery-street.png", aspect: 2.53 },
  { name: "Little Eyes", tier: "Community", url: "https://littleeyes.com/", logo: "/sponsors/little-eyes.png", aspect: 1.56 },
  { name: "Revolution EYES", tier: "Community", url: "https://revolution-eyes.com/", logo: "/sponsors/revolution-eyes.png", aspect: 2.68 },
  { name: "The Manning Companies", tier: "Community", url: "https://www.themanningcompanies.com/", logo: "/sponsors/manning.png", aspect: 2.61 },
  { name: "Anthony and Associates", tier: "Community", url: "https://www.aabrea.com/", logo: "/sponsors/anthony-associates.png", aspect: 6.05 },
  { name: "Ferguson", tier: "Community", url: "https://www.ferguson.com/", logo: "/sponsors/ferguson.png", aspect: 7.75 },
  { name: "Elysian Medspa", tier: "Community", url: "https://elysianmedirejuv.com/", logo: "/sponsors/elysian.png", aspect: 3.81 },

  // In-Kind — shown only in the bottom recognition section (not the under-hero ribbon).
  { name: "Penn & Beech Candle Co.", tier: "InKind", url: "https://www.pennandbeech.com/pages/indianapolis-fishers", logo: "/sponsors/penn-beech.png", aspect: 2.93 },
  { name: "Piazza Geist Market", tier: "InKind", url: "https://piazza-geist-market.square.site/", logo: "/sponsors/piazza-geist.png", aspect: 3.42 },
  { name: "Poolwerx", tier: "InKind", url: "https://www.poolwerx.com/locations/indiana/poolwerx-noblesville/", logo: "/sponsors/poolwerx.png", aspect: 2.05 },
  { name: "Red Tulip for Parkinson's Awareness", tier: "InKind", url: "https://www.redtulipforparkinsons.org/", logo: "/sponsors/red-tulip.png", aspect: 1.05 },
  { name: "Reforming Indy", tier: "InKind", url: "https://reformingindy.com/", logo: "/sponsors/reforming-indy.png", aspect: 0.98 },
  { name: "Tiburon Coastal Cuisine", tier: "InKind", url: "https://tiburoncoastal.com/", logo: "/sponsors/tiburon.png", aspect: 2.20 },
  { name: "Joe's Butcher Shop", tier: "InKind", url: "https://joesbutchershop.com/", logo: "/sponsors/joes-butcher.png", aspect: 1.14 },
  // Wolfie's supplied a white logo; recolored to navy so it reads on the light cards.
  { name: "Wolfie's Grill", tier: "InKind", url: "https://www.wolfiesgrill.com/", logo: "/sponsors/wolfies.png", aspect: 1.33 },
  { name: "Smoker Craft", tier: "InKind", url: "https://www.smokercraftincorporated.com/", logo: "/sponsors/smoker-craft.png", aspect: 0.99 },
];

const byTier = (t: SponsorTier) => SPONSORS.filter((s) => s.tier === t);

function TierLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "0 0 24px" }}>
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
  const hasLink = !!s.url && s.url !== "#";
  const style: CSSProperties = {
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
  };
  const inner = s.logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={s.logo} alt={s.name} style={{ height: logoH, width: "auto", maxWidth: "100%", objectFit: "contain", display: "block" }} />
  ) : (
    <span style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 600, fontSize: bare ? 14 : 15, color: bare ? "#3B3640" : "#2B2B2B", textAlign: "center", lineHeight: 1.3, whiteSpace: bare ? "nowrap" : "normal" }}>
      {s.name}
    </span>
  );

  // No URL → static logo (no anchor, no hover-lift class).
  if (!hasLink) {
    return <div title={s.name} style={style}>{inner}</div>;
  }
  return (
    <a href={s.url} target="_blank" rel="noopener noreferrer" title={s.name} className={bare ? "sponsor-logo-bare" : "sponsor-card"} style={style}>
      {inner}
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

/* Under-hero ribbon: Title sponsor pinned static on the left, everyone else scrolls.
   Pulls up slightly to cut into the bottom of the hero. */
export function SponsorRibbon({ cutIntoHero = true }: { cutIntoHero?: boolean }) {
  if (SPONSORS.length === 0) return null;
  return (
    <section aria-label="Our sponsors" style={{ background: "#FFFFFF", borderTop: cutIntoHero ? undefined : "1px solid #EDE4E4", borderBottom: "1px solid #EDE4E4", padding: "48px 0 44px", position: "relative", zIndex: 3, marginTop: cutIntoHero ? -48 : 0 }}>
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
  );
}

/* Bottom recognition section: all tiers, grouped and labeled. */
export function SponsorRecognition() {
  if (SPONSORS.length === 0) return null;
  return (
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

        {/* In-Kind — scrolling (bottom section only) */}
        {byTier("InKind").length > 0 && (
          <div>
            <TierLabel>In-Kind Sponsors</TierLabel>
            <div className="sponsor-marquee">
              <div className="sponsor-marquee-track">
                {byTier("InKind").map((s) => (
                  <SponsorCard key={s.name} s={s} area={2600} height={92} width={200} />
                ))}
                {/* duplicate for a seamless loop; hidden when motion is reduced */}
                {byTier("InKind").map((s) => (
                  <span key={`dup-${s.name}`} className="sponsor-marquee-dup" aria-hidden style={{ display: "contents" }}>
                    <SponsorCard s={s} area={2600} height={92} width={200} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
