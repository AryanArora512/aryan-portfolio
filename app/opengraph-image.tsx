import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.25), transparent 30%), radial-gradient(circle at top right, rgba(124,58,237,0.28), transparent 35%), linear-gradient(180deg, #050816, #091224)",
          color: "white",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            padding: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 74,
                  height: 74,
                  borderRadius: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 34,
                  fontWeight: 700,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                AA
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 22, color: "#a5f3fc" }}>Aryan Arora</div>
                <div style={{ fontSize: 18, color: "#cbd5e1" }}>Full Stack Mobile App Developer</div>
              </div>
            </div>
            <div
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                fontSize: 18,
                color: "#d1fae5",
                border: "1px solid rgba(52,211,153,0.22)",
                background: "rgba(52,211,153,0.12)",
              }}
            >
              Available for Freelance
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 900 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 70,
                lineHeight: 1.02,
                fontWeight: 700,
              }}
            >
              <span>Scalable Mobile Apps</span>
              <span>Real-Time Systems</span>
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.4, color: "#cbd5e1" }}>
              Flutter specialist building premium mobile apps, dashboards, APIs, and full-stack products for startups and businesses.
            </div>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            {["Flutter", "Next.js", "FastAPI", "Realtime"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "12px 18px",
                  borderRadius: 999,
                  fontSize: 20,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#e2e8f0",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
