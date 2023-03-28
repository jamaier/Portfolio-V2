/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
     fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        kaushan: ['Kaushan Script'],
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
