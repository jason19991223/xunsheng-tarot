import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#10172e",
        plum: "#2a1748",
        violetdeep: "#4b287d",
        mistgold: "#c8a96a",
        parchment: "#f5efe3",
        ink: "#17121f"
      },
      fontFamily: {
        sans: ["system-ui", "Noto Sans TC", "Microsoft JhengHei", "sans-serif"],
        serif: ["Georgia", "Noto Serif TC", "PMingLiU", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(10, 13, 31, 0.28)"
      }
    }
  },
  plugins: [typography]
};

export default config;
