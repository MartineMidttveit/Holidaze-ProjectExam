/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1C1A1D',
        secondary: '#626262',
        background: '#F7F7F7',
        contrast: '#1A73E8',
        customOrange: '#FF8E2B',
        customLightBlue: '#D4E5FB',
      }, 
      height: {
        'screen-minus-40': 'calc(100vh - 40rem)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '10xl': '8rem', 
        '12xl': '10rem', 
        '14xl': '12rem', 
        '16xl': '14rem', 
      },
    },
  },
  plugins: [],
}