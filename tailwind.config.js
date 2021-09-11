module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["'Fredoka One'"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
