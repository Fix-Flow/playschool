"use client";

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
    <section className="programs-section" id="programs">
      <div className="section-header text-center reveal">
        <div className="badge">Our Curriculum</div>
        <h2>Programs We Offer</h2>
        <p>Tailored learning experiences for every stage of your child's early development.</p>
      </div>

      <div className="programs-grid reveal">
        {programData.map((prog, i) => (
          <div className={`program-card color-${prog.color}`} key={i}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
