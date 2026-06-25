"use client";

import { motion } from "framer-motion";
import { FloatingShape } from "@/components/ui/FloatingShapes";
import { CloudDivider } from "@/components/ui/CloudDivider";
import "./Programs.scss";

const programData = [
  {
    title: "Playgroup",
    age: "1.5 - 2.5 Years",
    time: "9:00 AM - 12:00 PM",
    color: "pink",
    icon: "🎨",
    desc: "A gentle introduction to a structured environment focusing on sensory play and social skills."
  },
  {
    title: "Nursery",
    age: "2.5 - 3.5 Years",
    time: "9:00 AM - 12:30 PM",
    color: "yellow",
    icon: "🔤",
    desc: "Building foundations in language, math concepts, and independent learning through exploration."
  },
  {
    title: "Pre-KG",
    age: "3.5 - 4.5 Years",
    time: "9:00 AM - 1:00 PM",
    color: "blue",
    icon: "🚀",
    desc: "Advanced cognitive development, reading readiness, and problem-solving activities."
  },
  {
    title: "Daycare",
    age: "1.5 - 8.0 Years",
    time: "8:00 AM - 6:30 PM",
    color: "green",
    icon: "🏡",
    desc: "A safe, nurturing extended-care program with meals, rest, and engaging after-school activities."
  }
];

export default function Programs() {
  return (
    <section className="programs-section" id="programs" style={{ position: "relative" }}>
      <CloudDivider fillColorVar="var(--paper)" />
      {/* Background Shapes */}
      <FloatingShape type="triangle" colorVar="var(--logo-yellow)" size={120} top="-10px" right="-40px" duration={11} delay={1} />
      <FloatingShape type="ring" colorVar="var(--logo-green)" size={200} bottom="-80px" left="-80px" duration={14} delay={0} />
      <FloatingShape type="pencil" colorVar="var(--logo-navy)" size={100} top="30%" left="5%" duration={13} delay={2} />
      <FloatingShape type="cross" colorVar="var(--logo-red)" size={50} bottom="30%" right="8%" duration={10} delay={4} />

      <div className="programs-container">
        <motion.div 
        className="section-header text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="badge">Our Curriculum</div>
        <h2>Programs We Offer</h2>
        <p>Tailored learning experiences for every stage of your child's early development.</p>
      </motion.div>

      <div className="programs-grid">
        {programData.map((prog, i) => (
          <motion.div 
            className={`program-card color-${prog.color}`} 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15, type: "spring", bounce: 0.4 }}
          >
            <div className="card-icon">{prog.icon}</div>
            <h3>{prog.title}</h3>
            <p className="desc">{prog.desc}</p>
            <div className="card-details">
              <div className="detail">
                <span>🎂</span>
                <strong>{prog.age}</strong>
              </div>
              <div className="detail">
                <span>⏰</span>
                <strong>{prog.time}</strong>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
