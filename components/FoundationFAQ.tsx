"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is Chasing a Cure Parkinson's Foundation?",
    a: "Chasing a Cure Parkinson's Foundation is a volunteer-run 501(c)(3) nonprofit based in Fishers, Indiana. Founded in April 2018 by Wendy Chase and Rob Spalding, the foundation raises funds for Parkinson's disease research through The Michael J. Fox Foundation and its Team Fox grassroots fundraising program. Our EIN is 82-5107944.",
  },
  {
    q: "What percentage of my donation goes to research?",
    a: "We keep operating costs to the absolute minimum required to function: event expenses, processing fees, and the basic tools we need to run the foundation. No one draws a salary. Every dollar beyond those bare operating costs funds Parkinson's research through The Michael J. Fox Foundation.",
  },
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. Chasing a Cure Parkinson's Foundation is a registered 501(c)(3) nonprofit organization (EIN 82-5107944). Donations are tax-deductible to the extent permitted by law. You will receive a donation receipt for your records.",
  },
  {
    q: "Why do you partner with The Michael J. Fox Foundation?",
    a: "MJFF is the world's largest private funder of Parkinson's research, having invested more than $2 billion into the field. We chose MJFF because of their scientific rigor, financial transparency, and singular focus on curing Parkinson's disease. Gifts raised through our Team Fox group flow directly to their research programs: the highest-priority, most vetted work in the field.",
  },
  {
    q: "What is Team Fox?",
    a: "Team Fox is the grassroots fundraising community of The Michael J. Fox Foundation. Chasing a Cure is a registered Team Fox group. Funds we raise benefit The Michael J. Fox Foundation for Parkinson's Research directly.",
  },
  {
    q: "Do Wendy or Rob receive a salary?",
    a: "No. Neither Wendy Chase nor Rob Spalding draws a salary. The foundation is entirely volunteer-run. No staff compensation comes from donations.",
  },
  {
    q: "How close is a cure for Parkinson's?",
    a: "Researchers have identified key targets, including alpha-synuclein protein aggregation and GBA1 gene therapy, and multiple clinical trials are currently underway. The Parkinson's Progression Markers Initiative (PPMI), funded in part by MJFF, has created the largest biomarker database in the disease's history. The science is moving faster than at any prior point. Sustained funding is what accelerates the timeline.",
  },
  {
    q: "Can I set up a monthly donation?",
    a: "Yes. Monthly giving is especially valuable because it gives researchers the funding predictability they need to plan multi-year studies. You can set up a recurring gift on our donate page.",
  },
  {
    q: "Where is Chasing a Cure based?",
    a: "Fishers, Indiana. Our mailing address is 11650 Olio Road, Suite 1000-149, Fishers, IN 46037.",
  },
  {
    q: "How do I contact the foundation?",
    a: "Email Wendy directly at wendy@chasingacurepd.org.",
  },
];

export default function FoundationFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
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
                  color: "#A97C7C",
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
    </>
  );
}
