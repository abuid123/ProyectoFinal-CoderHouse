/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'cart': 'repeat(1, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}

