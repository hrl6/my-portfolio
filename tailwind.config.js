const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#64ffda',
        secondary: '#8892b0',
        dark: '#1a1a1a',
        darker: '#2a2a2a',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      //custom font format
      fontSize: {
        'heading-lg': [
          '2.5rem',
          {
            lineHeight: '1.2',
            fontWeight: '700',
            letterSpacing: '-0.02em',
          },
        ],
      },
      // keyframes: {
      //   slideInFromLeft: {
      //     '0%': {
      //       transform: 'translateX(-20%)',
      //       opacity: '0',
      //     },
      //     '100%': {
      //       transform: 'translateX(0)',
      //       opacity: '1',
      //     },
      //   },

      //   slideUpFrom: {
      //     '0%': {
      //       transform: 'translateY(10%)',
      //       opacity: '0',
      //     },
      //     '100%': {
      //       transform: 'translateY(0)',
      //       opacity: '1',
      //     },
      //   },
      // },
      // animation: {
      //   slideInFromLeft: 'slideInFromLeft 1s ease-in',
      //   slideUp: 'slideUpFrom 1s ease-out',
      // },
    },
  },
  plugins: [],
}
