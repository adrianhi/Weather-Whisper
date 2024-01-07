/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        'custom': '#F3F4F7',
      },
    },
  },
  plugins: [],
};
