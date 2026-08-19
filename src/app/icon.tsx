import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0D",
          borderRadius: "6px",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="7" y="9" width="18" height="3" rx="1.5" fill="#F3F3F0" />
          <rect x="7" y="14.5" width="14" height="3" rx="1.5" fill="#D4C3A1" />
          <rect x="7" y="20" width="18" height="3" rx="1.5" fill="#F3F3F0" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
