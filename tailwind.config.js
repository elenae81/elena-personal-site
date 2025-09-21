/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8DB",
      },
      fontFamily: {
        sans: ["Karrik", "Work Sans", "ui-sans-serif", "system-ui"],
        heading: ["Mattone Bold", "ui-sans-serif", "system-ui"],
        serif: ["Georgia", "ui-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
