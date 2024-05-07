/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-bg": "#A60311",
        logo: "#D92D07",
        background: "#D96907",
        text: "#D99C52",
        "article-bg": "#D9B752",
      },
    },
  },
  plugins: [],
};
