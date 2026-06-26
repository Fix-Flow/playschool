"use client";

import React from "react";
import { motion } from "framer-motion";
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
      overflow: "hidden",
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
      }}
    >
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
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="rte-footer"
      id="footer"
      role="contentinfo"
      style={{
        backgroundColor: "#FDF2F8",
        position: "relative",
        paddingTop: "40px",
        overflow: "visible",
      }}
    >
      {/* ── Layer 1 & 2: Organic Wave Border & Ambient Animations ── */}
      <AnimatedWaves />
      <AmbientBubbles />
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
                <li style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <MapPin size={22} color="#ec4899" style={{ flexShrink: 0 }} />
                  <span>123 Learning Lane, Education District, City&nbsp;-&nbsp;500001</span>
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
    </footer>
  );
}