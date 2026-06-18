"use client";

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
    <section className="activities-section" id="activities">
      <div className="activities-container">
        <div className="section-header text-center reveal">
          <h2>Joyful Activities</h2>
          <p>Every day brings a new opportunity to explore, create, and play!</p>
        </div>

        <div className="activities-grid reveal">
          {activities.map((act, i) => (
            <div className={`activity-card bg-${act.color}`} key={i}>
              <div className="icon-wrapper">{act.icon}</div>
              <h3>{act.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Playful zigzag separator */}
      <div className="zigzag-separator"></div>
    </section>
  );
}
