/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        lightGrey: "#D7D7D7"
      }
    },
  },
  plugins: [],
};
