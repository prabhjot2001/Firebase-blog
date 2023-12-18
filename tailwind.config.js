/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black1: "rgb(0,0,0,0.8)",
        banner : "#161A30"
      },
      fontFamily:{
        title:`gt-spuer, Georgia, Cambria , Times New Roman, Times, serif;`,
        texts:`sohne, Helvetica Neue, Helvetica , Arial , sans-serif`,
      },
      gridTemplateColumns:{
        card : "repeat(auto-fit, minmax(280px , 1fr))",
      },
    },
  },
  plugins: [],
}