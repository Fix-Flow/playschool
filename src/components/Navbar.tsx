"use client";

import { useState, useEffect, useRef } from "react";
import "./navbar.scss";

const NAV_ITEMS = [
  { id: "about", label: "Story", className: "nav-item-worlds" },
  { id: "programs", label: "Worlds", className: "nav-item-campus" },
  { id: "activities", label: "Routine", className: "nav-item-routine" },
  { id: "gallery", label: "Campus", className: "nav-item-parents" },
  { id: "testimonials", label: "Parents", className: "nav-item-testimonials" },
] as const;

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const isScrollingRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only trigger hide/show after scrolling down past the header height (120px)
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current && !isScrollingRef.current) {
          // Scrolling down
          setIsHidden(true);
        } else {
          // Scrolling up
          setIsHidden(false);
        }
      } else {
        // Always show when near the top
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [...NAV_ITEMS.map(item => item.id), "contact"];
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

  return (
    <header className={`site-header ${isHidden ? "hidden-nav" : ""}`}>
      <div className="header-inner">
        <div className="logo-wrap">
          <a className="brand" href="#home" aria-label="Little Learners home">
            <span className="brand-icon">
              <span>LL</span>
            </span>
            <span className="brand-text">
              <strong>Little Learners</strong>
              <small>Play School</small>
            </span>
          </a>
        </div>

        <div className="nav-wrap">
          <button 
            className="nav-toggle" 
            id="navToggle" 
            aria-label="Open navigation"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${navOpen ? "open" : ""}`} id="navLinks">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${item.className} ${isActive ? "active" : ""}`}
                  onClick={() => {
                    isScrollingRef.current = true;
                    setActiveSection(item.id);
                    setNavOpen(false);
                    setTimeout(() => isScrollingRef.current = false, 1000);
                  }}
                >
                  <span className="nav-text">{item.label}</span>
                </a>
              );
            })}
            <a 
              href="#contact" 
              className={`nav-item-admissions ${activeSection === "contact" ? "active" : ""}`} 
              onClick={() => {
                isScrollingRef.current = true;
                setActiveSection("contact");
                setNavOpen(false);
                setTimeout(() => isScrollingRef.current = false, 1000);
              }}
            >
              <span className="nav-text">Book Visit</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
