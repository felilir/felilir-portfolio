"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WireframeGlobe = () => (
  <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="0.75" style={{ color: "#0A0A0A", opacity: 0.85 }}>
    <circle cx="32" cy="32" r="28" />
    <ellipse cx="32" cy="32" rx="28" ry="10" />
    <ellipse cx="32" cy="32" rx="28" ry="20" />
    <line x1="4" y1="32" x2="60" y2="32" />
    <ellipse cx="32" cy="32" rx="10" ry="28" />
    <ellipse cx="32" cy="32" rx="20" ry="28" />
    <line x1="32" y1="4" x2="32" y2="60" />
  </svg>
);

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

export default function Hero() {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <section
      id="hero"
      className="halftone-overlay graph-grid-overlay"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundColor: "#0A0A0A",
        overflow: "hidden",
      }}
    >
      {/* Showreel Local Video (Rightmost - Enlarged) */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: "-50%" }}
        animate={{ opacity: 1, x: 0, y: "-50%" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          right: "48px",
          width: "58vw",
          height: "32.625vw", // 16:9 aspect ratio
          border: "1px solid rgba(255, 255, 255, 0.15)",
          overflow: "hidden",
          zIndex: 1,
        }}
        className="hidden md:block"
      >
        <video
          src="/videos/reel.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(100%)",
            transition: "filter 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLVideoElement).style.filter = "grayscale(0%)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLVideoElement).style.filter = "grayscale(100%)";
          }}
        />
        {/* Corner Anchors */}
        <div style={{ position: "absolute", top: "-3px", left: "-3px", width: "6px", height: "6px", backgroundColor: "#F5F5F5", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-3px", right: "-3px", width: "6px", height: "6px", backgroundColor: "#F5F5F5", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-3px", left: "-3px", width: "6px", height: "6px", backgroundColor: "#F5F5F5", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-3px", right: "-3px", width: "6px", height: "6px", backgroundColor: "#F5F5F5", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-3px", left: "50%", transform: "translateX(-50%)", width: "6px", height: "6px", backgroundColor: "#F5F5F5", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-3px", left: "50%", transform: "translateX(-50%)", width: "6px", height: "6px", backgroundColor: "#F5F5F5", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: "-3px", top: "50%", transform: "translateY(-50%)", width: "6px", height: "6px", backgroundColor: "#F5F5F5", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "-3px", top: "50%", transform: "translateY(-50%)", width: "6px", height: "6px", backgroundColor: "#F5F5F5", pointerEvents: "none" }} />
      </motion.div>

      {/* Acid Green Note Block (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "120px",
          right: "48px",
          width: "20vw",
          minWidth: "220px",
          height: "260px",
          backgroundColor: "#6EFF00",
          color: "#0A0A0A",
          padding: "20px",
          fontFamily: "'Space Grotesk', sans-serif",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        }}
        className="hidden md:flex"
      >
        {/* Top: title & wireframe */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: "1.2" }}>
            FL—PORTFOLIO SYSTEM
          </div>
          <div style={{ marginTop: "-8px", marginRight: "-8px" }}>
            <WireframeGlobe />
          </div>
        </div>

        {/* Middle: Available for Work */}
        <div style={{ fontSize: "clamp(22px, 2.3vw, 32px)", lineHeight: "0.9", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.03em" }}>
          <div>AVAILABLE</div>
          <div>FOR WORK</div>
        </div>

        {/* Bottom: details & barcode */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700 }}>FELI LIR™</div>
            <div style={{ fontSize: "9px", color: "rgba(10,10,10,0.5)", marginTop: "2px" }}>HOLAFELILIR@GMAIL.COM</div>
          </div>
          <div>
            <HorizontalBarcode />
          </div>
        </div>
      </motion.div>

      {/* Left aligned Layout Container */}
      <div
        className="absolute left-[24px] md:left-[48px] top-[22vh] z-2 flex flex-col items-start gap-[20px] max-w-[calc(100%-48px)] md:max-w-[calc(100%-96px)]"
      >
        {/* Spacer */}
        <div style={{ height: "4px" }} />

        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: "#5A5A5A",
            textTransform: "uppercase",
            lineHeight: "1.4",
          }}
        >
          <div>SENIOR DESIGNER,</div>
          <div>MOTION + AI-AUGMENTED WORKFLOWS</div>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(64px, 12vw, 190px)",
            color: "#F5F5F5",
            letterSpacing: "-0.06em",
            lineHeight: 0.82,
            margin: 0,
            whiteSpace: "pre-line",
            textTransform: "uppercase",
          }}
        >
          FELI{"\n"}LIR.
        </motion.h1>

        {/* Subheadline (three lines) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "11px",
            color: "#5A5A5A",
            lineHeight: "1.5",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "4px 0 16px 0",
          }}
        >
          <div>SPECIALIZING IN MOTION DESIGN,</div>
          <div>BRAND IDENTITY &amp; AI TOOLS.</div>
          <div>BASED IN CHILE.</div>
        </motion.div>

        {/* Explore Button (Green, hover to White) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#work"
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: isBtnHovered ? "#F5F5F5" : "#6EFF00",
              color: "#0A0A0A",
              border: isBtnHovered ? "1px solid #F5F5F5" : "1px solid #6EFF00",
              padding: "12px 24px",
              width: "220px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition: "background 0.2s ease, border-color 0.2s ease",
            }}
          >
            <span>EXPLORE WORK</span>
            <span style={{ fontSize: "15px", transform: isBtnHovered ? "translate(3px, -3px)" : "none", transition: "transform 0.2s ease" }}>↗</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom copyright footer */}
      <div
        className="absolute bottom-[40px] left-[24px] md:left-[48px] right-[24px] md:right-[48px] flex justify-between items-center z-2"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          color: "#5A5A5A",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span>©2026 FELI LIR ™</span>
        </div>
      </div>
    </section>
  );
}
