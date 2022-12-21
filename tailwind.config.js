/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      headings: ["Black Ops One", "cursive"],
    },
    extend: {
      boxShadow: {
        skill: "0px 4px 4px rgba(0,0,0,0.17)",
        works: "4px 4px 10px rgb(0 0 0 / 50%)",
        links: "3px 3px 5px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        gray20: "#333333",
        owhite: "#F5F5F5",
        backg: "#6C6C6C",
        bgblack: "rgba(0, 0, 0, 0.5)",
        bgskills: "rgba(229, 227, 68, 0.8)",
      },
      backgroundImage: {
        bgfoundation: "url('/src/images/bg-foundation.svg')",
      },
    },
  },
  plugins: [],
};
