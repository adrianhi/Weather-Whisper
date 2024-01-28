/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        warningColor: "#FFD600",
      },
      backgroundColor: {
        custom: "#F3F4F7",
      },
      backgroundImage: {
        bgClouds: "url(@assets/Images/CloudBg.png)",
      },
    },
  },
  plugins: [],
};
