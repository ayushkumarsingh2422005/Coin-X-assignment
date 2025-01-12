/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'koinx-blue': '#0052FE',
        'koinx-gray': '#EFF2F5',
      }
    },
  },
  plugins: [],
} 