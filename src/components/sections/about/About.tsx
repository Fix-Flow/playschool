"use client";

import { motion } from "framer-motion";
import { FloatingShape } from "@/components/ui/FloatingShapes";
import { CloudDivider } from "@/components/ui/CloudDivider";
import "./About.scss";

export default function About() {
  return (
    <section className="about-section" id="about" style={{ position: "relative" }}>
      <CloudDivider fillColorVar="var(--bg-pale-green)" />

      <div className="about-container">
        
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="founder-card">
            <div className="photo-wrapper">
              <img src="/principal.webp" alt="Principal and student" className="founder-photo" />
            </div>
            <div className="founder-info">
              <h3>Bhavani</h3>
              <p>Founder & Principal</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="deco-circle c1"></div>
          <div className="deco-circle c2"></div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2>Our Story</h2>
          <p className="lead">
            Welcome to Tiny Learners, where every day is a new adventure!
          </p>
          <p>
            Founded with a passion for early childhood development, our school is designed 
            to be a second home for your child. We believe in nurturing curiosity, creativity, 
            and character through a balanced blend of play and structured learning.
          </p>
          
          <div className="values-grid">
            <div className="value-item">
              <span className="icon">🌟</span>
              <h4>Our Mission</h4>
              <p>To foster a lifelong love for learning in a safe, joyful space.</p>
            </div>
            <div className="value-item">
              <span className="icon">🧠</span>
              <h4>Teaching Philosophy</h4>
              <p>Child-centric, activity-based learning that honors every child&apos;s unique pace.</p>
            </div>
          </div>
        </motion.div>

      </div>

      <CloudDivider position="bottom" fillColorVar="var(--bg-pale-blue)" />
    </section>
  );
}
