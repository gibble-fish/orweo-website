/**
 * ORWEO Wortmarke – Modern/Tech Variante 3
 * Geometrische, individuelle Buchstaben mit großem Abstand
 * Charakteristisches E: drei horizontale Balken (weiß / champagner / weiß)
 * Keine vertikale Linie beim E
 */
export function OrweoLogo({
  className = "h-6",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark" | "champagne";
}) {
  const mainColor =
    variant === "dark"
      ? "#0B0B0D"
      : variant === "champagne"
      ? "#D4C3A1"
      : "#F3F3F0";

  const champagne = "#D4C3A1";

  // When variant is champagne, all bars are champagne
  const eTopColor = variant === "champagne" ? champagne : mainColor;
  const eMiddleColor = champagne; // Always champagne - brand mark
  const eBottomColor = variant === "champagne" ? champagne : mainColor;

  return (
    <svg
      viewBox="0 0 270 50"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ORWEO"
      preserveAspectRatio="xMidYMid meet"
      style={{ transform: "scaleY(0.75)" }}
    >
      {/* O - rounded rectangle with straight sides and rounded corners */}
      <rect
        x="4"
        y="9"
        width="38"
        height="32"
        rx="10"
        stroke={mainColor}
        strokeWidth="4"
        fill="none"
      />

      {/* R - open top-left gap: stem starts below the bowl, bowl is separate */}
      <g>
        {/* Vertical stem (starts at middle bowl line, goes down) */}
        <path
          d="M62 29V41"
          stroke={mainColor}
          strokeWidth="4"
          strokeLinecap="square"
        />
        {/* Bowl: horizontal top + rounded right side coming back to stem at middle */}
        <path
          d="M62 9H78C84 9 88 13 88 19V20C88 26 84 29 78 29H62"
          stroke={mainColor}
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Diagonal leg from junction point going right-down */}
        <path
          d="M84 29L96 41"
          stroke={mainColor}
          strokeWidth="4"
          strokeLinecap="square"
        />
      </g>

      {/* W - wide angular geometric */}
      <path
        d="M108 9L118 38L129 16L140 38L150 9"
        stroke={mainColor}
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="round"
        fill="none"
      />

      {/* E - THREE HORIZONTAL BARS ONLY (brand mark) */}
      {/* Top bar - white/main */}
      <rect
        x="170"
        y="9"
        width="28"
        height="4"
        rx="0"
        fill={eTopColor}
      />
      {/* Middle bar - CHAMPAGNE GOLD (brand accent) */}
      <rect
        x="170"
        y="23"
        width="22"
        height="4"
        rx="0"
        fill={eMiddleColor}
      />
      {/* Bottom bar - white/main */}
      <rect
        x="170"
        y="38"
        width="28"
        height="4"
        rx="0"
        fill={eBottomColor}
      />

      {/* O - second, matching first (rounded rectangle with straight sides) */}
      <rect
        x="220"
        y="9"
        width="38"
        height="32"
        rx="10"
        stroke={mainColor}
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

export function OrweoLogoWithClaim({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark" | "champagne";
}) {
  const claimColor =
    variant === "dark" ? "#0B0B0D" : "#D4C3A1";

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <OrweoLogo className="h-10 md:h-14" variant={variant} />
      <span
        className="text-[10px] md:text-xs tracking-[0.35em] uppercase font-light"
        style={{ color: claimColor }}
      >
        Visuals that make an impact.
      </span>
    </div>
  );
}

/**
 * ORWEO Icon – Geometric E (three bars)
 * For favicon, social media profile pictures
 */
export function OrweoIcon({
  className = "w-8 h-8",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const bgColor = variant === "dark" ? "#F3F3F0" : "#0B0B0D";
  const barColor = variant === "dark" ? "#0B0B0D" : "#F3F3F0";
  const champagne = "#D4C3A1";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ORWEO Icon"
    >
      <rect width="64" height="64" rx="12" fill={bgColor} />
      {/* Top bar */}
      <rect x="16" y="18" width="32" height="4" rx="2" fill={barColor} />
      {/* Middle bar - champagne */}
      <rect x="16" y="30" width="26" height="4" rx="2" fill={champagne} />
      {/* Bottom bar */}
      <rect x="16" y="42" width="32" height="4" rx="2" fill={barColor} />
    </svg>
  );
}
