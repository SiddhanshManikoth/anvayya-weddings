const FloralCorner = ({ position = "top-left", className = "" }: { position?: "top-left" | "bottom-right" | "top-right" | "bottom-left"; className?: string }) => {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scale(-1, 1)",
    "bottom-left": "scale(1, -1)",
    "bottom-right": "scale(-1, -1)",
  };

  const positions: Record<string, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <svg
      className={`absolute ${positions[position]} pointer-events-none ${className}`}
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      style={{ transform: transforms[position] }}
    >
      {/* Main branch */}
      <path
        d="M20 10 C60 30, 80 60, 100 100 C110 130, 105 160, 90 180"
        stroke="hsl(var(--primary) / 0.3)"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M10 40 C40 50, 70 80, 85 120"
        stroke="hsl(var(--primary) / 0.25)"
        strokeWidth="0.8"
        fill="none"
      />
      {/* Leaves */}
      <path
        d="M50 25 C55 15, 70 12, 75 20 C70 28, 55 30, 50 25Z"
        fill="hsl(var(--primary) / 0.12)"
        stroke="hsl(var(--primary) / 0.25)"
        strokeWidth="0.6"
      />
      <path
        d="M70 50 C78 40, 95 38, 98 48 C92 56, 78 55, 70 50Z"
        fill="hsl(var(--primary) / 0.1)"
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="0.6"
      />
      <path
        d="M30 55 C25 45, 35 32, 42 38 C44 48, 35 58, 30 55Z"
        fill="hsl(var(--primary) / 0.1)"
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="0.6"
      />
      <path
        d="M90 85 C98 72, 115 70, 118 82 C112 92, 98 90, 90 85Z"
        fill="hsl(var(--primary) / 0.08)"
        stroke="hsl(var(--primary) / 0.18)"
        strokeWidth="0.6"
      />
      {/* Rose */}
      <circle cx="55" cy="40" r="8" fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary) / 0.2)" strokeWidth="0.5" />
      <path d="M52 38 C54 34, 58 34, 58 38 C58 42, 54 42, 52 38Z" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary) / 0.25)" strokeWidth="0.4" />
      <path d="M50 40 C52 36, 56 37, 56 41 C55 44, 51 43, 50 40Z" fill="hsl(var(--primary) / 0.12)" stroke="hsl(var(--primary) / 0.2)" strokeWidth="0.4" />
      {/* Small dots (gold accents) */}
      <circle cx="35" cy="18" r="1.5" fill="hsl(var(--warm-gold) / 0.4)" />
      <circle cx="80" cy="30" r="1" fill="hsl(var(--warm-gold) / 0.35)" />
      <circle cx="25" cy="65" r="1.2" fill="hsl(var(--warm-gold) / 0.3)" />
      <circle cx="105" cy="95" r="1" fill="hsl(var(--warm-gold) / 0.25)" />
    </svg>
  );
};

export default FloralCorner;
