"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/science", label: "The Science" },
  { href: "/concert", label: "Concert for a Cure" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "rgba(253,247,247,0.92)"
    : "rgba(20,33,61,0.0)";
  const navBorder = scrolled
    ? "1px solid rgba(0,0,0,0.07)"
    : "1px solid rgba(255,255,255,0.10)";
  const linkColor = scrolled ? "#1A1A1A" : "rgba(255,255,255,0.88)";
  const subColor = scrolled ? "#E87300" : "#EDC2C1";
  const wordmarkColor = scrolled ? "#000000" : "#FFFFFF";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: navBg,
        backdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.2)" : "none",
        borderBottom: navBorder,
        transition: `background ${300}ms ease, border-color 300ms ease, backdrop-filter 300ms ease`,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image
            src="/logo.png"
            alt="Chasing a Cure Parkinson's Foundation"
            width={44}
            height={44}
            style={{ borderRadius: "50%" }}
            priority
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 16,
                color: wordmarkColor,
                letterSpacing: "-0.02em",
                transition: "color 300ms ease",
              }}
            >
              Chasing a Cure
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: subColor,
                marginTop: 7,
                transition: "color 300ms ease",
              }}
            >
              Parkinson&apos;s Foundation
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                color: linkColor,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
                transition: "color 120ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F98008")}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/donate"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "11px 22px",
              marginLeft: 8,
              borderRadius: 999,
              background: "#F98008",
              color: "#fff",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              transition: "background 120ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E87300")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#F98008")}
          >
            Donate
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: scrolled ? "#000" : "#fff",
          }}
          className="show-mobile"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "rgba(253,247,247,0.97)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            padding: "12px 24px 24px",
          }}
        >
          {[...links, { href: "/donate", label: "Donate" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                color: link.href === "/donate" ? "#F98008" : "#1A1A1A",
                fontFamily: "var(--font-sans)",
                fontWeight: link.href === "/donate" ? 700 : 500,
                fontSize: 16,
                textDecoration: "none",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
