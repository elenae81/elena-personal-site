/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Work Sans', 'ui-sans-serif', 'system-ui'],
      'archivo': ['Archivo Black', 'ui-sans-serif', 'system-ui'],
      'serif': ['Georgia', 'ui-serif']
    }
  },
  plugins: [],
}