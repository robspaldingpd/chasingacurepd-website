import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Science | Chasing a Cure Parkinson's Foundation",
  description:
    "Where your gift goes and why it matters now. Funding Parkinson's research through the Michael J. Fox Foundation, the world's leading private funder.",
  openGraph: {
    title: "The Science | Chasing a Cure Parkinson's Foundation",
    description:
      "Where your gift goes and why it matters now. Funding Parkinson's research through the Michael J. Fox Foundation, the world's leading private funder.",
    url: "https://chasingacurepd.org/science",
    images: [{ url: "/photos/wendy-rob-mjff-event-2.jpg", width: 1200, height: 630, alt: "Wendy and Rob Spalding at the Michael J. Fox Foundation" }],
  },
};

export default function SciencePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #1A1A1A 0%, #2B2B2B 100%)",
          padding: "140px 24px 96px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 20,
            }}
          >
            The science
          </div>
          <h1
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              margin: "0 0 24px",
            }}
          >
            The science is moving. Funding it now changes when we get there.
          </h1>
          <p
            style={{
              fontSize: "clamp(17px, 1.8vw, 21px)",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              maxWidth: 680,
              textWrap: "auto" as const,
            }}
          >
            For the first time in history, the targets exist, the tools exist,<br />and the trials are running. What&apos;s needed is sustained funding.
          </p>
        </div>
      </section>

      {/* ── WHY FUNDING MATTERS NOW ── */}
      <section style={{ background: "#FDF7F7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="two-col">
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
              Why now
            </div>
            <h2
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(26px, 3.5vw, 40px)",
                lineHeight: 1.15,
                color: "#000000",
                margin: "0 0 24px",
              }}
            >
              Research that was once impossible is happening today.
            </h2>
            <div style={{ fontSize: 17, lineHeight: 1.8, color: "#2B2B2B", display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ margin: 0 }}>
                For decades, Parkinson&apos;s was considered too complex, too many mechanisms,
                too few biomarkers, too little funding. That has changed. The discovery of
                alpha-synuclein&apos;s role, advances in dopamine pathway research, and the
                development of the Parkinson&apos;s Progression Markers Initiative (PPMI) have
                given researchers new targets, new tools, and real momentum.
              </p>
              <p style={{ margin: 0 }}>
                What&apos;s needed now is sustained funding to carry that momentum through
                clinical trials, through validation, and into treatment. That is where
                philanthropy matters. That is where your gift matters.
              </p>
              <p style={{ margin: 0 }}>
                The Michael J. Fox Foundation has identified the most promising research
                pathways and funds them with discipline. We raise funds as a Team Fox group, MJFF&apos;s grassroots fundraising program. Funds raised benefit The Michael J. Fox Foundation for Parkinson&apos;s Research.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                stat: "PPMI",
                label: "Parkinson's Progression Markers Initiative",
                detail: "A landmark longitudinal study identifying biomarkers, the foundation for future treatments.",
              },
              {
                stat: "Alpha-Syn",
                label: "Alpha-synuclein research",
                detail: "Targeting the protein at the center of Parkinson's pathology. Therapeutic approaches are in active clinical trials.",
              },
              {
                stat: "GBA1",
                label: "Gene therapy targets",
                detail: "GBA1 gene therapy is one of the most promising current treatment approaches, with multiple trials underway.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #EDEDF0",
                  borderRadius: 10,
                  padding: "24px 28px",
                  boxShadow: "0 1px 2px rgba(20,33,61,0.04)",
                }}
              >
                <div style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", fontWeight: 700, fontSize: 24, color: "#EDC2C1", lineHeight: 1, marginBottom: 6 }}>
                  {item.stat}
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#000000", marginBottom: 8 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.65, color: "#6B6F7D" }}>
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE YOUR GIFT GOES ── */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            The path from your gift to the lab
          </div>
          <h2
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(26px, 3vw, 38px)",
              lineHeight: 1.2,
              color: "#FFFFFF",
              margin: "0 auto 48px",
              textAlign: "center",
              maxWidth: 560,
            }}
          >
            Direct. Transparent. No detours.
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
            className="path-grid"
          >
            {[
              {
                step: "01",
                title: "You give",
                description:
                  "A gift of any size through chasingacurepd.org, one time or monthly.",
              },
              {
                step: "02",
                title: "We raise funds through Team Fox",
                description:
                  "Chasing a Cure is a Team Fox group, MJFF's grassroots fundraising program. Funds raised benefit The Michael J. Fox Foundation for Parkinson's Research.",
              },
              {
                step: "03",
                title: "The science advances",
                description:
                  "MJFF deploys it to the highest-priority Parkinson's research, vetted, rigorous, and accountable.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  padding: "36px 32px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: i === 0 ? "10px 0 0 10px" : i === 2 ? "0 10px 10px 0" : 0,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRight: i < 2 ? "none" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 40,
                    color: "rgba(255,255,255,0.08)",
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {item.step}
                </div>
                <div style={{ fontWeight: 700, fontSize: 18, color: "#FFFFFF", marginBottom: 12 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER ── */}
      <section style={{ background: "#F6F1E6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6B6F7D",
              marginBottom: 20,
            }}
          >
            Our research partner
          </div>
          <h2
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              lineHeight: 1.2,
              color: "#000000",
              margin: "0 0 20px",
              textWrap: "auto" as const,
            }}
          >
            The Michael J. Fox Foundation<br />for Parkinson&apos;s Research
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "#2B2B2B", margin: "0 0 32px" }}>
            MJFF is the world&apos;s largest private funder of Parkinson&apos;s research.
            We raise funds as a Team Fox group, MJFF&apos;s grassroots fundraising program.
            Since 2006, Team Fox has raised over $185 million for the Foundation. We chose
            MJFF because of their rigor, their transparency, and their singular focus on
            curing Parkinson&apos;s disease.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/donate"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 36px",
                background: "#F98008",
                color: "#fff",
                borderRadius: 6,
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: 17,
                textDecoration: "none",
              }}
            >
              Fuel the Science
            </Link>
            <a
              href="https://www.michaeljfox.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "16px 28px",
                background: "transparent",
                color: "#000000",
                border: "1px solid #DCDDE3",
                borderRadius: 6,
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: 17,
                textDecoration: "none",
              }}
            >
              Visit MJFF
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chasingacurepd.org" },
          { "@type": "ListItem", "position": 2, "name": "The Science", "item": "https://chasingacurepd.org/science" },
        ]
      })}} />

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .sci-boxes { grid-template-columns: 1fr !important; }
          .path-grid { grid-template-columns: 1fr !important; }
          .path-grid > div { border-radius: 8px !important; border-right: 1px solid rgba(255,255,255,0.06) !important; margin-bottom: 2px; }
        }
      `}</style>
    </>
  );
}
