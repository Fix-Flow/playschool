"use client";

interface CloudDividerProps {
  fillColorVar?: string;
  className?: string;
  position?: "top" | "bottom";
}

export function CloudDivider({ fillColorVar = "var(--paper)", className = "", position = "top" }: CloudDividerProps) {
  const positioningStyles = position === "top" ? {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    transform: "translateY(-99%)",
    zIndex: 10,
    color: fillColorVar,
    lineHeight: 0,
  } : {};

  return (
    <div className={`cloud-divider ${className}`} style={positioningStyles}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        style={{ width: "100%", height: "clamp(60px, 8vw, 120px)", display: "block" }}
        aria-hidden="true"
      >
        <path 
          d="M0,120 L0,70 
             C 50,10 100,10 150,70
             C 200,-20 300,-20 350,60
             C 400,20 500,20 550,70
             C 650,-30 750,-30 850,60
             C 900,10 1000,10 1050,60
             C 1100,20 1150,20 1200,70
             L1200,120 Z" 
          fill="currentColor" 
        />
      </svg>
    </div>
  );
}
