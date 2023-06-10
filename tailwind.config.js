/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
