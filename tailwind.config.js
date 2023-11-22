/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: ["even"],
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
