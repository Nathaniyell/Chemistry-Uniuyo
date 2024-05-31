import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1d4ed8",
        secondary: "#ea580c",
        darkBlue: "#1e3a8a",
        grayLine: "rgb(219, 213, 209)",
        orange: { 500: "#ff8c38" },
      },
      backgroundColor: {
        rgbaBackground: "rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        serif: ["var(--font-lusitana)"],
      },
      screens: {
        xs: "480px",
      },
      boxShadow: {
        xs: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        bounceRotate: {
          "0%": {
            transform: "translateY(-25%)",
            rotate: "45deg",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            rotate: "0deg",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
          "100%": {
            transform: "translate(100%, -25%)",
            rotate: "-135deg",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
