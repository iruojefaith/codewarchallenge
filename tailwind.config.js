/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Bg': "url('/Assets/Photo.jpg')",
      }
    },
  },
  plugins: [],
}
