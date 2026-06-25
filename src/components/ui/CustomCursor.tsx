"use client";

import { useEffect, useRef } from "react";

const colors = ["#ff5aa7", "#ffd84a", "#38c7ff", "#5bd878", "#8b5cf6", "#ff9d2e"];
const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canSparkle = useRef(true);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const createSparkle = (x: number, y: number, size = 1) => {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";

      const angle = Math.random() * Math.PI * 2;
      const distance = (Math.random() * 75 + 35) * size;

      const rot = Math.random() * 720 - 360; // Up to two full spins!

      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.innerText = ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)];
      sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.fontSize = `${(Math.random() * 20 + 14) * size}px`;
      sparkle.style.fontFamily = "var(--font-baloo-2), cursive";
      sparkle.style.fontWeight = "900";
      sparkle.style.textShadow = "0 3px 6px rgba(0,0,0,0.15)";
      sparkle.style.background = "transparent";
      sparkle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      sparkle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
      sparkle.style.setProperty("--rot", `${rot}deg`);

      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 880);
    };

    const handlePointerMove = (event: PointerEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      if (!canSparkle.current || window.innerWidth < 760) return;
      canSparkle.current = false;

      createSparkle(event.clientX, event.clientY, 1);

      setTimeout(() => {
        canSparkle.current = true;
      }, 85);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <div className="cursor" id="cursor" ref={cursorRef} aria-hidden="true" />;
}

// Helper to trigger confetti from other components
export const triggerConfetti = (x: number, y: number, count = 30) => {
  for (let i = 0; i < count; i += 1) {
    const size = Math.random() * 0.9 + 0.7;
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";

    const angle = Math.random() * Math.PI * 2;
    const distance = (Math.random() * 75 + 35) * size;

    const rot = Math.random() * 720 - 360;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.innerText = ALPHABETS[Math.floor(Math.random() * ALPHABETS.length)];
    sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.fontSize = `${(Math.random() * 20 + 14) * size}px`;
    sparkle.style.fontFamily = "var(--font-baloo-2), cursive";
    sparkle.style.fontWeight = "900";
    sparkle.style.textShadow = "0 3px 6px rgba(0,0,0,0.15)";
    sparkle.style.background = "transparent";
    sparkle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    sparkle.style.setProperty("--rot", `${rot}deg`);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 880);
  }
};

