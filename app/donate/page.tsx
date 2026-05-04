import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Donate | Chasing a Cure Parkinson's Foundation",
  description:
    "Fund Parkinson's research through the Michael J. Fox Foundation. Volunteer-run, no salaries. Every gift goes to the science.",
  openGraph: {
    title: "Donate | Chasing a Cure Parkinson's Foundation",
    description:
      "Fund Parkinson's research through the Michael J. Fox Foundation. Volunteer-run, no salaries. Every gift goes to the science.",
    url: "https://chasingacurepd.org/donate",
  },
};

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div
        style={{
          width: 40,
          height: 40,
          minWidth: 40,
          borderRadius: "50%",
          background: "#F98008",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          color: "#FFFFFF",
        }}
      >
        {number}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            color: "#000000",
            marginBottom: 6,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.65, color: "#2B2B2B" }}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default function DonatePage() {
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
            Fuel the science
          </div>
          <h1
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.1,
              color: "#FFFFFF",
              margin: "0 0 20px",
              textWrap: "auto" as const,
            }}
          >
            Your gift flows directly<br />to the research.
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              maxWidth: 520,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            No salaries. No paid staff. Donations fund Parkinson&apos;s research
            through The Michael J. Fox Foundation and Team Fox —
            the world&apos;s leading private funder.
          </p>
        </div>
      </section>

      {/* ── DONATION WIDGET + HOW IT WORKS ── */}
      <section style={{ background: "#FDF7F7", padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="donate-grid"
        >
          <div>
            <div data-zeffy-embed="" data-form-url="/embed/donation-form/donate-to-find-a-cure-4" />
            <div data-zeffy-embed-fallback="" style={{ display: "none" }}>
              <div style={{ position: "relative", overflow: "hidden", height: 450, width: "100%" }}>
                <iframe
                  title="Donation form powered by Zeffy"
                  style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
                  src="https://www.zeffy.com/embed/donation-form/donate-to-find-a-cure-4"
                />
              </div>
            </div>
            <Script src="https://www.zeffy.com/embed/v2/zeffy-embed.js" strategy="lazyOnload" />
          </div>

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
              How it works
            </div>
            <h2
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(24px, 3vw, 36px)",
                lineHeight: 1.2,
                color: "#000000",
                margin: "0 0 36px",
              }}
            >
              We fund the science behind breakthroughs.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <Step
                number="1"
                title="Your gift"
                description="Any amount makes a difference. Monthly gifts compound over time and give researchers the predictability they need to plan long-term studies."
              />
              <Step
                number="2"
                title="Chasing a Cure"
                description="We direct it to The Michael J. Fox Foundation and Team Fox. We keep operating costs to the bare minimum required to function, no one draws a salary."
              />
              <Step
                number="3"
                title="MJFF / Team Fox"
                description="The world's leading private funder of Parkinson's research deploys it to the highest-priority work, vetted, rigorous, and accountable."
              />
            </div>

            {/* Promise box */}
            <div
              style={{
                background: "#FFEFDC",
                border: "1px solid rgba(249,128,8,0.2)",
                borderRadius: 10,
                padding: "24px 28px",
                marginTop: 40,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F98008",
                  marginBottom: 10,
                }}
              >
                Our giving promise
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#2B2B2B", margin: 0 }}>
                Donations go directly to Parkinson&apos;s research through The Michael J. Fox
                Foundation and Team Fox. We keep operating costs to the bare minimum required
                to run the foundation, event expenses, processing fees, and the tools we need
                to function.{" "}
                <strong>No one draws a salary. Everything else funds the science.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT AT A GLANCE ── */}
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
              marginBottom: 48,
            }}
          >
            What your gift does
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
            className="impact-grid"
          >
            {[
              { amount: "$50",  impact: "Joins thousands of supporters moving the science forward" },
              { amount: "$100", impact: "A direct investment — reaches MJFF with nothing taken off for salaries" },
              { amount: "$250", impact: "A serious investment in the science behind a breakthrough" },
              { amount: "$500", impact: "A major gift — Wendy and Rob will know your name" },
            ].map((item) => (
              <div
                key={item.amount}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  padding: "28px 24px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 32,
                    color: "#F98008",
                    marginBottom: 12,
                  }}
                >
                  {item.amount}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.65)" }}>
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WENDY'S ASK ── */}
      <section style={{ background: "#F6F1E6", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: 60, alignItems: "center" }} className="wendy-quote-grid">
          <div style={{ position: "relative", height: 320, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
            <Image
              src="/photos/wendy-speaking-at-lake.jpg"
              alt="Wendy Chase"
              fill
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
            />
          </div>
          <blockquote style={{ margin: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                lineHeight: 1.5,
                color: "#000000",
                margin: "0 0 24px",
              }}
            >
              &ldquo;Ten million people around the world are living with Parkinson&apos;s disease
              right now. Ninety thousand more will be diagnosed this year. And today, there is
              still no cure. Not yet. The science is moving. Whether the breakthrough arrives
              in five years or fifteen depends, in part, on whether it gets funded.
              That is what your gift does.&rdquo;
            </p>
            <footer style={{ fontSize: 14, color: "#6B6F7D" }}>
             Wendy Chase, Co-Founder
            </footer>
          </blockquote>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .donate-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .impact-grid { grid-template-columns: 1fr 1fr !important; }
          .wendy-quote-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .wendy-quote-grid > div:first-child { height: 240px !important; }
        }
        @media (max-width: 500px) {
          .impact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
