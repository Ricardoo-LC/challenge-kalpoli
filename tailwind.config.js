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
        correct: "#6AAA64",
        present: "#CEB02C",
        absent: "#939B9F",
        empty: "#3b414f",
        instructions: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
