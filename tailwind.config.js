/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        secondary: '#8892b0',
        dark: '#1a1a1a',
        darker: '#2a2a2a',
      }
    },
  },
  plugins: [],
}

