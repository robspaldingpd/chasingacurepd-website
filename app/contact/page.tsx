import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Chasing a Cure Parkinson's Foundation",
  description:
    "Get in touch with Chasing a Cure Parkinson's Foundation. Volunteer-run nonprofit funding Parkinson's research through The Michael J. Fox Foundation. EIN 82-5107944.",
  openGraph: {
    title: "Contact | Chasing a Cure Parkinson's Foundation",
    description:
      "Get in touch with Chasing a Cure Parkinson's Foundation. Volunteer-run nonprofit funding Parkinson's research through The Michael J. Fox Foundation.",
    url: "https://chasingacurepd.org/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg, #1A1A1A 0%, #2B2B2B 100%)",
          padding: "140px 24px 80px",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
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
            Get in touch
          </div>
          <h1
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              margin: "0 0 20px",
            }}
          >
            We&apos;d love to hear from you.
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              maxWidth: 500,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Questions about the foundation, events, raffles, or sponsorship? Reach out any time.
          </p>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section style={{ background: "#FDF7F7", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
          className="contact-grid"
        >
          {/* Left: contact info */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B6F7D",
                marginBottom: 24,
              }}
            >
              Contact information
            </div>
            <h2
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(24px, 3vw, 34px)",
                lineHeight: 1.2,
                color: "#000000",
                margin: "0 0 36px",
              }}
            >
              Chasing a Cure<br />Parkinson&apos;s Foundation
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {/* Email */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 6 }}>
                  Email
                </div>
                <a
                  href="mailto:wendy@chasingacurepd.org"
                  style={{ fontSize: 16, color: "#000000", textDecoration: "none", fontWeight: 500 }}
                >
                  wendy@chasingacurepd.org
                </a>
              </div>

              {/* Address */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 6 }}>
                  Mailing address
                </div>
                <p style={{ fontSize: 16, color: "#2B2B2B", lineHeight: 1.6, margin: 0 }}>
                  11650 Olio Road, Suite 1000-149<br />
                  Fishers, IN 46037
                </p>
              </div>

              {/* EIN */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 6 }}>
                  Tax ID / EIN
                </div>
                <p style={{ fontSize: 16, color: "#2B2B2B", margin: 0 }}>
                  82-5107944
                </p>
              </div>

              {/* Legal name */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 6 }}>
                  Legal name
                </div>
                <p style={{ fontSize: 16, color: "#2B2B2B", margin: 0 }}>
                  Chasing a Cure Parkinson&apos;s Foundation
                </p>
              </div>

              {/* Status */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A97C7C", marginBottom: 6 }}>
                  Status
                </div>
                <p style={{ fontSize: 16, color: "#2B2B2B", margin: 0 }}>
                  501(c)(3) public charity · Indiana nonprofit corporation
                </p>
              </div>
            </div>
          </div>

          {/* Right: about + donate CTA */}
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B6F7D",
                marginBottom: 24,
              }}
            >
              About the foundation
            </div>
            <h2
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(22px, 2.5vw, 30px)",
                lineHeight: 1.3,
                color: "#000000",
                margin: "0 0 20px",
              }}
            >
              Volunteer-run. No salaries. Every dollar funds the science.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#2B2B2B", margin: "0 0 20px" }}>
              Chasing a Cure Parkinson&apos;s Foundation is a 100% volunteer-run 501(c)(3) nonprofit
              based in Fishers, Indiana. We were founded in April 2018 to fund the science behind
              breakthroughs for Parkinson&apos;s disease through Team Fox and The Michael J. Fox
              Foundation for Parkinson&apos;s Research.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "#2B2B2B", margin: "0 0 36px" }}>
              No one on our team draws a salary. We keep operating costs to the minimum required
              to function. Funds raised go directly to Parkinson&apos;s research, the world&apos;s
              most urgent unsolved neurological problem.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link
                href="/donate"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "#F98008",
                  color: "#FFFFFF",
                  borderRadius: 999,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                Donate to the Foundation
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </Link>
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "transparent",
                  color: "#000000",
                  borderRadius: 999,
                  border: "1.5px solid rgba(0,0,0,0.15)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://chasingacurepd.org" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://chasingacurepd.org/contact" },
            ],
          }),
        }}
      />

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
