"use client";

import Image from "next/image";

import { motion, useReducedMotion } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";

const tools = [
  "After Effects", "Illustrator", "Photoshop",
  "Figma", "Higgsfield", "Premiere",
  "Midjourney", "Google Antigravity", "Cursor",
  "Claude Ecosystem", "Affinity", "Framer",
];

const clients = ["Enel Chile", "Té Supremo", "Findie", "Bolsa de Santiago", "DuocUC", "Universidad del Desarrollo", "Arauco", "Tironi"];

export default function About() {
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(!!shouldReduce);

  return (
    <section
      id="about"
      className="halftone-overlay"
      style={{ background: "#0A0A0A", padding: "120px 0" }}
    >
      <div className="container-xl">
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
        >
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
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
                02
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
                — About
              </span>
            </p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(36px, 4vw, 52px)", color: "#F5F5F5", letterSpacing: "-0.03em", lineHeight: 0.95 }}>
              Design is how
              <br />I think.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "I'm Felipe Lira, a graphic designer and motion specialist where visual craft meets technical curiosity. Over 8 years, I've developed a practice that lives at the intersection of brand strategy, motion design, and digital communication — turning complex ideas into visuals that land.",
                "What drives my work isn't the tools — it's outcomes. Every project starts with a question: what does this need to communicate, and to whom? From there, the craft follows. Whether it's a brand identity system or a 60-second explainer, the standard is the same: clear, intentional, and built to last.",
                "Currently expanding into AI-assisted design workflows, generative tools, and remote-first collaboration models. Available for freelance projects and open to creative director or senior designer roles at studios and agencies worldwide.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: "#F5F5F5", lineHeight: 1.75 }}>
                  {p}
                </p>
              ))}
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="/downloads/CV_Felipe_Lira_EN.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid #5A5A5A",
                  color: "#F5F5F5",
                  padding: "12px 24px",
                  borderRadius: "0px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  background: "transparent",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.background = "#F5F5F5";
                  target.style.color = "#0A0A0A";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.background = "transparent";
                  target.style.color = "#F5F5F5";
                }}
              >
                Download CV (EN)
              </a>
              <a
                href="/downloads/CV_Felipe_Lira_ES.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid #5A5A5A",
                  color: "#F5F5F5",
                  padding: "12px 24px",
                  borderRadius: "0px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  textDecoration: "none",
                  background: "transparent",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.background = "#F5F5F5";
                  target.style.color = "#0A0A0A";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement;
                  target.style.background = "transparent";
                  target.style.color = "#F5F5F5";
                }}
              >
                Descargar CV (ES)
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            {/* Photo Collage */}
            <div
              style={{
                width: "100%",
                maxWidth: "540px",
                aspectRatio: "1 / 1",
                position: "relative",
                margin: "0 auto",
              }}
              className="about-collage-container"
            >
              {/* Photo 1: Forest Sitting */}
              <div
                style={{
                  position: "absolute",
                  top: "2%",
                  left: "0%",
                  width: "29.63%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <img
                  src="/images/about/1.png"
                  alt="Felipe - Forest Sitting"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Photo 2: Thumbs Up */}
              <div
                style={{
                  position: "absolute",
                  top: "12%",
                  left: "18%",
                  width: "22.22%",
                  aspectRatio: "508 / 651",
                  overflow: "hidden",
                  zIndex: 2,
                }}
              >
                <img
                  src="/images/about/2.png"
                  alt="Felipe - Thumbs Up"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Photo 3: Forest Walk */}
              <div
                style={{
                  position: "absolute",
                  top: "0%",
                  right: "18%",
                  width: "21.3%",
                  aspectRatio: "536 / 1207",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <img
                  src="/images/about/3.png"
                  alt="Felipe - Walking in Forest"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Photo 4: Binoculars */}
              <div
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "3%",
                  width: "35.19%",
                  aspectRatio: "1253 / 643",
                  overflow: "hidden",
                  zIndex: 3,
                }}
              >
                <img
                  src="/images/about/4.png"
                  alt="Felipe - Looking with Binoculars"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Photo 5: Hugging Penguin */}
              <div
                style={{
                  position: "absolute",
                  top: "22%",
                  right: "0%",
                  width: "26.85%",
                  aspectRatio: "799 / 1419",
                  overflow: "hidden",
                  zIndex: 2,
                }}
              >
                <img
                  src="/images/about/5.png"
                  alt="Felipe - Hugging Penguin"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Main Photo: Grayscale Portrait (Front - Enlarged & Borderless) */}
              <div
                className="about-photo-wrap"
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "90%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  border: "none",
                  zIndex: 5,
                }}
              >
                <img
                  src="/images/about/Foto de Perfil 1.png"
                  alt="Felipe Lira — Portrait"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "grayscale(100%)",
                    transition: "filter 0.4s ease",
                  }}
                  className="about-photo-img"
                />
              </div>
            </div>

            {/* Tools grid */}
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#5A5A5A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Tools &amp; Software
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[8px]">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    style={{
                      background: "#1C1C1C",
                      borderRadius: "0px",
                      padding: "10px 12px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "13px",
                      color: "#F5F5F5",
                      fontWeight: 500,
                      transition: "background 0.2s ease, color 0.2s ease",
                      cursor: "default",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.background = "#1400FF";
                      target.style.color = "#F5F5F5";
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.background = "#1C1C1C";
                      target.style.color = "#F5F5F5";
                    }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Clients strip */}
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "#5A5A5A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Notable Clients
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 700, color: "#6EFF00", lineHeight: "1.4" }}>
                {clients.map((client, i) => (
                  <span key={client} style={{ display: "inline-flex", alignItems: "center" }}>
                    {client}
                    {i < clients.length - 1 && (
                      <span style={{ color: "#5A5A5A", marginLeft: "18px", fontSize: "12px", verticalAlign: "middle" }}>■</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        .about-photo-wrap:hover .about-photo-img {
          filter: grayscale(0%) !important;
        }
      `}</style>
    </section>
  );
}
