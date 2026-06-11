"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const mobileLinks = [
  { label: "WORK", href: "#work" },
  { label: "SYSTEMS", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkStyle: React.CSSProperties = {
    color: "#5A5A5A",
    textDecoration: "none",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.08em",
    transition: "color 0.2s ease",
    textTransform: "uppercase",
    fontFamily: "'Space Grotesk', sans-serif",
  };

  const hoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLElement).style.color = "#F5F5F5";
  };

  const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    (e.target as HTMLElement).style.color = "#5A5A5A";
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "80px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #1C1C1C" : "1px solid transparent",
        }}
      >
        <div
          className="container-xl"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Desktop Layout (Muga Zero Grid Layout) */}
          <div
            className="hidden md:grid w-full items-center"
            style={{
              gridTemplateColumns: "180px 1.5fr 1fr 1fr 1fr 1fr",
            }}
          >
            {/* Logo (Stacked) */}
            <Link
              href="/"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "0.95",
                color: "#F5F5F5",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
              }}
            >
              <span>FELI</span>
              <span>LIR.</span>
            </Link>

            {/* Spacer Column */}
            <div />

            {/* Links */}
            <a
              href="#work"
              style={linkStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              WORK
            </a>
            <a
              href="#about"
              style={linkStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              ABOUT
            </a>
            <a
              href="#contact"
              style={linkStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              CONTACT
            </a>
            <a
              href="/downloads/CV_Felipe_Lira_EN.pdf"
              download
              style={linkStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              CV
            </a>
          </div>

          {/* Mobile Layout */}
          <div
            className="flex md:hidden items-center justify-between w-full"
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "0.95",
                color: "#F5F5F5",
                textDecoration: "none",
                letterSpacing: "-0.02em",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={closeMenu}
            >
              <span>FELI</span>
              <span>LIR.</span>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#F5F5F5",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#F5F5F5",
                  transition: "opacity 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#F5F5F5",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "#0A0A0A",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {mobileLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                  color: "#F5F5F5",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/downloads/CV_Felipe_Lira_EN.pdf"
              download
              onClick={closeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: mobileLinks.length * 0.08 }}
              style={{
                background: "transparent",
                color: "#F5F5F5",
                border: "1px solid #F5F5F5",
                padding: "12px 28px",
                borderRadius: "0px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                marginTop: "16px",
                transition: "background 0.2s ease, color 0.2s ease",
                letterSpacing: "0.08em",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = "#F5F5F5";
                target.style.color = "#0A0A0A";
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLElement;
                target.style.background = "transparent";
                target.style.color = "#F5F5F5";
              }}
            >
              DOWNLOAD CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
