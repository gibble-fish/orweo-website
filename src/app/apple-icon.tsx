import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0D",
          borderRadius: "36px",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 512 512" fill="none">
          {/* Top bar - white */}
          <rect x="128" y="158" width="256" height="32" rx="16" fill="#F3F3F0" />
          {/* Middle bar - champagne (shorter) */}
          <rect x="128" y="240" width="200" height="32" rx="16" fill="#D4C3A1" />
          {/* Bottom bar - white */}
          <rect x="128" y="322" width="256" height="32" rx="16" fill="#F3F3F0" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
