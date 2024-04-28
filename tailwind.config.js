/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'primary-bg':'#0B0D17',
        'primary-white' : '#D0D6F9',
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
      },
      ringWidth: {
        'sm': '48px',
        'lg': '77px',
        'lg': '88px',
      }
    },
  },
  plugins: [],
}
