"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { makeFadeUp } from "@/lib/animations";
import { Project } from "@/lib/projects";

interface Props {
  projects: Project[];
}

export default function Work({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(!!shouldReduce);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => {
          if (activeFilter === "Design Branding") {
            return p.tags.includes("Design") || p.tags.includes("Branding") || p.tags.includes("Design Branding");
          }
          return p.tags.includes(activeFilter);
        });

  return (
    <section id="work" style={{ background: "#0A0A0A", padding: "120px 0 0" }}>
      <div className="container-xl" style={{ paddingBottom: "120px" }}>
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: "60px" }}
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
              01
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
              — Work
            </span>
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 40px)",
              color: "#F5F5F5",
              letterSpacing: "-0.02em",
              marginBottom: "40px",
            }}
          >
            Projects that speak.
          </h2>
          <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="work-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} index={i} isLarge={false} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "#5A5A5A", fontFamily: "'DM Sans', sans-serif", padding: "80px 0" }}>
            No projects in this category yet.
          </p>
        )}
      </div>

      <div className="halftone-band" />

      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 1px solid rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 1024px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr !important;
            border-left: none !important;
          }
        }
      `}</style>
    </section>
  );
}
