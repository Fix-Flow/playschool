"use client";

import { motion } from "framer-motion";
import { CloudDivider } from "@/components/ui/CloudDivider";
import "./Testimonials.scss";

const reviews = [
  {
    text: "A journey of a thousand miles begins with a single step and this is the best school to encourage kids",
    author: "Malreddy Vijitha",
    role: "Parent"
  },
  {
    text: "The school is good and the education is very good. This is the best school for your child. Best Choice Nursery School👍",
    author: "Vishnuvardhan Reddy",
    role: "Parent"
  },
  {
    text: "Best school in Siddipet New beginning for children is very good from here, my daughter get a lot of improvement from here.",
    author: "Amier Shiak",
    role: "Parent"
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
