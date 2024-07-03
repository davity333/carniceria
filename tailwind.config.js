/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          fondo: '#C29292',
          DEFAULT: '#c084fc',
          dark: '#9333ea',
        },
      },
    },
  },
  plugins: [],
}
