"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { makeCardVariant } from "@/lib/animations";
import { Project } from "@/lib/projects";

interface Props {
  project: Project;
  index: number;
  isLarge: boolean;
}

export default function ProjectCard({ project, index, isLarge }: Props) {
  const shouldReduce = useReducedMotion();
  const cardVariants = makeCardVariant(!!shouldReduce, 0);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      style={{
        width: "100%",
        display: "block",
      }}
    >
      <Link href={`/work/${project.slug}`} className="project-column-card">
        {/* Background Image Wrap */}
        <div className="project-column-img-wrap">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="project-column-img"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "0";
            }}
          />
          {/* Subtle bottom shadow gradient to ensure text readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.4) 60%, rgba(10, 10, 10, 0.2) 100%)",
            }}
          />
        </div>

        {/* Top Section: Year & Category Tag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", zIndex: 1 }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#888", letterSpacing: "0.05em", fontWeight: 500 }}>
            {project.year}
          </span>
          <span className="project-column-tag">
            {project.tags[0] || "Project"}
          </span>
        </div>

        {/* Middle Section: Vertical Client Name */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", zIndex: 1, padding: "40px 0" }}>
          <span className="project-column-client">
            {project.client}
          </span>
        </div>

        {/* Bottom Section: Title & Arrow */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", zIndex: 1, gap: "12px" }}>
          <p
            className="project-column-title"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              color: "#F5F5F5",
              letterSpacing: "-0.01em",
              lineHeight: "1.3",
              maxWidth: "75%",
              margin: 0,
            }}
          >
            {project.title}
          </p>
          <div className="project-column-arrow-circle">
            <span className="project-column-arrow">→</span>
          </div>
        </div>
      </Link>

      <style>{`
        .project-column-card {
          position: relative;
          height: 650px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px 24px;
          background: #0A0A0A;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        @media (max-width: 1024px) {
          .project-column-card {
            height: 550px;
          }
        }

        @media (max-width: 768px) {
          .project-column-card {
            height: 480px;
            border-right: none;
            border-left: 1px solid rgba(255, 255, 255, 0.08);
          }
        }

        .project-column-img-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.45;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          overflow: hidden;
        }

        .project-column-card:hover .project-column-img-wrap {
          opacity: 0.75;
        }

        .project-column-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(10px);
          transform: scale(1.0);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-column-card:hover .project-column-img {
          filter: blur(0px);
          transform: scale(1.08);
        }

        .project-column-tag {
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #888;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'Space Grotesk', sans-serif;
          transition: border-color 0.3s ease, color 0.3s ease;
        }

        .project-column-card:hover .project-column-tag {
          border-color: #6EFF00;
          color: #6EFF00;
        }

        .project-column-client {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(24px, 3.2vw, 44px);
          color: #F5F5F5;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          opacity: 0.85;
          writing-mode: vertical-rl;
          transform: rotate(180deg) scale(1);
          transform-origin: center;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, color 0.3s ease;
          white-space: nowrap;
        }

        .project-column-card:hover .project-column-client {
          transform: rotate(180deg) scale(1.1);
          opacity: 1;
          color: #F5F5F5;
        }

        .project-column-title {
          transform: scale(1);
          transform-origin: left bottom;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
        }

        .project-column-card:hover .project-column-title {
          transform: scale(1.08);
        }

        .project-column-arrow-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          transition: background 0.3s ease, border-color 0.3s ease;
          flex-shrink: 0;
        }

        .project-column-card:hover .project-column-arrow-circle {
          background: #F5F5F5;
          border-color: #F5F5F5;
        }

        .project-column-arrow {
          color: #F5F5F5;
          font-size: 20px;
          transition: color 0.3s ease, transform 0.3s ease;
          line-height: 1;
        }

        .project-column-card:hover .project-column-arrow {
          color: #0A0A0A;
          transform: translateX(4px);
        }
      `}</style>
    </motion.div>
  );
}
