module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgCol: "#22272d",
        navCol: "#2d333b",
        linkCol: "#316dca",
        titleCol: "hsl(209,19%,73%,1)",
        pryCol: "#758390",
        borderCol: "#454c56",
      },
      screens: {
        xs: "576px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
