"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import "./Gallery.scss";

const items = Array.from({ length: 39 }, (_, i) => {
  const id = i + 1;
  return {
    id,
    src: `/gallery/image${id}.jpg`,
    span: [3, 17, 26, 35].includes(id)
      ? "span-3"
      : [5, 10, 13, 21, 30, 38].includes(id)
      ? "span-2"
      : "",
  };
});

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    const handleResize = () => setLimit(window.innerWidth <= 768 ? 8 : 12);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedItems = isExpanded ? items : items.slice(0, limit);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="section-header text-center reveal">
          <div className="badge">Memories</div>
          <h2>Our Happy Moments</h2>
          <p>A glimpse into the magical world of Tiny Learners.</p>
        </div>

        <div className={`grid-layout ${isExpanded ? "is-expanded" : ""}`}>
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true, margin: "100px" }}
              transition={{
                duration: 0.4,
                delay: (index % 12) * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className={`grid-item ${item.span}`}
            >
              <Image 
                src={item.src} 
                alt={`Playschool moment ${item.id}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover", borderRadius: "inherit" }}
              />
            </motion.div>
          ))}
        </div>

        <div className="gallery-actions">
          <button 
            className="badge load-more-btn" 
            onClick={() => {
              if (isExpanded) {
                const gallerySection = document.getElementById('gallery');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                }
                // Short timeout allows scroll to begin before layout snaps
                setTimeout(() => setIsExpanded(false), 250);
              } else {
                setIsExpanded(true);
              }
            }}
          >
            {isExpanded ? "See Less" : "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
}
