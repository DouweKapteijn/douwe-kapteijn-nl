/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        translightpurple: '#beabff',
        baselightpurple: '#a28af2',
        ultralightpurple: '#be5cff',
        lightpurple: '#a319ff',
        purple: '#8d05e8',
        darkpurple: '#7202bd',
        ultradarkpurple: '#30014f',
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}

