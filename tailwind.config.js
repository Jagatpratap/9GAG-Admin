/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend:{

    colors:{
      primary:"#FF5901",
      primary2:"#FF9C66",
      secondary:'#D0D0D0',
      secondary2:"#A0A0A0",
      secondary3:"#727378",
      secondary4:"#738294",
      secondary5:"#171615",
      secondary6:"#F2F6FA",
    }
  }

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
