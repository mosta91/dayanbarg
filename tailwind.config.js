// https://tailwindcss.com/docs/guides/gatsby
module.exports = {
  darkMode: "class",
  content: [
    "./src/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/**/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      fa: ["shabnam", "estedad"],
      code: ["Fira Mono"],
    },
  },
  plugins: [],
};
