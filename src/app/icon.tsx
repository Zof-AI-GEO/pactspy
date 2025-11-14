import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
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
