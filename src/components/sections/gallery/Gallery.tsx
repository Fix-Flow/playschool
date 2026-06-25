"use client";

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
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="section-header text-center reveal">
          <div className="badge">Memories</div>
          <h2>Our Happy Moments</h2>
          <p>A glimpse into the magical world of Tiny Learners.</p>
        </div>

        <div className="grid-layout">
          {items.map((item, index) => (
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
      </div>
    </section>
  );
}
