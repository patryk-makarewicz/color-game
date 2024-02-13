/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        appPrimary: '#0369a1', //(appBlue)

        appBlack: '#262626', //neutral-800
        appBlue: '#0369a1', //sky-700
        appBlueDark: '#1d4ed8', //blue-700
        appBlueLight: '#f8fafb',
        appGray: '#6b7280', //gray-500
        appGrayLight: '#e5e7eb', //gray-200
        appWarning: '#C52A1A'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s',
        fadeOut: 'fadeOut 0.5s'
      }
    }
  },
  plugins: []
};
