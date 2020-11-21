const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./themes/tech-site/layouts/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      borderWidth: ["hover"],
      colors: {
        fuchsia: colors.fuchsia,
        teal: colors.teal,
      },
      maxWidth: {
        read: "65ch",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
