/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#434A59",
        logo: "#D92D07",
        "light-gray": "#BFBFBF",
        white: "#F2F2F2",
        navy: "#010A26",
      },
    },
  },
  plugins: [],
};
