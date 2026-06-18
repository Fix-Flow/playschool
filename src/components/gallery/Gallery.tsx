"use client";

import "./Gallery.scss";

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="section-header text-center reveal">
          <div className="badge">Memories</div>
          <h2>Our Happy Moments</h2>
          <p>A glimpse into the magical world of Little Learners.</p>
        </div>

        <div className="gallery-grid reveal">
          <div className="gallery-item large">
            <div className="photo-placeholder">Classroom Photo</div>
          </div>
          <div className="gallery-item">
            <div className="photo-placeholder">Outdoor Play</div>
          </div>
          <div className="gallery-item">
            <div className="photo-placeholder">Annual Day</div>
          </div>
          <div className="gallery-item wide">
            <div className="photo-placeholder">Festival Video/Photo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
