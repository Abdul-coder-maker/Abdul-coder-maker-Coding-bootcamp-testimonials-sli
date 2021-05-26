const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      130: "1.3",
    },
    boxShadow: {
      "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      "4xl": "0px 20px 19px 0px rgba(0,0,0,0.1)",
    },
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    extend: {
      spacing: {
        5: "5.73px",
        11: "11.43px",
        13: "59px",
        15: "60px",
        17: "75px",
        19: "72px",
        30: "120px",
        31: "150.94px",
        62: "253px",
        63: "254px",
        65: "285px",
        73: "308px",
        81: "327px",
        84: "84%",
        100: "540px",
        120: "610px",
      },
      backgroundImage: (theme) => ({
        pattern: "url('./images/pattern-bg.svg')",
        "bg-curve": "url('./images/pattern-curve.svg')",
      }),
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        "dark-blue": "hsl(240, 38%, 20%)",
        "grayish-blue": "hsl(240, 18%, 77%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
