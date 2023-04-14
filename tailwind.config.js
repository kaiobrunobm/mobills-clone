/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#18171C",
        "secondary-bg": "#1C1C1E",
        "primary-text": "#9B9A9F",
        "income-color": "#68B966",
        "expense-color": "#EE534F",
        "mobills-color": "#6316D7",
        "card-section-color": "#26A59A",
        "card-section-secondary-color": "#232325",
      },
    },
  },
  plugins: [],
};
