"use client";

import { motion } from "framer-motion";
import { CloudDivider } from "@/components/ui/CloudDivider";

import "./Programs.scss";

const programData = [
  {
    title: "Playgroup",
    age: "1.5 - 2.5 Yrs",
    time: "9:00 AM - 12:00 PM",
    color: "pink",
    icon: "🎨",
    desc: "Sensory play, social skills, and group activities."
  },
  {
    title: "Nursery",
    age: "2.5 - 3.5 Yrs",
    time: "9:00 AM - 12:30 PM",
    color: "yellow",
    icon: "🔤",
    desc: "Foundations in language, early math, and play."
  },
  {
    title: "Pre-KG",
    age: "3.5 - 4.5 Yrs",
    time: "9:00 AM - 1:00 PM",
    color: "blue",
    icon: "🚀",
    desc: "Reading readiness and cognitive development."
  },
  {
    title: "Daycare",
    age: "1.5 - 8 Yrs",
    time: "8:00 AM - 6:30 PM",
    color: "green",
    icon: "🏡",
    desc: "Safe, nurturing care with engaging activities."
  }
];

export default function Programs() {
  return (
    <section className="programs-section" id="programs" style={{ position: "relative" }}>

      <div className="programs-container">
        <motion.div 
        className="section-header text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge">Our Curriculum</span>
        <h2>Programs We Offer</h2>
        <p>Tailored learning experiences for every stage of your child&apos;s early development.</p>
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
