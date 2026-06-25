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

const AirplaneTrail = () => (
  <svg className="hero-graphic hero-graphic--rocket" viewBox="0 0 200 200" aria-hidden="true">
    {/* Outline Airplane pointing left */}
    <g transform="translate(40, 20) rotate(-20)">
      {/* Airplane Body (pill shape, nose pointing LEFT) */}
      <path d="M40,15 C45,15 50,20 50,25 C50,30 45,35 40,35 L10,35 C5,35 0,30 0,25 C0,20 5,15 10,15 Z" fill="none" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cockpit Window Line */}
      <path d="M10,15 C12,20 12,30 10,35" fill="none" stroke="var(--logo-yellow)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Little dots on body */}
      <circle cx="20" cy="25" r="1" fill="var(--logo-yellow)" />
      <circle cx="28" cy="25" r="1" fill="var(--logo-yellow)" />
      <circle cx="36" cy="25" r="1" fill="var(--logo-yellow)" />
      
      {/* Top Wing */}
      <path d="M25,15 C25,5 20,0 15,0 C10,0 12,10 15,15" fill="none" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bottom Wing */}
      <path d="M25,35 C25,45 20,50 15,50 C10,50 12,40 15,35" fill="none" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Tail Fins */}
      <path d="M45,15 L48,5 C46,5 42,10 40,15" fill="none" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45,35 L48,45 C46,45 42,40 40,35" fill="none" stroke="var(--logo-yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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
            <FloatingShape type="cloud" colorVar="#7B93A4" size={60} top="-20px" right="-25%" duration={12} delay={2} zIndex={10} />
             */}
            <AirplaneTrail />
            <FloatingShape type="rainbow" colorVar="var(--logo-red)" size={150} bottom="80%" left="80%" duration={12} delay={0} zIndex={10} isStatic={true} className="hero-rainbow" />
            <FloatingShape type="pencil" colorVar="#4EA8DE" size={65} bottom="-1%" right="20%" zIndex={10} isStatic={true} className="hero-pencil" />
            
            <div className="hero-badge">
              <span className="dot" />
              Admissions Open for 2026-27
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
