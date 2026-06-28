"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./navbar.scss";

const NAV_ITEMS = [
  { id: "home", label: "Home", className: "nav-item-home" },
  { id: "about", label: "About", className: "nav-item-worlds" },
  { id: "programs", label: "Programs", className: "nav-item-campus" },
  { id: "activities", label: "Activities", className: "nav-item-routine" },
  { id: "gallery", label: "Gallery", className: "nav-item-parents" },
  { id: "testimonials", label: "Voices", className: "nav-item-testimonials" },
] as const;

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [catLeft, setCatLeft] = useState<number | null>(null);
  const [catTop, setCatTop] = useState<number | null>(null);
  const [catRightEdge, setCatRightEdge] = useState<number | null>(null);

  const isScrollingRef = useRef(false);
  const lastScrollY = useRef(0);
  const navLinksRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Position the cat above/below whichever link is active
  const updateCatPosition = useCallback((id: string) => {
    const linkEl = linkRefs.current[id];
    const wrapEl = navLinksRef.current;
    if (!linkEl || !wrapEl) return;

    const linkRect = linkEl.getBoundingClientRect();
    const wrapRect = wrapEl.getBoundingClientRect();
    const centerX = linkRect.left - wrapRect.left + linkRect.width / 2;
    const centerY = linkRect.top - wrapRect.top + linkRect.height / 2;
    const rightEdge = linkRect.left - wrapRect.left + linkRect.width;
    setCatLeft(centerX);
    setCatTop(centerY);
    setCatRightEdge(rightEdge);
  }, []);

  useEffect(() => {
    if (activeSection && NAV_ITEMS.some((item) => item.id === activeSection)) {
      updateCatPosition(activeSection);
    }
  }, [activeSection, updateCatPosition]);

  // Reposition on resize so the cat doesn't drift out of sync
  useEffect(() => {
    const handleResize = () => {
      if (activeSection) updateCatPosition(activeSection);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection, updateCatPosition]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current && !isScrollingRef.current) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [...NAV_ITEMS.map((item) => item.id), "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingRef.current) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const isCatVisible =
    catLeft !== null && NAV_ITEMS.some((item) => item.id === activeSection);

  return (
    <header className={`site-header ${isHidden ? "hidden-nav" : ""}`}>
      <div className="header-inner">
        <div className="logo-wrap">
          <Link className="brand" href="#home" aria-label="Tiny Learners home">
            <img src="/logo.webp" alt="Tiny Learners Play School" className="brand-logo-img" />
          </Link>
        </div>

        <div className="nav-wrap">
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Open navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <motion.span
              className="absolute left-1/2 h-[3px] w-[23px] rounded-full bg-[var(--nav-navy)]"
              animate={{
                y: navOpen ? 9 : 0,
                rotate: navOpen ? 45 : 0,
              }}
              style={{ x: "-50%", top: "calc(50% - 10.5px)" }}
            />
            <motion.span
              className="absolute left-1/2 h-[3px] w-[23px] rounded-full bg-[var(--nav-navy)]"
              animate={{
                opacity: navOpen ? 0 : 1,
                scaleX: navOpen ? 0 : 1,
              }}
              style={{ x: "-50%", top: "calc(50% - 1.5px)" }}
            />
            <motion.span
              className="absolute left-1/2 h-[3px] w-[23px] rounded-full bg-[var(--nav-navy)]"
              animate={{
                y: navOpen ? -9 : 0,
                rotate: navOpen ? -45 : 0,
              }}
              style={{ x: "-50%", top: "calc(50% + 7.5px)" }}
            />
          </button>

          <nav className={`nav-links ${navOpen ? "open" : ""}`} id="navLinks" ref={navLinksRef}>
            <div
              className={`nav-cat-face ${isCatVisible ? "is-visible" : ""}`}
              style={catLeft !== null ? { left: `${catLeft}px` } : undefined}
              aria-hidden="true"
            />
            <div
              className={`nav-cat-tail ${isCatVisible ? "is-visible" : ""}`}
              style={catLeft !== null ? { left: `${catLeft}px` } : undefined}
              aria-hidden="true"
            />
            <div
              className={`mobile-nav-cat ${isCatVisible ? "is-visible" : ""}`}
              style={catTop !== null && catRightEdge !== null ? { top: `${catTop}px`, left: `${catRightEdge}px` } : undefined}
              aria-hidden="true"
            />

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  ref={(el) => {
                    linkRefs.current[item.id] = el;
                  }}
                  href={`#${item.id}`}
                  className={`${item.className} ${isActive ? "active" : ""}`}
                  onClick={() => {
                    isScrollingRef.current = true;
                    setActiveSection(item.id);
                    setNavOpen(false);
                    setTimeout(() => (isScrollingRef.current = false), 1000);
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="active-pill-bg"
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    />
                  )}
                  <span className="nav-text">{item.label}</span>
                </Link>
              );
            })}
            <Link
              href="#footer"
              className={`nav-item-admissions ${activeSection === "footer" ? "active" : ""}`}
              onClick={() => {
                isScrollingRef.current = true;
                setActiveSection("footer");
                setNavOpen(false);
                setTimeout(() => (isScrollingRef.current = false), 1000);
              }}
            >
              <span className="nav-text">Call Now</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}