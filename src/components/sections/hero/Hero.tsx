"use client";

import { motion } from "framer-motion";
import { FloatingShape } from "@/components/ui/FloatingShapes";
import "./Hero.scss";

const HandDrawnSun = () => (
  <svg className="hero-graphic hero-graphic--sun" viewBox="0 0 100 100" aria-hidden="true">
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
  </svg>
);



export default function Hero() {
  return (
    <section className="hero-split" id="home">


      <div className="hero-split__inner">
        {/* TEXT PANEL */}
        <div className="hero-split__text-panel">
          <div className="hero-split__text-content">
            <HandDrawnSun />
            {/* Playful scattered shapes overlapping the text */}
            {/* <FloatingShape type="cloud" colorVar="#7B93A4" size={140} top="-100px" right="-15%" duration={14} delay={1} zIndex={10} />
            <FloatingShape type="cloud" colorVar="#7B93A4" size={80} top="-60px" right="-40%" duration={18} delay={3} zIndex={10} />
            {/* <FloatingShape type="cloud" colorVar="#7B93A4" size={60} top="-20px" right="-25%" duration={12} delay={2} zIndex={10} />
             */}
            <FloatingShape type="pencil" colorVar="#4EA8DE" size={65} bottom="-1%" right="20%" zIndex={10} isStatic={true} className="hero-pencil" />
            
            <div className="hero-badge">
              <span className="dot" />
              Admissions Open
            </div>

            <h1>
              Where Little Minds
              <br />
              <em>Build Big Dreams</em>
            </h1>

            <p>
              A warm, joyful space for children aged 1.5 to 5.5 years to play,
              explore, and grow — one giggle at a time.
            </p>

            <div className="hero-actions" style={{ position: "relative" }}>
              <a href="#admissions" className="bouncy-btn btn-red">
                Book a Visit
                <span aria-hidden="true">🎈</span>
              </a>
            </div>
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
                backgroundImage: `url('/hero-carousel-3.png')`,
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
