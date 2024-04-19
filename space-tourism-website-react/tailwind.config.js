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
        'white' : '#FFFFF',
      },
    },
  },
  plugins: [],
}
