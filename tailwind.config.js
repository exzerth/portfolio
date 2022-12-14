/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        skill: "0px 4px 4px rgba(0,0,0,0.17)",
      },
      colors: {
        gray20: "#333333",
      },
    },
  },
  plugins: [],
};
