import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    },
    extend: {
      colors: {
        slateNight: "#060816",
        panel: "#0D1224",
        line: "rgba(255,255,255,0.08)",
        accent: "#7C3AED",
        cyanGlow: "#22D3EE",
        emeraldGlow: "#34D399",
        // Semantic Tokens
        surface: {
          50: "rgba(255,255,255,0.02)",
          100: "rgba(255,255,255,0.04)",
          200: "rgba(255,255,255,0.08)",
          300: "rgba(255,255,255,0.12)",
        },
        brand: {
          DEFAULT: "#ffffff",
          muted: "#94a3b8",
        },
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }], // 10px
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.45)",
        glass: "0 20px 80px rgba(8, 15, 31, 0.45)",
        focus: "0 0 0 2px #22D3EE",
      },
      transitionDuration: {
        250: "250ms",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.28), transparent 35%), radial-gradient(circle at 80% 0%, rgba(34, 211, 238, 0.18), transparent 30%), radial-gradient(circle at 50% 100%, rgba(52, 211, 153, 0.18), transparent 28%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
