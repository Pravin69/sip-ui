/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: ["active"],
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    },
  },
  plugins: [],
};
