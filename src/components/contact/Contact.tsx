"use client";

import "./Contact.scss";

export default function Contact() {
  const whatsappNumber = "+1234567890"; // Demo number as requested
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi!%20I'm%20interested%20in%20admissions.`;

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-container reveal">
        
        <div className="contact-info">
          <h2>Get in Touch!</h2>
          <p className="lead">We'd love to hear from you. Drop us a message or visit our campus.</p>

          <div className="info-items">
            <div className="item">
              <span className="icon">📍</span>
              <div>
                <strong>Visit Us</strong>
                <p>123 Learning Lane, Playville, ST 12345</p>
              </div>
            </div>
            
            <div className="item">
              <span className="icon">📞</span>
              <div>
                <strong>Call Us</strong>
                <p>+1 234 567 890</p>
              </div>
            </div>
            
            <div className="item">
              <span className="icon">✉️</span>
              <div>
                <strong>Email Us</strong>
                <p>hello@littlelearners.demo</p>
              </div>
            </div>
            
            <div className="item">
              <span className="icon">⏰</span>
              <div>
                <strong>Working Hours</strong>
                <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="cta-wrapper">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp bouncy-btn">
              <span>💬</span> Enroll Now via WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-map">
          {/* Placeholder for Google Maps iframe */}
          <div className="map-placeholder">
            <div className="inner">
              <span style={{ fontSize: "3rem" }}>🗺️</span>
              <p>Google Maps Embed Here</p>
            </div>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Learners Play School. All rights reserved.</p>
      </div>
    </footer>
  );
}
