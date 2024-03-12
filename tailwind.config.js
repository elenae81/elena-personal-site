/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Karrik", "Work Sans", "ui-sans-serif", "system-ui"],
      heading: ["Mattone Bold", "ui-sans-serif", "system-ui"],
      serif: ["Georgia", "ui-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
