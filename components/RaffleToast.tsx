"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

/**
 * Bottom-right slide-in promoting the Concert for a Cure boat raffle.
 * - Appears ~2s after load so it isn't the first thing seen.
 * - Dismissal is remembered in localStorage.
 * - Auto-hides after the concert/drawing date so it can never go stale.
 */

const STORAGE_KEY = "ccpd_boat_raffle_toast_dismissed";
// Drawing is at Concert for a Cure on July 18, 2026. Stop showing after that day.
const EXPIRES = new Date("2026-07-19T00:00:00-04:00");
const SHOW_DELAY_MS = 2000;

export default function RaffleToast() {
  const [mounted, setMounted] = useState(false); // in the DOM
  const [visible, setVisible] = useState(false); // transitioned in
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (new Date() >= EXPIRES) return;
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // localStorage unavailable (private mode) — still show, just won't persist dismissal
    }

    const showTimer = setTimeout(() => {
      setReducedMotion(
        typeof window !== "undefined" &&
          window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
      );
      setMounted(true);
      trackEvent("raffle_toast_shown", { raffle: "Boat Raffle" });
    }, SHOW_DELAY_MS);

    return () => clearTimeout(showTimer);
  }, []);

  // Flip to visible one frame after mount so the slide-in transition plays.
  useEffect(() => {
    if (!mounted) return;
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [mounted]);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    // unmount after the exit transition
    setTimeout(() => setMounted(false), reducedMotion ? 0 : 320);
  }

  if (!mounted) return null;

  return (
    <div
      role="region"
      aria-label="Concert for a Cure boat raffle"
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 150,
        width: 520,
        maxWidth: "calc(100vw - 32px)",
        background: "#FFFFFF",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 28px 64px -18px rgba(20,33,61,0.5)",
        transform: visible ? "translateY(0)" : "translateY(28px)",
        opacity: visible ? 1 : 0,
        transition: reducedMotion
          ? "none"
          : "transform 0.32s cubic-bezier(0.16,1,0.3,1), opacity 0.32s ease",
      }}
    >
      {/* Close */}
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          position: "absolute",
          top: 14,
          right: 16,
          zIndex: 2,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "none",
          background: "rgba(0,0,0,0.4)",
          color: "#FFFFFF",
          fontSize: 22,
          lineHeight: 1,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ×
      </button>

      {/* Boat photo */}
      <div style={{ position: "relative", height: 210, background: "#2f6fae" }}>
        <Image
          src="/photos/raffle-boat-new.webp"
          alt=""
          fill
          sizes="520px"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
        <span
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            background: "#F98008",
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            padding: "7px 15px",
            borderRadius: 999,
          }}
        >
          Boat Raffle
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "26px 30px 28px" }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#A97C7C",
            marginBottom: 10,
          }}
        >
          Concert for a Cure
        </div>
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 30,
            lineHeight: 1.15,
            color: "#000000",
            margin: "0 0 8px",
          }}
        >
          Win a $25,000 boat
        </h4>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "#6B6F7D", margin: "0 0 22px" }}>
          A Starcraft Ski Champ from Indy Boat&nbsp;Co. Every ticket funds the cure.
        </p>
        <Link
          href="/concert#raffle"
          onClick={() => {
            // Track the click but do NOT persist a dismissal — navigating to the
            // raffle unmounts the toast anyway, and it should return on later visits.
            trackEvent("raffle_toast_clicked", { raffle: "Boat Raffle" });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            width: "100%",
            padding: "17px 0",
            background: "#F98008",
            color: "#FFFFFF",
            borderRadius: 999,
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: 18,
            textDecoration: "none",
          }}
        >
          Buy raffle tickets
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3l5 5-5 5" />
          </svg>
        </Link>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.5,
            color: "#9A939C",
            textAlign: "center",
            margin: "16px 0 0",
          }}
        >
          Must physically be in the state of Indiana to purchase
        </p>
        <p
          style={{
            fontSize: 12,
            lineHeight: 1.5,
            color: "#9A939C",
            textAlign: "center",
            margin: "4px 0 0",
          }}
        >
          Indiana Charity Gaming License Number 018323
        </p>
      </div>
    </div>
  );
}
