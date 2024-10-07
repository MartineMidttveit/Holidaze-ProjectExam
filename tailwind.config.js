/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#1C1A1D',
        secondary: '#626262',
        background: '#F7F7F7',
        contrast: '#1A73E8'
      }, 
      height: {
        'screen-minus-10': 'calc(100vh - 10rem)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
