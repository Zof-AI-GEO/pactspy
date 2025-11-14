import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          borderRadius: "20%",
          letterSpacing: "0.05em",
        }}
      >
        PS
      </div>
    ),
    {
      ...size,
    }
  );
}
