/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        base: "#7B1E1E",
      },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        '2xl': '1440px',
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}

