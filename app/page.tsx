import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chasing a Cure Parkinson's Foundation",
  description:
    "Volunteer-run foundation funding Parkinson's research through the Michael J. Fox Foundation. Based in Fishers, Indiana.",
  openGraph: {
    title: "Chasing a Cure Parkinson's Foundation",
    description:
      "Volunteer-run. No salaries. Funds raised benefit The Michael J. Fox Foundation for Parkinson's Research.",
    url: "https://chasingacurepd.org",
    images: [{ url: "/photos/concert-group-2024.jpg", width: 1200, height: 630, alt: "Chasing a Cure Parkinson's Foundation — Concert for a Cure 2024" }],
  },
};

/* ── Stat ── */
function Stat({ number, label, accent }: { number: string; label: string; accent?: boolean }) {
  return (
    <div style={{ textAlign: "center", padding: "0 12px" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(36px, 4.5vw, 56px)",
          color: accent ? "#F98008" : "#FFFFFF",
          lineHeight: 1,
          marginBottom: 10,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.5,
          maxWidth: 120,
          margin: "0 auto",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Three-step flow card ── */
function FlowStep({ n, title, body }: { n: string; title: string; body: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
      <div
        style={{
          width: 36,
          height: 36,
          minWidth: 36,
          borderRadius: "50%",
          background: "#FFEFDC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 15,
          color: "#F98008",
        }}
      >
        {n}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 15, color: "#000", marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 14, lineHeight: 1.65, color: "#6B6F7D" }}>{body}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 24px 80px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('/photos/concert-group-2024.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        {/* Strong dark overlay, indoor photo needs uniform darkening for text legibility */}
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.60) 45%, rgba(8,8,8,0.35) 75%, rgba(8,8,8,0.15) 100%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>

          {/* Text, left-aligned, max-width keeps it away from the photo area */}
          <div style={{ maxWidth: 680 }}>
            {/* Eyebrow pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginBottom: 20,
                padding: "8px 20px",
                background: "#F98008",
                borderRadius: 999,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF" }}>
                Volunteer-run · Research-first
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#FFFFFF", margin: "0 0 6px" }}>
              Built from love.
            </h1>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#FFFFFF", margin: "0 0 6px" }}>
              Backed by science.
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 5.5vw, 68px)", lineHeight: 1.02, letterSpacing: "-0.03em", color: "#F98008", margin: "0 0 20px" }}>
              Focused on the cure.
            </div>

            <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.6, color: "#FFFFFF", margin: "0 0 32px", maxWidth: 520 }}>
              Volunteer-run. No salaries. Funds raised benefit The Michael J. Fox Foundation for Parkinson&apos;s Research.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="/donate"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 36px", background: "#F98008", color: "#fff", borderRadius: 999, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, textDecoration: "none", letterSpacing: "-0.01em" }}
              >
                Donate now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </Link>
              <Link
                href="/about"
                style={{ display: "inline-flex", alignItems: "center", padding: "15px 28px", background: "#FFFFFF", color: "#111111", borderRadius: 999, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, textDecoration: "none" }}
              >
                Our story
              </Link>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 52 }}>
              {[
                { icon: "🔬", text: "MJFF / Team Fox partner" },
                { icon: "🙌", text: "No paid staff. No salaries." },
                { icon: "✅", text: "501(c)(3) · EIN 82-5107944" },
              ].map((b) => (
                <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 16px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 8, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>
                  <span style={{ fontSize: 16 }}>{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          MISSION, "We fund the science behind breakthroughs."
          (messaging guide §13 homepage mission section)
      ══════════════════════════ */}
      <section style={{ background: "var(--ccpd-pink-50)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
            className="mission-grid"
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ccpd-gray-500)", marginBottom: 16 }}>
                Our purpose
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(30px, 3.5vw, 46px)",
                  lineHeight: 1.12,
                  color: "#000",
                  margin: "0 0 24px",
                }}
              >
                We fund the science behind&nbsp;breakthroughs.
              </h2>
              {/* Urgency block, verbatim from messaging guide §9G */}
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--ccpd-ink-700)", margin: "0 0 20px", maxWidth: 520 }}>
                According to the Michael J. Fox Foundation, approximately 10 million people around
                the world are living with Parkinson&apos;s disease right now — nearly 1 million in the
                United States alone. And today, there is still no cure. Not yet.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--ccpd-ink-700)", margin: "0 0 36px", maxWidth: 520 }}>
                The science is moving. Whether the breakthrough arrives in five years or fifteen
                depends, in part, on whether it gets funded. That is what your gift does.
              </p>
              <Link
                href="/donate"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#F98008",
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  borderBottom: "2px solid #F98008",
                  paddingBottom: 2,
                }}
              >
                Fuel the science
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </Link>
            </div>

            {/* Three anchor lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { line: "Science fuels hope.", border: true },
                { line: "We fund the science behind breakthroughs.", border: true },
                { line: "Funds raised benefit The Michael J. Fox Foundation.", border: false },
              ].map((item) => (
                <div
                  key={item.line}
                  style={{
                    padding: "28px 32px",
                    borderBottom: item.border ? "1px solid var(--ccpd-gray-100)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: "clamp(18px, 2vw, 24px)",
                      lineHeight: 1.35,
                      color: "#000",
                      margin: 0,
                    }}
                  >
                    {item.line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          STATS, "The math of urgency"
      ══════════════════════════ */}
      <section style={{ background: "#111111", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", textAlign: "center", marginBottom: 44 }}>
            The math of urgency
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="stats-grid">
            <Stat number="10M" label="People worldwide with Parkinson's" />
            <Stat number="1M" label="People in the United States" />
            <Stat number="90K" label="New U.S. diagnoses every year" />
            <Stat number="0" label="Cures" accent />
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          STORY, "A promise, kept."
          (messaging guide §13 story section)
      ══════════════════════════ */}
      <section style={{ background: "var(--ccpd-pink-50)", padding: "96px 24px" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="story-grid"
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ccpd-gray-500)", marginBottom: 16 }}>
              Our why
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(28px, 3.5vw, 46px)",
                lineHeight: 1.12,
                color: "#000",
                margin: "0 0 28px",
              }}
            >
              A promise, kept.
            </h2>
            {/* Story body, from messaging guide §13 homepage story section */}
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--ccpd-ink-700)", margin: "0 0 20px", maxWidth: 520 }}>
              On Christmas morning 2017, our co-founder Wendy faced a truth no daughter wants
              to face: she could not save her mother Sue, despite extraordinary doctors, every
              treatment available, and decades of industry expertise brought to bear.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--ccpd-ink-700)", margin: "0 0 20px", maxWidth: 520 }}>
              Unable to think of a gift that might bring her mother hope, she made a different
              kind of decision. Chasing a Cure Parkinson&apos;s Foundation was founded four months
              later. Sue passed away in December 2018. This foundation is her legacy, and the
              promise we make to every family still waiting.
            </p>

            <blockquote style={{ borderLeft: "3px solid #F98008", paddingLeft: 24, margin: "32px 0" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(19px, 2vw, 24px)",
                  lineHeight: 1.5,
                  color: "#000",
                  margin: "0 0 10px",
                  textWrap: "auto" as const,
                }}
              >
                &ldquo;My mom fought with everything she had. Her miracle<br />didn&apos;t come. Let&apos;s be somebody else&apos;s.&rdquo;
              </p>
              <cite style={{ fontSize: 13, color: "var(--ccpd-gray-500)", fontStyle: "normal" }}>
               Wendy Chase, co-founder
              </cite>
            </blockquote>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#F98008",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                borderBottom: "2px solid #F98008",
                paddingBottom: 2,
              }}
            >
              Read the full story
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </Link>
          </div>

          {/* Mission editorial card */}
          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 16,
              padding: "52px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 360,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Large decorative opening quote */}
            <div
              aria-hidden
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 220,
                lineHeight: 1,
                color: "rgba(249,128,8,0.12)",
                position: "absolute",
                top: -24,
                left: 32,
                userSelect: "none",
              }}
            >
              &ldquo;
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F98008", marginBottom: 28 }}>
                Our mission
              </div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(22px, 2.2vw, 30px)",
                  lineHeight: 1.45,
                  color: "#FFFFFF",
                  margin: "0 0 36px",
                }}
              >
                To fund the science that ends Parkinson&apos;s disease, and keep the promise we made to every family still waiting.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", flexShrink: 0, position: "relative" }}>
                  <Image
                    src="/photos/wendy-portrait.png"
                    alt="Wendy Chase"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>Wendy Chase</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>Co-Founder, Chasing a Cure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          PARTNER BLOCK, MJFF / Team Fox
          (from design system PartnerBlock.jsx)
      ══════════════════════════ */}
      <section style={{ background: "#1A1A1A", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
              padding: "56px 56px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 48,
              alignItems: "center",
            }}
            className="partner-card"
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F98008", marginBottom: 20 }}>
                Research partner
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(24px, 3vw, 38px)",
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                  margin: "0 0 20px",
                  maxWidth: 640,
                }}
              >
                Funds raised benefit <em>The Michael J. Fox Foundation for Parkinson&apos;s Research.</em>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.6)", margin: "0 0 28px", maxWidth: 600 }}>
                No one at Chasing a Cure draws a salary, not Wendy, not Rob, not a single
                board member. We keep operating costs to the bare minimum a foundation legally
                requires: event expenses, processing fees, and the tools we need to function.
                Funds we raise go to MJFF through Team Fox, MJFF&apos;s grassroots fundraising
                program, the most rigorous Parkinson&apos;s research engine in the world.
              </p>
              <a
                href="https://www.michaeljfox.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#F98008",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                About MJFF
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minWidth: 220,
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                paddingLeft: 40,
              }}
            >
              {[
                {
                  label: "The Michael J. Fox Foundation (MJFF)",
                  detail: "The recipient. World's largest private funder of Parkinson's research.",
                },
                {
                  label: "Team Fox",
                  detail: "MJFF's grassroots fundraising program. $185M+ raised for MJFF since 2006.",
                },
                {
                  label: "Chasing a Cure Foundation",
                  detail: "A Team Fox group. Fully volunteer-run. Funds we raise go directly to MJFF.",
                },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>{item.label}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.45)" }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          WENDY'S CONVICTION
      ══════════════════════════ */}
      <section style={{ background: "var(--ccpd-cream-100)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ccpd-gray-500)", marginBottom: 32 }}>
            From Wendy
          </div>
          <blockquote style={{ margin: 0 }}>
            <p
              className="wendy-quote"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.6vw, 30px)",
                lineHeight: 1.5,
                color: "#000",
                margin: "0 0 24px",
                textWrap: "auto" as const,
              }}
            >
              &ldquo;Awareness is not what families are begging for at 3 a.m. in a hospital room. A cure is what families deserve. I don&apos;t want your pity. I want your partnership.&rdquo;
            </p>
            <footer style={{ fontSize: 14, color: "var(--ccpd-gray-500)", fontStyle: "normal" }}>
              Wendy Chase · Co-Founder, Chasing a Cure Parkinson&apos;s Foundation
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ══════════════════════════
          DONATION WIDGET
      ══════════════════════════ */}
      <section id="donate" style={{ background: "var(--ccpd-pink-50)", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="donate-grid">
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ccpd-gray-500)", marginBottom: 16 }}>
                Fuel the science
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.12, color: "#000", margin: "0 0 24px" }}>
                Funds raised benefit<br />The Michael J.&nbsp;Fox Foundation.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--ccpd-ink-700)", margin: "0 0 40px", maxWidth: 480 }}>
                No salaries. No paid staff. Just the science.
              </p>

              {/* Three-step flow, messaging guide §9F */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <FlowStep
                  n="1"
                  title="You donate to Chasing a Cure Foundation."
                  body={<>Any amount. One-time or monthly, a monthly gift means<br />research doesn&apos;t stop between&#160;events.</>}
                />
                <FlowStep
                  n="2"
                  title="We cover only what's required to operate."
                  body={<>Event costs, processing fees, basic tools. No salaries.<br />The founders don&apos;t draw&#160;a&#160;dime.</>}
                />
                <FlowStep
                  n="3"
                  title="Funds raised benefit The Michael J. Fox Foundation."
                  body="Through Team Fox, MJFF's grassroots fundraising program, donations go directly to the world's leading private funder of Parkinson's&#160;research."
                />
              </div>
            </div>
            <div>
              <div data-zeffy-embed="" data-form-url="/embed/donation-form/donate-to-find-a-cure-4" />
              <div data-zeffy-embed-fallback="" style={{ display: "none" }}>
                <iframe
                  title="Donation form powered by Zeffy"
                  style={{ border: 0, width: "100%", height: 560, display: "block" }}
                  src="https://www.zeffy.com/embed/donation-form/donate-to-find-a-cure-4"
                  allow="payment"
                />
              </div>
              <Script src="https://www.zeffy.com/embed/v2/zeffy-embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════
          CONCERT CALLOUT
      ══════════════════════════ */}
      <section style={{ position: "relative", padding: "80px 24px", overflow: "hidden", backgroundImage: "url('/photos/geist-golden-hour-balloon.jpg')", backgroundSize: "cover", backgroundPosition: "center 60%" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(220,90,0,0.72)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap", position: "relative" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.90)", marginBottom: 12 }}>
              Upcoming event
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 44px)", lineHeight: 1.05, color: "#FFF", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              Concert for a Cure 2026
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#FFFFFF", margin: 0, maxWidth: 500 }}>
              {/* From messaging guide §10E */}
              An evening at the lake, live music, good company, and one shared purpose. Every
              ticket, every paddle raised, every raffle ticket. Funds raised benefit The Michael J. Fox Foundation for Parkinson&apos;s Research. Come because it&apos;s a great night.
              Stay because it matters.
            </p>
          </div>
          <Link
            href="/concert"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 32px",
              background: "#FFFFFF",
              color: "#F98008",
              borderRadius: 999,
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Learn more
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .mission-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .story-grid   { grid-template-columns: 1fr !important; gap: 40px !important; }
          .donate-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
          .partner-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .wendy-quote { font-size: 17px !important; }
        }
      `}</style>
    </>
  );
}
