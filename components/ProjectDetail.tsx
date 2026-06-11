"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";
import VideoHero from "./VideoHero";
import { Project } from "@/lib/projects";

interface Props {
  project: Project;
  nextProject: Project;
}

export default function ProjectDetail({ project, nextProject }: Props) {
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(!!shouldReduce);

  const [isNextHovered, setIsNextHovered] = useState(false);
  const [isBackHovered, setIsBackHovered] = useState(false);

  return (
    <main style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "80px" }}>
      {/* Back */}
      <div className="container-xl" style={{ paddingTop: "48px" }}>
        <Link href="/#work"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: isBackHovered ? "#F5F5F5" : "#5A5A5A",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "14px",
            textDecoration: "none",
            transition: "color 0.2s ease",
            fontWeight: 500,
          }}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
        >
          ← Back to Work
        </Link>
      </div>

      {/* Header */}
      <div className="container-xl" style={{ paddingTop: "40px", paddingBottom: "48px" }}>
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{ background: "#1400FF", color: "#F5F5F5", fontSize: "11px", fontWeight: 500, padding: "4px 10px", borderRadius: "0px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(36px, 4vw, 56px)", color: "#F5F5F5", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "16px" }}>
            {project.title}
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#5A5A5A" }}>
            {project.client} · {project.year}
          </p>
        </motion.div>
      </div>

      {/* Hero media */}
      <div style={{ marginBottom: "80px" }}>
        <VideoHero videoEmbed={project.videoEmbed} heroVideo={project.heroVideo} heroImage={project.heroImage} title={project.title} priority />
      </div>

      {/* Two-col content */}
      <div className="container-xl" style={{ paddingBottom: "80px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="detail-grid"
          style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "80px", alignItems: "start" }}
        >
          {/* Left narrative */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {[
              { label: "Overview", text: project.description },
              { label: "The Challenge", text: project.challenge },
              { label: "The Solution", text: project.solution },
              { label: "The Result", text: project.result },
            ].map(({ label, text }) => (
              <div key={label}>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5A5A", marginBottom: "12px" }}>
                  {label}
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#F5F5F5", lineHeight: 1.75 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Right metadata */}
          <div style={{ background: "#1C1C1C", borderRadius: "0px", padding: "32px", display: "flex", flexDirection: "column", gap: "24px", position: "sticky", top: "100px" }}>
            {[
              { label: "Role", value: project.role },
              { label: "Duration", value: project.duration },
              { label: "Year", value: project.year },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "#5A5A5A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#F5F5F5", fontWeight: 400 }}>{value}</p>
              </div>
            ))}
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "#5A5A5A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "10px" }}>Tools</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tools.map((tool) => (
                  <span key={tool} style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#5A5A5A", fontSize: "13px", padding: "4px 10px", borderRadius: "0px", fontFamily: "'Space Grotesk', sans-serif" }}>{tool}</span>
                ))}
              </div>
            </div>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#1400FF", fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", fontWeight: 700, textDecoration: "none", marginTop: "8px" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF3B00")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#1400FF")}
              >
                View Live ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <div style={{ padding: "0 0 80px" }}>
          <div className="container-xl">
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "#5A5A5A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "32px" }}>Gallery</p>
            <div className="gallery-grid" style={{ columns: "2", gap: "24px" }}>
              {project.gallery.map((img, i) => (
                <div key={i} style={{ marginBottom: "24px", breakInside: "avoid", width: "100%" }}>
                  <img
                    src={img}
                    alt={`${project.title} — ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "0px"
                    }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Next project */}
      <div style={{ borderTop: "1px solid #1C1C1C", padding: "60px 0" }}>
        <div className="container-xl">
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "#5A5A5A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Next Project</p>
          <Link href={`/work/${nextProject.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "16px", textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 40px)",
                color: isNextHovered ? "#FF3B00" : "#1400FF",
                letterSpacing: "-0.02em",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={() => setIsNextHovered(true)}
              onMouseLeave={() => setIsNextHovered(false)}
            >
              {nextProject.title} →
            </span>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .gallery-grid { columns: 1 !important; }
        }
      `}</style>
    </main>
  );
}
