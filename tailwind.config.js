module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: '#c242a0', // Purple shade primary color
        primary: '#6C63FF', // Purple shade primary color
        secondary: '#9F7AEA', // Purple shade secondary color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
