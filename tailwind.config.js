module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    backdropFilter: {
      'none':'none',
      'blur':'blur(20px)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
