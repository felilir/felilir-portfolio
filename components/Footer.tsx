"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "32px 0",
      }}
    >
      <div
        className="container-xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            color: "#5A5A5A",
          }}
        >
          felilir © {new Date().getFullYear()} · Concepción, Chile · Built with Next.js
        </p>
        <a
          href="#hero"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            color: "#5A5A5A",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F5F5F5")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5A5A5A")}
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
