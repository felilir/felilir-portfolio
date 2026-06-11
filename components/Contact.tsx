"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/felilir" },
  { label: "Instagram", href: "https://instagram.com/felilir" },
];

const HorizontalBarcode = () => (
  <svg width="90" height="20" viewBox="0 0 90 20" fill="currentColor" style={{ color: "#0A0A0A" }}>
    <rect x="0" y="0" width="3" height="20" />
    <rect x="5" y="0" width="1" height="20" />
    <rect x="8" y="0" width="2" height="20" />
    <rect x="12" y="0" width="4" height="20" />
    <rect x="18" y="0" width="1" height="20" />
    <rect x="21" y="0" width="3" height="20" />
    <rect x="26" y="0" width="1" height="20" />
    <rect x="29" y="0" width="2" height="20" />
    <rect x="33" y="0" width="5" height="20" />
    <rect x="40" y="0" width="1" height="20" />
    <rect x="43" y="0" width="2" height="20" />
    <rect x="47" y="0" width="3" height="20" />
    <rect x="52" y="0" width="1" height="20" />
    <rect x="55" y="0" width="4" height="20" />
    <rect x="61" y="0" width="2" height="20" />
    <rect x="65" y="0" width="1" height="20" />
    <rect x="68" y="0" width="3" height="20" />
    <rect x="73" y="0" width="1" height="20" />
    <rect x="76" y="0" width="2" height="20" />
    <rect x="80" y="0" width="4" height="20" />
    <rect x="86" y="0" width="1" height="20" />
  </svg>
);

export default function Contact() {
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(!!shouldReduce);

  return (
    <section id="contact" style={{ background: "#0A0A0A", padding: "120px 0" }}>
      <div className="container-xl" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "40px" }}
        >
          {/* Header */}
          <div>
            <p style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#1400FF",
                  letterSpacing: "0.05em",
                }}
              >
                03
              </span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#5A5A5A",
                  letterSpacing: "0.04em",
                }}
              >
                — Contact
              </span>
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: "#F5F5F5", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "16px" }}>
              Have a project
              <br />in mind?
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#5A5A5A", lineHeight: 1.7 }}>
              Whether it&apos;s a brand, a motion piece, or something you haven&apos;t fully figured out yet — let&apos;s talk.
            </p>
          </div>

          {/* WhatsApp Card Button */}
          <motion.a
            href="https://wa.me/56972617870"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.01, boxShadow: "0 12px 32px rgba(110,255,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "#6EFF00",
              color: "#0A0A0A",
              padding: "32px",
              fontFamily: "'Space Grotesk', sans-serif",
              textDecoration: "none",
              minHeight: "220px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              width: "100%",
              cursor: "pointer",
            }}
          >
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                FL—COMMUNICATION SYSTEM
              </div>
              <div style={{ fontSize: "20px", fontWeight: 700 }}>
                ↗
              </div>
            </div>

            {/* Middle row */}
            <div style={{ fontSize: "clamp(24px, 5vw, 40px)", lineHeight: "0.9", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.03em", margin: "24px 0" }}>
              <div>CHAT ON WHATSAPP</div>
              <div style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.05em", color: "rgba(10,10,10,0.6)", marginTop: "8px" }}>
                START A CONVERSATION · AVAILABLE FOR PROJECTS
              </div>
            </div>

            {/* Bottom row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700 }}>+56 9 7261 7870</div>
                <div style={{ fontSize: "9px", color: "rgba(10,10,10,0.5)", marginTop: "2px" }}>HOLAFELILIR@GMAIL.COM</div>
              </div>
              <div>
                <HorizontalBarcode />
              </div>
            </div>
          </motion.a>

          {/* Socials */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#5A5A5A", textDecoration: "none", transition: "color 0.2s ease", fontWeight: 500 }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF3B00")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
