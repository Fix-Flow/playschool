"use client";

import { motion } from "framer-motion";
import { FloatingShape } from "@/components/ui/FloatingShapes";
import { CloudDivider } from "@/components/ui/CloudDivider";
import "./About.scss";

export default function About() {
  return (
    <section className="about-section" id="about" style={{ position: "relative" }}>
      <CloudDivider fillColorVar="var(--bg-pale-green)" />
      {/* Background Shapes */}
      <FloatingShape type="rainbow" colorVar="var(--logo-red)" size={180} top="-10px" left="-50px" duration={10} delay={0} />
      <FloatingShape type="squiggle" colorVar="var(--logo-blue)" size={80} top="20%" right="5%" duration={12} delay={2} />
      <FloatingShape type="cloud" colorVar="var(--logo-navy)" size={140} bottom="10%" left="10%" duration={15} delay={1} />
      <FloatingShape type="cross" colorVar="var(--logo-yellow)" size={40} bottom="20%" right="15%" duration={9} delay={3} />

      <div className="about-container">
        
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
        >
          <div className="founder-card">
            <div className="photo-placeholder">Founder Photo</div>
            <div className="founder-info">
              <h3>Jane Doe</h3>
              <p>Founder & Principal</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="deco-circle c1"></div>
          <div className="deco-circle c2"></div>
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.2 }}
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
              <p>Child-centric, activity-based learning that honors every child's unique pace.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
