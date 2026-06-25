"use client";

import { motion } from "framer-motion";
import "./FloatingShapes.scss";

type ShapeType = "ring" | "cross" | "squiggle" | "triangle" | "kite" | "pencil" | "rainbow" | "cloud";

interface FloatingShapeProps {
  type: ShapeType;
  colorVar: string; // e.g., "var(--logo-red)"
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  duration?: number;
  zIndex?: number;
  isStatic?: boolean;
  className?: string;
}

export function FloatingShape({
  type,
  colorVar,
  size,
  top,
  left,
  right,
  bottom,
  delay = 0,
  duration = 8,
  zIndex = 0,
  isStatic = false,
  className = "",
}: FloatingShapeProps) {
  const style = {
    position: "absolute" as const,
    top,
    left,
    right,
    bottom,
    width: size,
    height: size,
    color: colorVar,
    zIndex,
    pointerEvents: "none" as const,
    opacity: 0.85,
  };

  const animation = {
    y: [0, -20, 0],
    rotate: [0, 8, -8, 0],
  };

  return (
    <motion.div
      className={`floating-shape ${className}`}
      style={style}
      animate={isStatic ? {} : animation}
      transition={
        isStatic
          ? {}
          : {
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay,
              }
      }
      aria-hidden="true"
    >
      <ShapeSVG type={type} />
    </motion.div>
  );
}

function ShapeSVG({ type }: { type: ShapeType }) {
  switch (type) {
    case "ring":
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="18" />
        </svg>
      );
    case "cross":
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 20L80 80M80 20L20 80"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </svg>
      );
    case "squiggle":
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 50 Q 25 10 50 50 T 90 50"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>
      );
    case "triangle":
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="50,15 90,85 10,85"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "kite":
      return (
        <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L80 50 L50 90 L20 50 Z" fill="currentColor" />
          <path d="M20 50 L80 50 M50 10 L50 90" stroke="var(--bg-cream)" strokeWidth="3" />
          <path
            d="M50 90 Q 65 110 50 130 T 50 170"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M50 110 L 60 115 L 50 120 Z" fill="var(--logo-yellow)" />
        </svg>
      );
    case "pencil":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ overflow: "visible" }}>
          {/* Pencil (angled up-left) */}
          <g transform="translate(20, 70) rotate(260)">
            {/* Dotted Trail with a perfect connection and sweeping S-curve + loop */}
            <path d="M 20,5 C 20,-40 -50,-50 -20,-70 C 10,-90 60,-60 30,-40 C 0,-20 -40,-100 40,-140" strokeDasharray="4 6" />
            
            {/* Body */}
            <path d="M 10,10 L 30,10 L 30,50 L 10,50 Z" />
            {/* Tip */}
            <path d="M 10,50 L 20,70 L 30,50" />
            {/* Lead separator */}
            <path d="M 15,60 L 25,60" />
            {/* Eraser */}
            <path d="M 10,10 C 10,0 30,0 30,10" />
            {/* Center line */}
            <line x1="20" y1="10" x2="20" y2="50" />
          </g>
        </svg>
      );
    case "rainbow":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer Arch */}
          <path d="M 20,70 A 30,30 0 0,1 80,70" />
          {/* Middle Arch */}
          <path d="M 28,70 A 22,22 0 0,1 72,70" />
          {/* Inner Arch */}
          <path d="M 36,70 A 14,14 0 0,1 64,70" />
          {/* Left Cloud */}
          <path d="M 20,70 C 15,70 10,75 10,80 C 10,85 15,90 20,90 C 25,90 30,95 35,90 C 40,90 40,80 35,75 C 35,70 25,65 20,70 Z" fill="var(--paper)" />
          {/* Right Cloud */}
          <path d="M 80,70 C 85,70 90,75 90,80 C 90,85 85,90 80,90 C 75,90 70,95 65,90 C 60,90 60,80 65,75 C 65,70 75,65 80,70 Z" fill="var(--paper)" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 30,65 C 20,65 15,55 20,45 C 20,35 30,25 45,30 C 55,15 75,20 80,35 C 90,40 90,55 80,65 C 75,70 35,70 30,65 Z" fill="rgba(255, 255, 255, 0.4)" />
        </svg>
      );
    default:
      return null;
  }
}
