"use client";

import { useEffect } from "react";

export default function GlobalInteractions() {
  useEffect(() => {
    // Reveal Observer
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealEls.forEach((el) => revealObserver.observe(el));

    // Magnetic Buttons
    const handleMagneticMove = (event: Event) => {
      if (window.innerWidth < 760) return;
      const item = event.currentTarget as HTMLElement;
      const e = event as PointerEvent;
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.13}px, ${y * 0.22}px)`;
    };

    const handleMagneticLeave = (event: Event) => {
      const item = event.currentTarget as HTMLElement;
      item.style.transform = "translate(0, 0)";
    };

    const magneticItems = document.querySelectorAll(".magnetic");
    magneticItems.forEach((item) => {
      item.addEventListener("pointermove", handleMagneticMove);
      item.addEventListener("pointerleave", handleMagneticLeave);
    });

    return () => {
      revealObserver.disconnect();
      magneticItems.forEach((item) => {
        item.removeEventListener("pointermove", handleMagneticMove);
        item.removeEventListener("pointerleave", handleMagneticLeave);
      });
    };
  }, []);

  return null;
}

