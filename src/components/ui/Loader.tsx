"use client";
import "./Loader.scss";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.classList.add("locked");

    let currentProgress = 0;
    const timer = setInterval(() => {
      // Increments by 4-9% each step to take ~1.8 seconds to load
      currentProgress += Math.floor(Math.random() * 6) + 4;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        
        setTimeout(() => {
          setHidden(true);
          document.body.classList.remove("locked");
          setTimeout(() => setRemoved(true), 600); // Wait for transition
        }, 250); // Pause at 100%
      }
      setProgress(currentProgress);
    }, 90); // 90ms ticks

    // Wait 300ms for browser to start rendering videos/images, then fade them in together
    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => {
      clearInterval(timer);
      clearTimeout(showTimer);
    };
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
      {/* Visual Sync Wrapper to fade tree, characters, and text at the exact same millisecond */}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.4s ease-out",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: showContent ? "auto" : "none"
        }}
      >
        <div className="loader-container">        
          {/* Main Tree with Animals (Foreground) */}
          <img 
            src="/cartoon_trees_with_animals.webp" 
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
          
          
          {/* The Boy (Walking left side) */}
          <img 
            src="/boy_walking.webp" 
            alt="Boy walking to school"
            style={{ 
              position: "absolute",
              bottom: "30px", /* Sits him perfectly on the left slope of the grass */
              left: "50px",
              width: "170px", 
              height: "auto",
              zIndex: 10
            }}
          />
          
          {/* The Kid Cycling (Riding right side) */}
          <img 
            src="/kid_cycling.webp" 
            alt="Kid cycling"
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
    </div>
  );
}
