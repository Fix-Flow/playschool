"use client";

import { motion } from "framer-motion";
import { CloudDivider } from "@/components/ui/CloudDivider";
import "./Testimonials.scss";

const reviews = [
  {
    text: "My daughter loves coming to school every day! The teachers are so caring and the activities are amazing.",
    author: "Priya Sharma",
    role: "Parent of Nursery Student"
  },
  {
    text: "We noticed a huge improvement in our son's social skills and confidence within just two months.",
    author: "Rahul Verma",
    role: "Parent of Pre-KG Student"
  },
  {
    text: "The CCTV access gives us such peace of mind. It's truly a safe and wonderful environment.",
    author: "Anjali Gupta",
    role: "Parent of Playgroup Student"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" style={{ position: "relative" }}>
      <CloudDivider fillColorVar="#e0f2fe" />


      <div className="testimonials-container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">Testimonials</span>
          <h2>What Parents Say</h2>
          <p>Don&apos;t just take our word for it. Hear from our happy families!</p>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((rev, i) => (
          <motion.div 
            className={`review-card style-${i % 3}`} 
            key={i}
            initial={{ opacity: 0, y: 50, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", bounce: 0.3 }}>
              <div className="card-content">
                <div className="quote-mark">&quot;</div>
                <p className="review-text">{rev.text}</p>
                <div className="author-info">
                  <strong>{rev.author}</strong>
                  <span>{rev.role}</span>
                </div>
              </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
