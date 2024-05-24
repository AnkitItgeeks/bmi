/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["\"Poetsen One\", sans-serif"],
        bodyFont: ["\"Poppins\", sans-serif"],
        buttonFont: ["\"Raleway\", sans-serif"],
        headingFont: ["\"Playfair Display\", serif"],
      },
    },
  },
  plugins: [],
}