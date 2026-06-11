"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { makeFadeUp } from "@/lib/animations";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/felilir" },
  { label: "Instagram", href: "https://instagram.com/felilir" },
];

export default function Contact() {
  const shouldReduce = useReducedMotion();
  const fadeUp = makeFadeUp(!!shouldReduce);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} — felilir portfolio`,
        }),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "0px",
    color: "#F5F5F5",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    padding: "14px 16px",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

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

          {/* Success state */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ background: "#111", border: "1px solid #6EFF00", borderRadius: "0px", padding: "32px", textAlign: "center" }}
            >
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#6EFF00", marginBottom: "8px" }}>
                Message sent ✓
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#5A5A5A", fontSize: "15px" }}>
                I&apos;ll get back to you within 24–48 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#5A5A5A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Name</label>
                <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#6EFF00")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)")}
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="contact-email" style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#5A5A5A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Email</label>
                <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#6EFF00")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)")}
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "#5A5A5A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Message</label>
                <textarea id="contact-message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#6EFF00")}
                  onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)")}
                />
              </div>

              {status === "error" && (
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#ff4444" }}>Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  alignSelf: "flex-end",
                  background: "#6EFF00",
                  color: "#0A0A0A",
                  border: "none",
                  padding: "14px 32px",
                  borderRadius: "0px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: status === "loading" ? "wait" : "pointer",
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => { if (status !== "loading") (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { if (status !== "loading") (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                {status === "loading" ? "Sending..." : "Send →"}
              </button>
            </form>
          )}

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
