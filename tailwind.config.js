/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-bg": "#434A59",
        logo: "#D92D07",
        background: "#BFBFBF",
        text: "#F2F2F2",
        "article-bg": "#010A26",
      },
    },
  },
  plugins: [],
};
