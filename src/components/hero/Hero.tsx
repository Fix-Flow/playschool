"use client";

import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content reveal">
        <div className="hero-badge">
          <span className="dot"></span>
          Little Learners Play School
        </div>

        <h1>
          Where Little Minds <br />
          <em>Build Big Dreams</em>
        </h1>

        <p>
          A premium play school experience offering a safe, joyful environment for children aged 1.5 to 5.5 years.
        </p>

        <ul className="hero-highlights">
          <li>✨ 24/7 CCTV & Secure Campus</li>
          <li>✨ Activity-Based Learning</li>
          <li>✨ Trained & Caring Staff</li>
          <li>✨ Safe Transport Available</li>
        </ul>

        <div className="hero-actions">
          <a href="#admissions" className="btn btn-primary magnetic bouncy-btn">
            Admissions Open
            <span>🎈</span>
          </a>
        </div>
      </div>

      <div className="hero-photos reveal">
        <div className="photo-grid">
          {/* Placeholders for happy children photos */}
          <div className="photo-card p1">
            <div className="photo-placeholder">Photo 1</div>
          </div>
          <div className="photo-card p2">
             <div className="photo-placeholder">Photo 2</div>
          </div>
          <div className="photo-card p3">
             <div className="photo-placeholder">Photo 3</div>
          </div>
        </div>
      </div>
    </section>
  );
}
