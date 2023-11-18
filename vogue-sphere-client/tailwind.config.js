/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#008ECC",
        "metal-grey": "#666666",
      },
    },
  },
  plugins: [],
};
