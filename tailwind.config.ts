import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#17122b",
        plum: "#38214f",
        violetdeep: "#4a2b6f",
        mistgold: "#c8a96a",
        cream: "#fbf3e7",
        rose: "#d8a3a7",
        indigo: "#20284c",
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
  plugins: []
};

export default config;
