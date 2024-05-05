/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-heart": {
          DEFAULT: "#7b22d3",
          50: "#faf5ff",
          100: "#f2e8ff",
          200: "#e8d5ff",
          300: "#d6b4fe",
          400: "#bc84fc",
          500: "#a354f8",
          600: "#8d32eb",
          700: "#6720a9",
          800: "#551c87",
          900: "#380764",
        },
        alabaster: {
          DEFAULT: "#f9f9f9",
          50: "#efefef",
          100: "#dcdcdc",
          200: "#bdbdbd",
          300: "#989898",
          400: "#7c7c7c",
          500: "#656565",
          600: "#525252",
          700: "#464646",
          800: "#3d3d3d",
          900: "#292929",
        },
        "mine-shaft": {
          DEFAULT: "#313131",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
        },
      },
      fontFamily: {
        sora: ["Sora-Regular"],
        soraSemibold: ["Sora-SemiBold"],
      },
    },
  },
  plugins: [],
};
