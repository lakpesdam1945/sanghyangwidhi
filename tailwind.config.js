/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "767px",
        laptop: "1024px",
        dekstop: "1440px",
        "4K": "2560px",
      },
      maxWidth: {
        mobile: "320px",
        tablet: "767px",
        laptop: "1024px",
        dekstop: "1440px",
        "4K": "2560px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
