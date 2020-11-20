const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./themes/tech-site/layouts/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
