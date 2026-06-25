"use client";
import "./Loader.scss";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    document.body.classList.add("locked");

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 9;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        
        setTimeout(() => {
          setHidden(true);
          document.body.classList.remove("locked");
          setTimeout(() => setRemoved(true), 500); // Wait for transition
        }, 250); // Reduced pause after hitting 100%
      }
      setProgress(currentProgress);
    }, 90); // Reduced interval for faster loading

    return () => clearInterval(timer);
  }, []);

  if (removed) return null;

  return (
    <div 
      className={`loader ${hidden ? "hide" : ""}`} 
      id="loader" 
      aria-label="Website loading"
      style={{
        background: "#ffffff", // Overriding global CSS to match typical video backgrounds
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ position: "relative", width: "500px", height: "400px", margin: "0 auto" }}>        
        {/* Main Tree with Animals (Foreground) */}
        <img 
          src="/cartoon_trees_with_animals.png" 
          alt="Main Tree" 
          style={{ 
            position: "absolute", 
            bottom: "40px", 
            left: "50%",
            transform: "translateX(-50%)",
            width: "50%", 
            height: "auto",
            objectFit: "contain",
            zIndex: 2
          }} 
        />
        
        {/* The Boy Video (Walking left side) */}
        <video 
          src="/Boy going to school.webm" 
          autoPlay 
          muted={true} 
          loop 
          playsInline 
          style={{ 
            position: "absolute",
            bottom: "30px", /* Sits him perfectly on the left slope of the grass */
            left: "50px",
            width: "170px", 
            height: "auto",
            zIndex: 10
          }}
        />
        
        {/* The Kid Cycling Video (Riding right side) */}
        <video 
          src="/kid_cycling.webm" 
          autoPlay 
          muted={true} 
          loop 
          playsInline 
          style={{ 
            position: "absolute",
            bottom: "30px", /* Grounds his bike wheels on the grass */
            right: "-30px",
            width: "290px", 
            height: "auto",
            zIndex: 10
          }}
        />
      </div>
      
      <div className="loader-copy" style={{ marginTop: "24px", textAlign: "center", zIndex: 3 }}>
        <strong>Tiny Learners</strong>
        <p>Getting ready for school...</p>
      </div>
    </div>
  );
}
