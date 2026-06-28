"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FloatingShape } from "@/components/ui/FloatingShapes";
import "./Hero.scss";

const HandDrawnSun = ({ startAnim }: { startAnim: boolean }) => (
  <motion.svg 
    className="hero-graphic hero-graphic--sun" 
    viewBox="0 0 100 100" 
    aria-hidden="true"
    initial={{ x: -200, rotate: -180, opacity: 0 }}
    animate={startAnim ? { x: 0, rotate: 0, opacity: 1 } : { x: -200, rotate: -180, opacity: 0 }}
    transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
  >
    <g>
      <path d="M50,25 C65,22 75,35 75,50 C75,65 65,78 50,75 C35,78 25,65 25,50 C25,35 35,22 50,25 Z" fill="none" stroke="var(--logo-yellow)" strokeWidth="3" />
      {/* Rays */}
      <line x1="50" y1="12" x2="50" y2="4" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="88" x2="50" y2="96" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" />
      <line x1="12" y1="50" x2="4" y2="50" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" />
      <line x1="88" y1="50" x2="96" y2="50" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" />
      <line x1="25" y1="25" x2="18" y2="18" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" />
      <line x1="75" y1="75" x2="82" y2="82" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" />
      <line x1="25" y1="75" x2="18" y2="82" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" />
      <line x1="75" y1="25" x2="82" y2="18" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" />
    </g>
  </motion.svg>
);

export default function Hero() {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    // Check if loader is unmounted from the DOM
    const checkLoader = setInterval(() => {
      if (!document.getElementById("loader")) {
        setStartAnim(true);
        clearInterval(checkLoader);
      }
    }, 100);
    return () => clearInterval(checkLoader);
  }, []);

  return (
    <section className="hero-split" id="home">
      <div className="hero-split__inner">
        {/* TEXT PANEL */}
        <div className="hero-split__text-panel">
          <div className="hero-split__text-content">
            <HandDrawnSun startAnim={startAnim} />
            {/* Playful scattered shapes overlapping the text */}
            {/* <FloatingShape type="cloud" colorVar="#7B93A4" size={140} top="-100px" right="-15%" duration={14} delay={1} zIndex={10} />
            <FloatingShape type="cloud" colorVar="#7B93A4" size={80} top="-60px" right="-40%" duration={18} delay={3} zIndex={10} />
            {/* <FloatingShape type="cloud" colorVar="#7B93A4" size={60} top="-20px" right="-25%" duration={12} delay={2} zIndex={10} />
             */}

            
            <motion.div 
              className="hero-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={startAnim ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            >
              <span className="dot" />
              Admissions Open
            </motion.div>

            <h1 style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ display: "block" }}>
                {"Where Little Minds".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="hero-letter"
                    initial={{ opacity: 0, scale: 1.25 }}
                    animate={startAnim ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.25 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.35 + i * 0.04
                    }}
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <em>
                {"Build Big Dreams".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="hero-gradient-letter"
                    initial={{ opacity: 0, scale: 1.25 }}
                    animate={startAnim ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.25 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.35 + i * 0.04
                    }}
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </em>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              A warm, joyful space for children aged 1.5 to 5.5 years to play,
              explore, and grow — one giggle at a time.
            </motion.p>

            <motion.div 
              className="hero-actions" 
              style={{ position: "relative" }}
              initial={{ opacity: 0, x: -30 }}
              animate={startAnim ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            >
              <a href="#admissions" className="bouncy-btn btn-red">
                Book a Visit
                <span aria-hidden="true">🎈</span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* SINGLE IMAGE PANEL */}
        <div
          className="hero-split__image-panel"
          role="region"
          aria-label="Photo of Tiny Learners student"
        >
          <div className="hero-split__image-mask">
            <div
              className="hero-split__slide is-active"
              style={{
                backgroundImage: `url('/hero-carousel-3.webp')`,
              }}
              role="img"
              aria-label="Tiny Learners classroom photo"
            />
          </div>
        </div>

        {/* Bottom wave divider — brought back from the original design, */}
      </div>

      {/* MOBILE-ONLY transition detail (scalloped edge) */}
      <div className="hero-split__scallop" aria-hidden="true">
        <svg viewBox="0 0 600 24" preserveAspectRatio="none">
          <path
            d="M0,12 Q25,0 50,12 T100,12 T150,12 T200,12 T250,12 T300,12 T350,12 T400,12 T450,12 T500,12 T550,12 T600,12 V24 H0 Z"
            fill="var(--cream)"
          />
        </svg>
      </div>
    </section>
  );
}
