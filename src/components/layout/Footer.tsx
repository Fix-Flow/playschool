"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import "./Footer.scss";

/* ─── Data ─── */
const NAV_LINKS = [
  { label: "Our Story", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Admissions", href: "#contact" },
];

/* ─── Ambient Particles: Floating Sandbox Bubbles ─── */
const BUBBLES = [
  { size: 18, left: "12%", yTarget: -350, xTarget: 20, duration: 14, delay: 0 },
  { size: 24, left: "28%", yTarget: -420, xTarget: -25, duration: 18, delay: 2.5 },
  { size: 14, left: "45%", yTarget: -310, xTarget: 15, duration: 12, delay: 1.2 },
  { size: 20, left: "65%", yTarget: -380, xTarget: -30, duration: 16, delay: 4 },
  { size: 25, left: "82%", yTarget: -480, xTarget: 25, duration: 19, delay: 0.5 },
  { size: 16, left: "90%", yTarget: -340, xTarget: -15, duration: 13, delay: 3 },
];

const AmbientBubbles = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const colors = ["#ec4899", "#eab308", "#3b82f6", "#ef4444"];

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {BUBBLES.map((bubble, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: colors[i % colors.length],
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: "-30px",
            opacity: 0.15,
          }}
          animate={{
            y: [0, bubble.yTarget],
            x: [0, bubble.xTarget, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ─── Organic Wave Separator ─── */
const AnimatedWaves = () => (
  <div
    className="footer-organic-wave"
    aria-hidden="true"
    style={{
      position: "absolute",
      top: "-88px",
      left: 0,
      width: "100%",
      height: "90px",
      zIndex: 10,
      pointerEvents: "none",
      overflow: "visible",
      color: "#FDF2F8",
    }}
  >
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="footer-organic-wave__svg"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        overflow: "visible",
      }}
    >
      <defs>
        {/* Clip path: covers the area of the SVG (x = 0 to 1440) and above it (y = -100 to 120), clipping anything below or outside */}
        <clipPath id="footer-wave-clip">
          <rect x="0" y="-100" width="1440" height="220" />
        </clipPath>
      </defs>
      {/* 1. Shadow path (clipped below y = 120 and at the sides so the straight edges don't cast shadows) */}
      <path
        d="M0 70C120 30 245 22 370 52C510 86 620 108 760 74C900 40 1015 18 1150 42C1275 64 1360 88 1440 56V120H0V70Z"
        fill="currentColor"
        filter="drop-shadow(0px -10px 12px rgba(9, 34, 58, 0.12))"
        clipPath="url(#footer-wave-clip)"
      />
      {/* 2. Opaque path on top (unclipped, no filter) to draw the clean wave shape */}
      <path
        d="M0 70C120 30 245 22 370 52C510 86 620 108 760 74C900 40 1015 18 1150 42C1275 64 1360 88 1440 56V120H0V70Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

/* ─── Animated Corner Illustration (Breathing Blocks) ─── */
const CornerIllustration = () => (
  <div
    className="rte-corner-illustration"
    aria-hidden="true"
    style={{
      position: "absolute",
      bottom: "48px",
      right: "48px",
      zIndex: 0,
      opacity: 0.6,
    }}
  >
    <svg
      width="90"
      height="90"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cbd5e1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M12 2L2 7l10 5 10-5-10-5z"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M2 12l10 5 10-5"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M2 17l10 5 10-5" />
    </svg>
  </div>
);

/* ─── Animated Wavy Line Separator ─── */
const WavyLineSeparator = () => (
  <div
    aria-hidden="true"
    style={{
      position: "absolute",
      top: "-12px",
      left: 0,
      width: "100%",
      height: "12px",
      overflow: "hidden",
      zIndex: 10,
    }}
  >
    <motion.svg
      viewBox="0 0 2880 12"
      preserveAspectRatio="none"
      style={{ display: "block", width: "200%", height: "100%" }}
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
    >
      <path
        d="M0,6 Q180,12 360,6 T720,6 T1080,6 T1440,6 T1800,6 T2160,6 T2520,6 T2880,6"
        fill="none"
        stroke="#fbcfe8"
        strokeWidth="3"
      />
    </motion.svg>
  </div>
);

export default function Footer() {
  const [isMapOpen, setIsMapOpen] = React.useState(false);
  const [isMapLoading, setIsMapLoading] = React.useState(true);
  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    if (isMapOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMapOpen]);

  return (
    <footer
      className="rte-footer"
      id="footer"
      role="contentinfo"
      style={{
        background: "linear-gradient(180deg, #FDF2F8 0%, #FCE7F3 100%)",
        position: "relative",
        paddingTop: "40px",
        overflow: "visible",
      }}
    >
      {/* ── Layer 1 & 2: Organic Wave Border & Ambient Animations ── */}
      <AnimatedWaves />
      <CornerIllustration />

      {/* ── Layer 3: Main Content ── */}
      <div className="rte-inner" style={{ position: "relative", zIndex: 10 }}>
        <div className="rte-grid" style={{ paddingTop: "20px", paddingBottom: "0px" }}>
          {/* ─── Column 1: Brand + CTA ─── */}
          <motion.div
            className="rte-col rte-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          >
            <h2 className="rte-logo-text">
              PlaySchl<span className="rte-logo-dot" style={{ color: "#eab308" }}>.</span>
            </h2>

            <p className="rte-mission" style={{ color: "#475569" }}>
              Nurturing bright futures through play-based learning. A joyful, safe space where every child&apos;s potential blossoms. 🌟
            </p>

            <motion.a
              href="#contact"
              className="rte-cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#ef4444",
                color: "white",
                padding: "12px 24px",
                borderRadius: "9999px",
                fontWeight: "bold",
                marginTop: "16px",
              }}
              animate={{
                boxShadow: [
                  "0px 10px 15px -3px rgba(239, 68, 68, 0.3)",
                  "0px 15px 25px -5px rgba(239, 68, 68, 0.5)",
                  "0px 10px 15px -3px rgba(239, 68, 68, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✨</span> Admissions Open
            </motion.a>
          </motion.div>

          {/* ─── Column 2: Navigation ─── */}
          <motion.div
            className="rte-col rte-nav"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
          >
            <h3 className="rte-col-title" style={{ color: "#1e293b" }}>
              Worlds to Explore
            </h3>

            <ul className="rte-nav-list">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  <motion.a
                    href={link.href}
                    className="rte-nav-link"
                    whileHover="hover"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#475569",
                    }}
                  >
                    <motion.span
                      className="rte-nav-icon"
                      aria-hidden="true"
                      variants={{
                        hover: {
                          x: 5,
                          scale: 1.2,
                          color: "#eab308",
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                        },
                      }}
                    >
                      <ChevronRight size={18} strokeWidth={3} color="#ec4899" />
                    </motion.span>
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ─── Column 3: Contact ─── */}
          <motion.div
            className="rte-col rte-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
          >
            <h3 className="rte-col-title" style={{ color: "#1e293b" }}>
              Visit &amp; Connect
            </h3>

            <motion.div
              className="contact-card-wrapper"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
              style={{
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "24px",
                boxShadow: "0 20px 25px -5px rgba(253, 242, 248, 0.8)",
              }}
            >
              <ul
                className="rte-contact-list"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  color: "#475569",
                  fontSize: "14px",
                }}
              >
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <MapPin size={22} color="#ec4899" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span>Teachers Colony Rd, Housing Board Colony, Siddipet, Telangana&nbsp;-&nbsp;502103</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsMapLoading(true);
                      setIsMapOpen(true);
                    }}
                    style={{
                      marginLeft: "38px",
                      background: "rgba(236, 72, 153, 0.1)",
                      color: "#ec4899",
                      border: "2px solid rgba(236, 72, 153, 0.2)",
                      padding: "6px 14px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "all 0.2s ease",
                      fontFamily: "var(--font-nunito)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#ec4899";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(236, 72, 153, 0.1)";
                      e.currentTarget.style.color = "#ec4899";
                    }}
                  >
                    📍 View Map
                  </button>
                </li>

                <li style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <Phone size={22} color="#eab308" style={{ flexShrink: 0 }} />
                  <a href="tel:+911234567890">+91 12345 67890</a>
                </li>

                <li style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <Mail size={22} color="#3b82f6" style={{ flexShrink: 0 }} />
                  <a href="mailto:hello@playschl.com">hello@playschl.com</a>
                </li>

                <li style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <Clock size={22} color="#ef4444" style={{ flexShrink: 0 }} />
                  <span>Mon – Sat: 8:00 AM – 4:00 PM</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Layer 4: Bottom Bar ── */}
      <div
        className="rte-bottom"
        style={{
          position: "relative",
          zIndex: 10,
          borderTop: "none",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginTop: "32px",
        }}
      >
        <WavyLineSeparator />

        <div
          className="rte-bottom-inner"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "16px",
            color: "#94a3b8",
            fontSize: "14px",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div className="rte-bottom-left">
            <p className="rte-copyright">
              © {currentYear} PlaySchl. All rights reserved. Made with ❤️ for tiny learners.
            </p>
          </div>

          <div className="rte-legal" style={{ display: "flex", gap: "24px" }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#safety">Campus Safety</a>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <div
            onClick={() => setIsMapOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
              style={{
                position: "relative",
                width: "min(800px, 100%)",
                backgroundColor: "white",
                borderRadius: "28px",
                padding: "16px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                border: "3px solid var(--logo-navy)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 8px" }}>
                <h3 style={{ fontFamily: "var(--font-baloo-2)", fontSize: "1.5rem", color: "var(--logo-navy)", margin: 0 }}>
                  Tiny Learners Play School Map
                </h3>
                {/* Close Button ('X') */}
                <button
                  onClick={() => setIsMapOpen(false)}
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--logo-navy)",
                    color: "white",
                    border: "3px solid white",
                    fontSize: "20px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.backgroundColor = "var(--logo-red)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "var(--logo-navy)";
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Map Frame */}
              <div style={{ position: "relative", width: "100%", height: "clamp(300px, 50vh, 450px)", borderRadius: "18px", overflow: "hidden", border: "2px solid #e2e8f0" }}>
                {isMapLoading && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 5,
                    }}
                  >
                    <video
                      src="/Boy going to school.webm"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: "120px",
                        height: "auto",
                        marginBottom: "12px",
                      }}
                    />
                    <div style={{
                      fontFamily: "var(--font-baloo-2)",
                      fontSize: "1.2rem",
                      color: "var(--logo-navy)",
                      animation: "pulse 1.5s infinite ease-in-out",
                    }}>
                      Loading Map...
                    </div>
                  </div>
                )}
                <iframe
                  title="Tiny Learners Play School Location"
                  src="https://maps.google.com/maps?q=Tiny%20learners%20play%20school%2C%20Teachers%20Colony%20Rd%2C%20Housing%20Board%20Colony%2C%20Siddipet%2C%20Telangana%20502103&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoading(false)}
                ></iframe>
              </div>
              
              {/* Address Details */}
              <p style={{ fontSize: "14px", color: "var(--muted)", textAlign: "center", fontWeight: "600", margin: "4px 0" }}>
                📍 Teachers Colony Rd, Housing Board Colony, Siddipet, Telangana - 502103
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}