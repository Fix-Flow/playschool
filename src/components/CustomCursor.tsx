"use client";

import { useEffect, useRef } from "react";

const colors = ["#ff5aa7", "#ffd84a", "#38c7ff", "#5bd878", "#8b5cf6", "#ff9d2e"];

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

      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.width = `${(Math.random() * 8 + 7) * size}px`;
      sparkle.style.height = sparkle.style.width;
      sparkle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
      sparkle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);

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

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.width = `${(Math.random() * 8 + 7) * size}px`;
    sparkle.style.height = sparkle.style.width;
    sparkle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 880);
  }
};

