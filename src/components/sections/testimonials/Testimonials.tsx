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
      {/* Daytime Sky Background */}
      <div className="bg-daytime" aria-hidden="true">
        {/* Sun */}
        <motion.div 
          className="day-sun"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          ☀️
        </motion.div>

        {/* Parallax Clouds */}
        <motion.div className="day-cloud cloud-1" animate={{ x: ['-10vw', '110vw'] }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}>☁️</motion.div>
        <motion.div className="day-cloud cloud-2" animate={{ x: ['-10vw', '110vw'] }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>☁️</motion.div>
        <motion.div className="day-cloud cloud-3" animate={{ x: ['-10vw', '110vw'] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>☁️</motion.div>

        {/* Hot Air Balloon (bobbing) */}
        <motion.div className="day-balloon" animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>🎈</motion.div>

        {/* Swaying Kite */}
        <motion.div className="day-kite" animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>🪁</motion.div>
      </div>

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
            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", bounce: 0.3 }}
          >
              <div className="shrine-roof">
                <div className="roof-scallop"></div>
              </div>
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
