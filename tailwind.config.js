/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'albert-sans': ["Albert Sans", "sans-serif"]
      },
      backgroundImage:{
        'main-bg':"url('src/assets/img/Backgroundimage.png')"
      }
    },
  },
  plugins: [],
}
