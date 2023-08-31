/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      margin: {
        'min35px': '-35px',
      },
    },
  },
  plugins: [],
}

