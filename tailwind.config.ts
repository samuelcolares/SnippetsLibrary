import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        floatUp: {
          "0%": { top: "100vh", opacity: "0" },
          "25%": { opacity: "1" },
          "50%": { top: "0vh", opacity: " .8" },
          "75%": { opacity: "1" },
          "100%": { top: "-100vh", opacity: "0" },
        },
        floatLeft: {
          "0%": { left: "100%", opacity: "0" },
          "25%": { opacity: "1" },
          "50%": { left: "0%", opacity: " .8" },
          "75%": { opacity: "1" },
          "100%": { left: "-100%", opacity: "0" },
        },
      },
      animation: {
        in: "fadeIn 1 1s ease-out",
        x1: "floatUp 4s infinite linear",
        x2: "floatUp 7s infinite linear",
        x3: "floatUp 2.5s infinite linear",
        x4: "floatUp 4.5s infinite linear",
        x5: "floatUp 8s infinite linear",
        x6: "floatUp 3s infinite linear",
        x7: "floatUp 5.3s infinite linear",
        x8: "floatUp 4.7s infinite linear",
        x9: "floatUp 4.1s infinite linear",
        y1: "floatLeft 8s infinite linear",
        y2: "floatLeft 14s infinite linear",
        y3: "floatLeft 12s infinite linear",
        y4: "floatLeft 10s infinite linear",
        y5: "floatLeft 20s infinite linear",
        y6: "floatLeft 13s infinite linear",
        y7: "floatLeft 15.3s infinite linear",
        y8: "floatLeft 12.7s infinite linear",
        y9: "floatLeft 7.1s infinite linear",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
