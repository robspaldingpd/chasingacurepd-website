"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is my ticket tax-deductible?",
    a: "Chasing a Cure Foundation is a 501(c)(3) nonprofit. Ticket purchases may be partially tax-deductible to the extent permitted by law. For official acknowledgment, contact wendy@chasingacurepd.org.",
  },
  {
    q: "Where is the event?",
    a: "At a private lake home in Fishers, IN on Geist Reservoir. Address and parking instructions will be emailed to RSVPs closer to the date.",
  },
  {
    q: "What if it rains?",
    a: "We have a large tent on-site. Concert for a Cure happens rain or shine.",
  },
  {
    q: "How does the boat raffle work?",
    a: "$100 for 1 ticket, $275 for 3, $400 for 5. Winner drawn live at the event on July 18. You do not need to be present to win.",
  },
];

export default function ConcertFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {FAQS.map((faq, i) => (
        <div
          key={i}
          style={{
            background: "#FFFFFF",
            border: "1px solid #EDEDF0",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "#000000",
                lineHeight: 1.4,
              }}
            >
              {faq.q}
            </span>
            <span
              style={{
                fontSize: 22,
                color: "#EDC2C1",
                fontWeight: 300,
                minWidth: 20,
                textAlign: "center",
                lineHeight: 1,
              }}
            >
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div
              style={{
                padding: "0 24px 20px",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#2B2B2B",
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
