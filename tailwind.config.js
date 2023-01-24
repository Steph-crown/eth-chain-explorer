/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#151515",
        "black-2": "#1B1B1D",
        purple: "#8250DF",
        white: "#FFFFFF",
        "white-2": "##777778",
        "border-blue": "#58A6FF",
        red: "#CF222E",
        blue: "#3B99FC",
      },
      fontFamily: {
        inter: [
          "Inter",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Noto Sans",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
