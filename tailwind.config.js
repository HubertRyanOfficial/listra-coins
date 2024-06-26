/** @type {import('tailwindcss').Config} */

const colors = require("./colors");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sora: ["Sora-Regular"],
        soraSemibold: ["Sora-SemiBold"],
      },
    },
  },
  plugins: [],
};
