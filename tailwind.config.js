/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F91944",
        yellowSauce: "#F19605",
      },
    },
  },
  plugins: [require("daisyui")],
};
