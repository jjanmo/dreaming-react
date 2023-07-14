/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'move-right': {
          '100%': {
            opacity: 1,
            transform: 'translateX(64px)',
          },
        },
        'move-right-more': {
          '100%': {
            opacity: 1,
            transform: 'translateX(128px)',
          },
        },
        'spin-scale': {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.25)',
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)',
          },
        },
      },
      animation: {
        'move-right': 'move-right 1s .5s ease-out forwards',
        'move-right-more': 'move-right-more 1.5s .8s ease-out forwards',
        'spin-scale': 'spin-scale 3s 1.2s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
