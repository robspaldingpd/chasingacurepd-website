"use client";
import { useState } from "react";

type Phase = "idle" | "opening" | "done";

export default function InviteEnvelopeHero({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("idle");

  const open = () => {
    if (phase !== "idle") return;
    setPhase("opening");
    setTimeout(() => setPhase("done"), 1750); // remove cover from DOM after animation
  };

  const isOpen = phase === "opening" || phase === "done";

  return (
    <div
      style={{
        position: "relative",
        maxWidth: 680,
        margin: "0 auto",
        width: "100%",
        perspective: "1400px",
      }}
    >
      {/* Invitation content — always rendered underneath */}
      {children}

      {/* Replay button — appears after card is fully open */}
      {phase === "done" && (
        <button
          type="button"
          title="Close invitation"
          onClick={() => setPhase("idle")}
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 3,
            color: "rgba(255,255,255,0.4)",
            padding: 0,
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 4v6h6" />
            <path d="M3.51 15a9 9 0 1 0 .49-3.12" />
          </svg>
        </button>
      )}

      {/* Cover — removed from DOM once animation completes */}
      {phase !== "done" && (
        <div
          onClick={open}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            transformOrigin: "0% 50%",
            transform: isOpen ? "rotateY(-180deg)" : "rotateY(0deg)",
            transition: isOpen ? "transform 1.7s cubic-bezier(0.4,0,0.2,1)" : "none",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            zIndex: 2,
            overflow: "hidden",
            background: "linear-gradient(150deg, #100E0B 0%, #1C1811 100%)",
            border: "1px solid rgba(200,160,60,0.2)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(200,160,60,0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "56px 48px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {/* Corner ornaments */}
          {[
            { top: 24, left: 24, bT: true, bL: true },
            { top: 24, right: 24, bT: true, bR: true },
            { bottom: 24, left: 24, bB: true, bL: true },
            { bottom: 24, right: 24, bB: true, bR: true },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: c.top,
                bottom: c.bottom,
                left: c.left,
                right: c.right,
                width: 18,
                height: 18,
                borderTop: c.bT ? "1px solid rgba(200,160,60,0.45)" : undefined,
                borderBottom: c.bB ? "1px solid rgba(200,160,60,0.45)" : undefined,
                borderLeft: c.bL ? "1px solid rgba(200,160,60,0.45)" : undefined,
                borderRight: c.bR ? "1px solid rgba(200,160,60,0.45)" : undefined,
              }}
            />
          ))}

          {/* Top rule */}
          <div style={{ width: 48, height: 1, background: "rgba(200,160,60,0.45)", marginBottom: 28 }} />

          {/* PRIVATE EVENT */}
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: 28,
            }}
          >
            Private Event
          </div>

          {/* By Invitation Only */}
          <div
            style={{
              fontFamily:
                "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(34px, 4.5vw, 54px)",
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              marginBottom: 28,
            }}
          >
            By Invitation
            <br />
            Only.
          </div>

          {/* Bottom rule */}
          <div style={{ width: 48, height: 1, background: "rgba(200,160,60,0.35)", marginBottom: 24 }} />

          {/* 3rd Annual + Concert for a Cure · 2026 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, marginBottom: 36 }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              3rd Annual
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
              }}
            >
              Concert for a Cure &nbsp;·&nbsp; 2026
            </div>
          </div>

          {/* Open button */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); open(); }}
            style={{
              padding: "12px 32px",
              background: "transparent",
              border: "1px solid rgba(200,160,60,0.5)",
              borderRadius: 999,
              color: "#C9A84C",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Open
            <svg
              width="11"
              height="11"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3l5 5-5 5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
