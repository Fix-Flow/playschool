"use client";

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
        }, 450);
      }
      setProgress(currentProgress);
    }, 140);

    return () => clearInterval(timer);
  }, []);

  if (removed) return null;

  return (
    <div className={`loader ${hidden ? "hide" : ""}`} id="loader" aria-label="Website loading">
      <div className="loader-orbit">
        <span className="loader-star star-a">✦</span>
        <span className="loader-star star-b">✿</span>
        <span className="loader-star star-c">★</span>

        <div className="book-loader">
          <div className="book-page page-left"></div>
          <div className="book-page page-right"></div>
          <div className="book-spine"></div>

          <div className="book-world">
            <span className="tiny-sun"></span>
            <span className="tiny-cloud cloud-one"></span>
            <span className="tiny-cloud cloud-two"></span>
            <span className="tiny-house"></span>
            <span className="tiny-tree tree-one"></span>
            <span className="tiny-tree tree-two"></span>
            <span className="tiny-bus">🚌</span>
          </div>
        </div>

        <div className="loader-copy">
          <strong>Little Learners</strong>
          <p>Opening the storybook...</p>
        </div>

        <div className="loader-progress">
          <span id="loaderFill" style={{ width: `${progress}%` }}></span>
        </div>
      </div>
    </div>
  );
}
