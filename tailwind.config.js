/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#9282ff",
        highlight: "#01c8ef",
        darkest: "#0a192f",
        dark: "#134659",
        mid: "#aab4c6",
        light: "#d1d8e4",
        lightest: "#fff",
        link: "#80ace0",
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        inter: ["var(--inter)"],
        space: ["var(--space_grotesk)"],
      },
      animation: {
        disappear: "fade-out 2s 3s linear forwards",
      },
      keyframes: {
        "fade-out": {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      },
    },
  },
  plugins: [],
};
