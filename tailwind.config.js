/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      Fraunces: ["Fraunces", "serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-graysih-blue": "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
