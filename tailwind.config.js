module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/**/*.html'],
  darkMode: "media", //false, // or 'media' or 'class'
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
