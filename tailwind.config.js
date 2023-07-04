/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#5a5a5a",
          600: "#484848",
          700: "#252525",
          800: "#181818",
          900: "#121212",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    ({ addUtilities }) => {
      addUtilities({
        ".flex-bet": {
          "@apply flex justify-between items-center": {},
        },
        ".flex-cen": {
          "@apply flex justify-center items-center": {},
        },
        ".flex-start": {
          "@apply flex justify-start items-center": {},
        },
        ".flex-end": {
          "@apply flex justify-end items-center": {},
        },
        ".flex-colm": {
          "@apply flex flex-col": {},
        },
      });
    },
  ],
};
