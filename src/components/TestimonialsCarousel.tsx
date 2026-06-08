'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  child: string;
  quote: string;
  rating: number;
  emoji: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya Sharma',
    child: 'Mother of Aarav, Nursery',
    quote: 'PlaySchl has been a second home for my son. The teachers are incredibly caring and the curriculum is brilliant!',
    rating: 5,
    emoji: '👩',
  },
  {
    name: 'Rajesh Kumar',
    child: 'Father of Ananya, Jr. KG',
    quote: "My daughter has grown so much in confidence and creativity since joining. I couldn't be happier with the school.",
    rating: 5,
    emoji: '👨',
  },
  {
    name: 'Meera Patel',
    child: 'Mother of Vivaan, Playgroup',
    quote: 'The warmth and professionalism of the staff is unmatched. Vivaan looks forward to school every single day!',
    rating: 5,
    emoji: '👩',
  },
  {
    name: 'Arjun Reddy',
    child: 'Father of Diya, Sr. KG',
    quote: 'The holistic approach to learning at PlaySchl is exceptional. Diya has blossomed in every way possible!',
    rating: 5,
    emoji: '👨',
  },
  {
    name: 'Kavitha Nair',
    child: 'Mother of Aryan, Nursery',
    quote: 'From day one, the transition was seamless. The staff made Aryan feel so welcome. Absolutely love this school!',
    rating: 5,
    emoji: '👩',
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSlides = TESTIMONIALS.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    },
    [prev, next]
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Testimonials carousel"
      aria-roledescription="carousel"
    >
      {/* Cards Container */}
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 px-2"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${totalSlides}`}
              aria-hidden={i !== current}
            >
              <blockquote className="mx-auto max-w-2xl rounded-3xl border-2 border-white bg-white p-8 sm:p-10 text-center shadow-card">
                {/* Stars */}
                <div className="mb-5 flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={20} className="fill-sunny-400 text-sunny-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-8 text-lg sm:text-xl leading-relaxed text-ink-light italic font-body">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <footer className="flex items-center justify-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-candy-50 text-2xl border-2 border-candy-100">
                    {t.emoji}
                  </span>
                  <div className="text-left">
                    <p className="text-base font-bold font-heading text-ink">{t.name}</p>
                    <p className="text-sm text-ink-muted">{t.child}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-card-hover text-ink hover:bg-candy-50 hover:text-candy-500 transition-all hover:scale-110 active:scale-95 hidden sm:flex"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-card-hover text-ink hover:bg-candy-50 hover:text-candy-500 transition-all hover:scale-110 active:scale-95 hidden sm:flex"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2.5" role="tablist" aria-label="Testimonial navigation">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 bg-candy-400'
                : 'w-3 bg-warm-300 hover:bg-candy-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
