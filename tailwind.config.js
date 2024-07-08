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
          fondo: '#5C0000',
          DEFAULT: '#c084fc',
          dark: '#9333ea',
          verde: '#208253',
          came: '#854747',
        },
      },
    },
  },
  plugins: [],
}
