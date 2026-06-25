"use client";

import { motion } from "framer-motion";
import { FloatingShape } from "@/components/ui/FloatingShapes";
import { CloudDivider } from "@/components/ui/CloudDivider";
import "./Activities.scss";

const activities = [
  { name: "Arts & Crafts", icon: "🎨", color: "pink" },
  { name: "Dance & Music", icon: "🎵", color: "purple" },
  { name: "Storytelling", icon: "📖", color: "blue" },
  { name: "Outdoor Play", icon: "⚽", color: "green" },
  { name: "Festivals", icon: "🎊", color: "orange" },
  { name: "Field Trips", icon: "🚌", color: "yellow" },
];

export default function Activities() {
  return (
    <section className="activities-section" id="activities" style={{ position: "relative" }}>
      <CloudDivider fillColorVar="var(--bg-pale-blue)" />
      {/* Background Shapes */}
      <FloatingShape type="squiggle" colorVar="var(--logo-navy)" size={100} top="10%" left="-20px" duration={12} delay={1} />
      <FloatingShape type="kite" colorVar="var(--logo-red)" size={120} top="-30px" right="10%" duration={14} delay={2} />
      <FloatingShape type="ring" colorVar="var(--logo-blue)" size={160} bottom="-50px" right="-50px" duration={15} delay={0} />
      <FloatingShape type="triangle" colorVar="var(--logo-green)" size={60} bottom="20%" left="15%" duration={9} delay={3} />

      <div className="activities-container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Joyful Activities</h2>
          <p>Every day brings a new opportunity to explore, create, and play!</p>
        </motion.div>

        <div className="activities-grid">
          {activities.map((act, i) => (
          <motion.div 
            className={`activity-card bg-${act.color}`} 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.5 }}
          >
              <div className="icon-wrapper">{act.icon}</div>
              <h3>{act.name}</h3>
          </motion.div>
          ))}
        </div>
      </div>
      
      {/* Playful zigzag separator */}
      <div className="zigzag-separator"></div>
    </section>
  );
}
