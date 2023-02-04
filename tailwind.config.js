/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    }
  },
  plugins: [],
}