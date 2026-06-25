/**
 * Wavy SVG divider between sections.
 * Creates a playful, organic transition instead of hard lines.
 */

interface WaveDividerProps {
  /** Fill color for the wave (should match the NEXT section's background) */
  fillColor?: string;
  /** Flip vertically for top-of-section usage */
  flip?: boolean;
  /** Optional extra class names */
  className?: string;
}

export default function WaveDivider({
  fillColor = '#FFF0F3',
  flip = false,
  className = '',
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-full h-12 sm:h-16 md:h-20"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
