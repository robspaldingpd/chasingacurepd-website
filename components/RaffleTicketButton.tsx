"use client";

import { useState } from "react";

interface Props {
  url: string;
  raffleName: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function RaffleTicketButton({ url, raffleName, style, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} style={{ cursor: "pointer", border: "none", ...style }}>
        {children}
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.55)",
              zIndex: 200,
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 201,
              background: "#FFFFFF",
              borderRadius: 16,
              padding: "40px 36px",
              maxWidth: 420,
              width: "calc(100vw - 48px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#FFEFDC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F98008" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>

            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#F98008",
                marginBottom: 8,
              }}
            >
              Secure checkout
            </div>

            <h3
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: "#000000",
                margin: "0 0 12px",
                lineHeight: 1.2,
              }}
            >
              {raffleName}
            </h3>

            <p style={{ fontSize: 15, lineHeight: 1.65, color: "#6B6F7D", margin: "0 0 28px" }}>
              You&apos;ll be taken to <strong style={{ color: "#000000" }}>RaffleBox</strong>, our
              secure ticketing partner licensed through the{" "}
              <strong style={{ color: "#000000" }}>Indiana Gaming Commission</strong>, to complete
              your purchase. Proceeds fund Parkinson&apos;s research.
            </p>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 28px",
                background: "#F98008",
                color: "#FFFFFF",
                borderRadius: 999,
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                marginBottom: 12,
              }}
            >
              Continue to RaffleBox
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </a>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#6B6F7D",
                fontSize: 14,
                cursor: "pointer",
                padding: "8px 16px",
              }}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </>
  );
}
