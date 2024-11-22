/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ['"Roboto"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "tomato" : "#ff6257",
        "charcoalGrey" : "#36384e",
        "slateGrey" : "#242742",
        "grey" : "#9294a0",
      }
    },
  },
  plugins: [],
}