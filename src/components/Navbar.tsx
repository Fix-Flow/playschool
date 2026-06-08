'use client';

import { useState, useEffect, useCallback } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2.5 group"
            aria-label="Go to home section"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-candy-400 text-white shadow-glow-pink transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]">
              <GraduationCap size={24} />
            </div>
            <span className="text-2xl font-extrabold font-heading text-ink">
              Play<span className="text-candy-400">Schl</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-candy-600 bg-candy-50'
                        : 'text-ink-light hover:text-candy-500 hover:bg-candy-50/50'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo('#admissions')}
              className="rounded-full bg-candy-400 px-7 py-2.5 text-sm font-bold text-white shadow-glow-pink transition-all duration-300 hover:bg-candy-500 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              🎉 Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-2xl text-ink hover:bg-candy-50 transition-colors"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-candy-100 px-4 pb-6 pt-3 shadow-float">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left rounded-2xl px-5 py-3.5 text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-candy-600 bg-candy-50'
                        : 'text-ink hover:text-candy-500 hover:bg-candy-50/50'
                    }`}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => scrollTo('#admissions')}
            className="mt-4 w-full rounded-full bg-candy-400 px-6 py-3.5 text-base font-bold text-white shadow-glow-pink transition-all hover:bg-candy-500"
            tabIndex={isOpen ? 0 : -1}
          >
            🎉 Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
}
