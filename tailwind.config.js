/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#D87D4A',
          lightGray: '#F1F1F1',
          defaultLight: '#fbaf85',
          grayVeryLight: '#FAFAFA',
        }
      }
    },
  },
  plugins: [],
};
