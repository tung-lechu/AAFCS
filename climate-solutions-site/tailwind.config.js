/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2F5233',   // Dark Green (Text)
          secondary: '#76B041', // Lighter Green (Leaves/Italic text)
          accent: '#B1D8B7',    // Very light green (Borders)
          light: '#F1F8F2',     // Background tint
        }
      }
    },
  },
  plugins: [],
}