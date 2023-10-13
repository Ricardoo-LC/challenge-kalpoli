/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
      colors: {
        empty: "#3b414f",
        absent: "#939B9F",
        present: "#CEB02C",
        correct: "#6AAA64",
      },
    },
  },
  plugins: [],
};
