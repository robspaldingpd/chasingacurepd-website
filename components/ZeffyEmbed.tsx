"use client";

import { useEffect } from "react";

export default function ZeffyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.zeffy.com/embed/v2/zeffy-embed.js";
    script.onerror = () => {
      document.querySelectorAll("[data-zeffy-embed-fallback]").forEach((el) => {
        (el as HTMLElement).style.display = "block";
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div data-zeffy-embed="" data-form-url="/embed/donation-form/donate-to-find-a-cure-4" />
      <div data-zeffy-embed-fallback="" style={{ display: "none" }}>
        <div style={{ position: "relative", overflow: "hidden", height: 450, width: "100%" }}>
          <iframe
            title="Donation form powered by Zeffy"
            style={{ position: "absolute", border: 0, top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%" }}
            src="https://www.zeffy.com/embed/donation-form/donate-to-find-a-cure-4"
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
}
