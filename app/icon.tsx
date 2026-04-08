import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.35), transparent 35%), radial-gradient(circle at bottom right, rgba(124,58,237,0.5), transparent 40%), linear-gradient(180deg, #050816, #091224)",
        }}
      >
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 150,
            fontWeight: 700,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 20px 80px rgba(8,15,31,0.45)",
          }}
        >
          AA
        </div>
      </div>
    ),
    size,
  );
}
