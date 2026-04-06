import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slateNight: "#060816",
        panel: "#0D1224",
        line: "rgba(255,255,255,0.08)",
        accent: "#7C3AED",
        cyanGlow: "#22D3EE",
        emeraldGlow: "#34D399",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.45)",
        glass: "0 20px 80px rgba(8, 15, 31, 0.45)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.28), transparent 35%), radial-gradient(circle at 80% 0%, rgba(34, 211, 238, 0.18), transparent 30%), radial-gradient(circle at 50% 100%, rgba(52, 211, 153, 0.18), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
