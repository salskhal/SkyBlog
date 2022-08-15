/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navShadow': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      },
      colors:{
        "mobileBg": "#303030",
        "headerCol": "#1d1f32",
        "mainBg": "#faf3e7",
        "primary": "#e9ca96",
        "input": "#f2f7f6",
      },
      flex: {
        '2': '2 2 0%',
        "4": '4 4 0%',
        '3': '3 3 0%'
      },
      maxWidth: {
        '70': '70%',
      }
    },
  },
  plugins: [],
}