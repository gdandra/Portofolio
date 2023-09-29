/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
        center: true,
        padding: '16px',
    },
    extend: {
      letterSpacing: {
          Nyebar:'.5em'
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray1: colors.blueGray,
        gray2: colors.coolGray,
        sky: colors.sky,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        green: colors.teal,
        dark: '#262626',
        cyan: colors.cyan,
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

