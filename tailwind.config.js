/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '420px'},
      'ss': {'max': '620px'},
      'sm': {'max': '768px'},
      'md': {'max': '1060px'},
      'lg': {'max': '1200px'},
      'xl': {'max': '1700px'},
    },

  },
  plugins: [],
}

