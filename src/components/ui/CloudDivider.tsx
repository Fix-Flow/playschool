"use client";

interface CloudDividerProps {
  fillColorVar?: string;
  className?: string;
  position?: "top" | "bottom" | "top-inverted";
  backgroundImage?: string;
}

export function CloudDivider({ 
  fillColorVar = "var(--paper)", 
  className = "", 
  position = "top",
  backgroundImage
}: CloudDividerProps) {
  const positioningStyles = position === "top" ? {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    transform: "translateY(-99%)",
    zIndex: 10,
    color: fillColorVar,
    lineHeight: 0,
  } : position === "top-inverted" ? {
    position: "absolute" as const,
    top: -3,
    left: 0,
    width: "100%",
    zIndex: 10,
    color: fillColorVar,
    lineHeight: 0,
  } : {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    width: "100%",
    transform: "translateY(99%) rotate(180deg)",
    zIndex: 10,
    color: fillColorVar,
    lineHeight: 0,
  };

  const pathD = position === "top-inverted"
    ? "M0,0 L0,100 a 80,80 0 0,1 120,-30 a 40,40 0 0,1 60,10 a 100,100 0 0,1 180,-40 a 50,50 0 0,1 80,-10 a 140,140 0 0,1 240,40 a 60,60 0 0,1 100,-20 a 110,110 0 0,1 190,30 a 50,50 0 0,1 80,10 a 90,90 0 0,1 150,10 L1200,0 Z"
    : "M0,120 L0,100 a 80,80 0 0,1 120,-30 a 40,40 0 0,1 60,10 a 100,100 0 0,1 180,-40 a 50,50 0 0,1 80,-10 a 140,140 0 0,1 240,40 a 60,60 0 0,1 100,-20 a 110,110 0 0,1 190,30 a 50,50 0 0,1 80,10 a 90,90 0 0,1 150,10 L1200,120 Z";

  const shadowFilter = position === "top-inverted"
    ? "drop-shadow(0px 12px 24px rgba(9, 34, 58, 0.25))"
    : "drop-shadow(0px -12px 24px rgba(9, 34, 58, 0.25))";

  const clipPathId = position === "top-inverted" ? "top-inverted-shadow-clip" : "standard-shadow-clip";

  return (
    <div className={`cloud-divider ${className}`} style={positioningStyles}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        style={{ 
          width: "100%", 
          height: "clamp(60px, 8vw, 120px)", 
          display: "block", 
          overflow: "visible", 
        }}
        aria-hidden="true"
      >
        <defs>
          {backgroundImage && (
            <pattern id="cloud-bg-pattern" patternUnits="userSpaceOnUse" width="1200" height="120">
              <image href={backgroundImage} x="0" y="0" width="1200" height="120" preserveAspectRatio="xMidYMid slice" />
            </pattern>
          )}
          {/* Clip path for top-inverted shadow: clips anything above y = 0 */}
          <clipPath id="top-inverted-shadow-clip">
            <rect x="-600" y="0" width="2400" height="400" />
          </clipPath>
          {/* Clip path for standard shadow: clips anything below y = 120 */}
          <clipPath id="standard-shadow-clip">
            <rect x="-600" y="-200" width="2400" height="320" />
          </clipPath>
        </defs>
        {/* 1. Filled path that casts the drop shadow, clipped to remove flat-edge shadows */}
        <path 
          d={pathD}
          fill="currentColor"
          filter={shadowFilter}
          clipPath={`url(#${clipPathId})`}
        />
        {/* 2. Opaque filled path (no filter, no clipping) that covers the shadow path and renders the smooth curves */}
        <path 
          d={pathD} 
          fill={backgroundImage ? "url(#cloud-bg-pattern)" : "currentColor"} 
        />
        {/* 3. A crisp stroked path (no filter) to act as a cut-paper highlight/shadow edge */}
        <path 
          d="M0,100 a 80,80 0 0,1 120,-30 a 40,40 0 0,1 60,10 a 100,100 0 0,1 180,-40 a 50,50 0 0,1 80,-10 a 140,140 0 0,1 240,40 a 60,60 0 0,1 100,-20 a 110,110 0 0,1 190,30 a 50,50 0 0,1 80,10 a 90,90 0 0,1 150,10"
          fill="none"
          stroke="rgba(9, 34, 58, 0.08)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
