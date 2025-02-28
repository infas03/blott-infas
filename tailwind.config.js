/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#523AE4',
        'bg-gray': '#F9FAFB',
        'bg-blue': '#05021B'
      }, 
      fontFamily: {
        roboto: ['Roboto', "sans-serif"],
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-italic": ["Rubik-Italic", "sans-serif"],
      },
      fontSize:{
        '32px': '32px',
      }
    },
  },
  plugins: [],
};
