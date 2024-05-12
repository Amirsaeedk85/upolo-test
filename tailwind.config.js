/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Vazirmatn', 'sans-serif']
    },
    extend: {
      colors: {
        lightGray: '#091E4200'
      }
    }
  },
  plugins: []
}