"use client";

import "./Testimonials.scss";

const reviews = [
  {
    text: "My daughter loves coming to school every day! The teachers are so caring and the activities are amazing.",
    author: "Priya Sharma",
    role: "Parent of Nursery Student"
  },
  {
    text: "We noticed a huge improvement in our son's social skills and confidence within just two months.",
    author: "Rahul Verma",
    role: "Parent of Pre-KG Student"
  },
  {
    text: "The CCTV access gives us such peace of mind. It's truly a safe and wonderful environment.",
    author: "Anjali Gupta",
    role: "Parent of Playgroup Student"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      {/* Cartoon Space Background */}
      <div className="bg-stars">
        <div className="moon">
          <div className="rocket"></div>
        </div>
        <div className="astronaut"></div>
        
        <div className="star s1">⭐</div>
        <div className="star s2">✨</div>
        <div className="star s3">⭐</div>
        <div className="star s4">✨</div>
        <div className="star s5">⭐</div>
        <div className="star s6">✨</div>
        <div className="star s7">✨</div>
        <div className="star s8">⭐</div>
        <div className="star s9">✨</div>
        <div className="star s10">✨</div>
        <div className="star s11">⭐</div>
        <div className="star s12">✨</div>
      </div>

      <div className="testimonials-container">
        <div className="section-header text-center reveal">
          <div className="badge">Testimonials</div>
          <h2>What Parents Say</h2>
          <p>Don't just take our word for it. Hear from our happy families!</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, i) => (
            <div className={`review-card style-${i % 3}`} key={i}>
              <div className="shrine-roof">
                <div className="roof-scallop"></div>
              </div>
              <div className="card-content">
                <div className="quote-mark">"</div>
                <p className="review-text">{rev.text}</p>
                <div className="author-info">
                  <strong>{rev.author}</strong>
                  <span>{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
