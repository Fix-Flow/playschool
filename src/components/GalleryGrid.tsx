'use client';

import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  emoji: string;
  gradient: string;
  span: string;
  label: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { emoji: '📸', gradient: 'from-candy-100 to-candy-200', span: 'row-span-2 aspect-[3/4]', label: 'Campus Life' },
  { emoji: '🎨', gradient: 'from-ocean-100 to-ocean-200', span: 'aspect-square', label: 'Art Class' },
  { emoji: '🎭', gradient: 'from-sunny-100 to-sunny-200', span: 'aspect-square', label: 'Drama & Play' },
  { emoji: '🏃', gradient: 'from-lavender-100 to-lavender-200', span: 'aspect-square', label: 'Sports Day' },
  { emoji: '🎵', gradient: 'from-leaf-100 to-leaf-200', span: 'aspect-square', label: 'Music Session' },
  { emoji: '📚', gradient: 'from-sky-100 to-sky-200', span: 'row-span-2 aspect-[3/4]', label: 'Reading Corner' },
  { emoji: '🧩', gradient: 'from-candy-100 to-lavender-100', span: 'aspect-square', label: 'Puzzle Time' },
  { emoji: '🌈', gradient: 'from-sunny-100 to-ocean-100', span: 'aspect-square', label: 'Creative Play' },
];

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_ITEMS.map((item, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} ${item.span} transition-all duration-300 hover:shadow-card-hover hover:scale-[1.03] cursor-pointer border-2 border-white focus-visible:ring-2 focus-visible:ring-candy-400`}
            aria-label={`View ${item.label} in gallery`}
          >
            <div className="flex h-full items-center justify-center">
              <span className="text-5xl transition-transform duration-300 group-hover:scale-125">
                {item.emoji}
              </span>
            </div>
            {/* Hover overlay with label */}
            <div className="absolute inset-0 flex items-end justify-center bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
              <span className="mb-4 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-card">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-ink-muted font-medium">
        📷 Gallery will be updated with real photos soon!
      </p>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image: ${GALLERY_ITEMS[lightboxIndex].label}`}
        >
          {/* Content container - stop propagation */}
          <div
            className="relative mx-4 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-14 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Close gallery lightbox"
            >
              <X size={22} />
            </button>

            {/* Image card */}
            <div className={`rounded-3xl bg-gradient-to-br ${GALLERY_ITEMS[lightboxIndex].gradient} aspect-square flex items-center justify-center shadow-float`}>
              <div className="text-center">
                <span className="block text-8xl sm:text-9xl mb-4">
                  {GALLERY_ITEMS[lightboxIndex].emoji}
                </span>
                <span className="inline-flex rounded-full bg-white/80 backdrop-blur-sm px-5 py-2 text-sm font-bold font-heading text-ink shadow-card">
                  {GALLERY_ITEMS[lightboxIndex].label}
                </span>
              </div>
            </div>

            {/* Counter */}
            <p className="mt-4 text-center text-sm text-white/70 font-medium">
              {lightboxIndex + 1} / {GALLERY_ITEMS.length}
            </p>
          </div>

          {/* Nav arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-all hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-all hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
