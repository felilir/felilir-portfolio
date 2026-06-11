import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-blue": "#1400FF",
        "accent-green": "#6EFF00",
        black: "#0A0A0A",
        white: "#F5F5F5",
        mid: "#1C1C1C",
        muted: "#5A5A5A",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
