/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#008ECC",
        "metal-grey": "#666666",
      },
      screens: {
        xs: "320px", // Mobile portrait
        sm: "414px", // Mobile portrait and landscape
        md: "834px", // Tablet portrait
        lg: "1112px", // Tablet landscape
        xl: "1200px", // Laptop & desktop displays
        "2xl": "1536px", // Large desktops
      },
    },
  },
  plugins: [],
};
