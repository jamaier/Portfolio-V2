/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'media',
  theme: {
     fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        kaushan: ['Kaushan Script'],
     },
     boxShadow: {
      'custom-light': ' 0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
     },
     extend: {
        colors: {
           green: {
              DEFAULT: '#00f260',
           },
        },
     },
  },
  variants: {
     extend: {},
  },
  plugins: [],
}
