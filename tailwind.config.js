/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Aboreto: ["Aboreto", "sans-serif"],
      Philosopher: ["Philosopher", "sans-serif"],
      BreeSerif: ["BreeSerif", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'bgimg': "url('/wall4.webp')",
        'bgform': "url('/Wall2.png')",
        'bghome': "url('/Home.png')",
      },
        colors: {
          //Maneth
          'primary': '#347991',
          'secondary': '#EFF6F8',
          'ternary': '#A2BCBF',
          'bgc': '#0C1620',
  
  


          //Sandithi
  
  
  
  
  
  
  
  
  
  
          //Ridmi
          'formbg' : "#D9D9D9",
          'PMnavbar' : "#DEE2E6",
          'RawmRequest' : "#F8D3C0",
          'homebg':"#FFBB70",
  
  
  
  
  
  
  
  
          //Hiranya
          'formBackground': "#d9d9d9",
          'navbar': "#dee2e6",
          'aboutUs' : "#da6e2e",
          'div2' : "#fceadc",
  
  
  
  
  
  
      },
    },
  },
  plugins: [],
}

