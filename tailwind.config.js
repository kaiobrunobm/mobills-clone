/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1c1c1e",
        "secondary-bg": "#2c2c2e",
        "primary-text": "#9B9A9F",
        "income-color": "#68B966",
        "expense-color": "#EE534F",
        "mobills-color": "#6316D7",
        "card-section-color": "#26A59A",
        "card-section-secondary-color": "#3b3b3d",
        "navbar-hover": "#3d3d3e",
      },
    },
  },
  plugins: [],
};
