"use client";

import { useState } from "react";

const PRESETS = {
  once:    [50, 100, 250, 500],
  monthly: [10, 25, 50, 100],
};

const DEFAULTS = { once: 100, monthly: 25 };

const IMPACT: Record<string, string> = {
  "once-50":     "Joins thousands of supporters moving the science forward",
  "once-100":    "A direct investment in the research — reaches MJFF with nothing taken off for salaries",
  "once-250":    "A serious investment in the science behind a breakthrough",
  "once-500":    "A major gift — Wendy and Rob will know your name",
  "monthly-10":  "Every month, a steady signal that this matters",
  "monthly-25":  "A recurring gift that gives researchers the predictability to plan",
  "monthly-50":  "$600 a year — the kind of sustained funding that moves trials forward",
  "monthly-100": "Major monthly support — a direct line from you to the lab",
};

const DONATION_URL = "https://www.teamfox.org/give/chasing-a-cure"; // update with actual Team Fox URL

export default function DonationWidget() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selected, setSelected] = useState<number | null>(DEFAULTS.once);
  const [custom, setCustom] = useState("");

  function handleFrequency(f: "once" | "monthly") {
    setFrequency(f);
    setSelected(DEFAULTS[f]);
    setCustom("");
  }

  const amount = custom ? parseFloat(custom) || 0 : selected || 0;
  const impactKey = selected && !custom ? `${frequency}-${selected}` : null;
  const impact = impactKey ? IMPACT[impactKey] : custom ? "Every dollar reaches the research." : null;

  function buildDonationUrl() {
    const base = DONATION_URL;
    const params = new URLSearchParams({
      amount: String(amount),
      frequency,
    });
    return `${base}?${params.toString()}`;
  }

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 16,
        padding: "36px 32px",
        boxShadow: "0 2px 4px rgba(20,33,61,0.06), 0 16px 48px rgba(20,33,61,0.10)",
        border: "1px solid #EDEDF0",
      }}
    >
      {/* Frequency toggle */}
      <div
        style={{
          display: "flex",
          background: "#F7F7F8",
          borderRadius: 8,
          padding: 4,
          marginBottom: 28,
        }}
      >
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            onClick={() => handleFrequency(f)}
            style={{
              flex: 1,
              padding: "10px 0",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: 14,
              transition: "all 150ms ease",
              background: frequency === f ? "#FFFFFF" : "transparent",
              color: frequency === f ? "#000000" : "#6B6F7D",
              boxShadow: frequency === f ? "0 1px 3px rgba(0,0,0,0.12)" : "none",
            }}
          >
            {f === "once" ? "Give Once" : "Give Monthly"}
          </button>
        ))}
      </div>

      {/* Preset amounts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          marginBottom: 14,
        }}
      >
        {PRESETS[frequency].map((amt) => (
          <button
            key={amt}
            onClick={() => {
              setSelected(amt);
              setCustom("");
            }}
            style={{
              padding: "12px 8px",
              border: selected === amt && !custom ? "2px solid #F98008" : "1px solid #DCDDE3",
              borderRadius: 6,
              cursor: "pointer",
              fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 16,
              background: selected === amt && !custom ? "#FFEFDC" : "#FFFFFF",
              color: selected === amt && !custom ? "#F98008" : "#1A1A1A",
              transition: "all 150ms ease",
            }}
          >
            ${amt.toLocaleString()}
          </button>
        ))}
      </div>

      {/* Impact description */}
      {impact && (
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: "#6B6F7D",
            margin: "0 0 16px",
            minHeight: 20,
            fontStyle: "italic",
          }}
        >
          {impact}
        </p>
      )}

      {/* Custom amount */}
      <div style={{ marginBottom: 24, position: "relative" }}>
        <span
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: custom ? "#F98008" : "#B8BAC4",
          }}
        >
          $
        </span>
        <input
          type="number"
          placeholder="Other amount"
          value={custom}
          onChange={(e) => {
            setCustom(e.target.value);
            setSelected(null);
          }}
          style={{
            width: "100%",
            padding: "13px 16px 13px 28px",
            border: custom ? "2px solid #F98008" : "1px solid #DCDDE3",
            borderRadius: 6,
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 16,
            fontWeight: 500,
            outline: "none",
            background: "#FFFFFF",
            color: "#000000",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Donate button */}
      <a
        href={amount > 0 ? buildDonationUrl() : undefined}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          width: "100%",
          padding: "18px 0",
          background: amount > 0 ? "#F98008" : "#DCDDE3",
          color: amount > 0 ? "#FFFFFF" : "#6B6F7D",
          border: "none",
          borderRadius: 6,
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 700,
          fontSize: 17,
          textAlign: "center",
          textDecoration: "none",
          cursor: amount > 0 ? "pointer" : "not-allowed",
          transition: "background 150ms ease",
          letterSpacing: "-0.01em",
          pointerEvents: amount > 0 ? "auto" : "none",
        }}
      >
        {amount > 0
          ? `Donate $${amount.toLocaleString()}${frequency === "monthly" ? "/mo" : ""}`
          : "Select an amount"}
      </a>

      {/* Trust line */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          marginTop: 16,
          fontSize: 12,
          color: "#6B6F7D",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        Secure · No salaries · Directly to Parkinson&apos;s research
      </div>
    </div>
  );
}
