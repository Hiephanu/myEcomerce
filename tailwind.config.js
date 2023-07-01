/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors:{
        primary:"#ffb0bd",
        secondary:"#8e4b65",
        subCategrory:"#fec6cf",
        hover:"#e56266"
      },
      fontFamily:{
        nunito: ['Nunito'],
      }
    },
  },
  plugins: [],
}

