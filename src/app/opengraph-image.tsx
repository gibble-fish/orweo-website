import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ORWEO – Visuals that make an impact";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0D",
          gap: "32px",
        }}
      >
        {/* ORWEO Logo als SVG inline */}
        <svg
          viewBox="0 0 320 50"
          fill="none"
          width="480"
          height="75"
        >
          {/* O */}
          <path
            d="M8 25C8 13.954 14.954 7 22 7C29.046 7 36 13.954 36 25C36 36.046 29.046 43 22 43C14.954 43 8 36.046 8 25Z"
            stroke="#F3F3F0"
            strokeWidth="3"
            fill="none"
          />
          {/* R */}
          <path d="M58 7V43" stroke="#F3F3F0" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M58 7H70C77 7 82 12 82 18.5C82 25 77 30 70 30H58"
            stroke="#F3F3F0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M72 30L83 43" stroke="#F3F3F0" strokeWidth="3" strokeLinecap="round" />
          {/* W */}
          <path
            d="M102 7L111 38L122 18L133 38L142 7"
            stroke="#F3F3F0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* E - THREE BARS */}
          <rect x="164" y="7" width="28" height="3" rx="1.5" fill="#F3F3F0" />
          <rect x="164" y="23.5" width="22" height="3" rx="1.5" fill="#D4C3A1" />
          <rect x="164" y="40" width="28" height="3" rx="1.5" fill="#F3F3F0" />
          {/* O */}
          <path
            d="M218 25C218 13.954 224.954 7 232 7C239.046 7 246 13.954 246 25C246 36.046 239.046 43 232 43C224.954 43 218 36.046 218 25Z"
            stroke="#F3F3F0"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Claim */}
        <div
          style={{
            fontSize: "18px",
            letterSpacing: "0.35em",
            color: "#D4C3A1",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          Visuals that make an impact.
        </div>

        {/* Leistungszeile */}
        <div
          style={{
            fontSize: "13px",
            letterSpacing: "0.15em",
            color: "#77777A",
            marginTop: "16px",
          }}
        >
          IMMOBILIEN • ARCHITEKTUR • AUTOMOTIVE • 360° • LUFTAUFNAHMEN
        </div>
      </div>
    ),
    { ...size }
  );
}
