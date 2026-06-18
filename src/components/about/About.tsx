"use client";

import "./About.scss";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-visual reveal">
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
        </div>

        <div className="about-content reveal">
          <h2>Our Story</h2>
          <p className="lead">
            Welcome to Little Learners, where every day is a new adventure!
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
        </div>

      </div>
    </section>
  );
}
