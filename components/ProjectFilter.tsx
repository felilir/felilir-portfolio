"use client";

import { motion, AnimatePresence } from "framer-motion";

const ALL_TAGS = ["All", "Motion", "Design Branding", "Social Media", "Art Direction"];

interface Props {
  active: string;
  onChange: (tag: string) => void;
}

export default function ProjectFilter({ active, onChange }: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        overflowX: "auto",
        paddingBottom: "4px",
        scrollbarWidth: "none",
      }}
    >
      {ALL_TAGS.map((tag) => {
        const isActive = active === tag;
        return (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            style={{
              padding: "8px 18px",
              borderRadius: "0px",
              border: isActive ? "1px solid #F5F5F5" : "1px solid rgba(255,255,255,0.2)",
              background: isActive ? "#F5F5F5" : "transparent",
              color: isActive ? "#0A0A0A" : "#5A5A5A",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              letterSpacing: "0.03em",
            }}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
