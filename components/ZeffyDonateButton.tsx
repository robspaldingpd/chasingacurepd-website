"use client";

import { useState } from "react";

export default function ZeffyDonateButton({ label = "Donate now", style }: { label?: string; style?: React.CSSProperties }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} style={style}>
        {label}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}>
          <path d="M6 3l5 5-5 5" />
        </svg>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: 16, overflow: "hidden", width: "100%", maxWidth: 540, position: "relative" }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.08)", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 18, lineHeight: 1, zIndex: 1 }}
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src="https://www.zeffy.com/embed/donation-form/donate-to-find-a-cure-4"
              style={{ border: 0, width: "100%", height: 600, display: "block" }}
              allow="payment"
              title="Donate to Chasing a Cure"
            />
          </div>
        </div>
      )}
    </>
  );
}
