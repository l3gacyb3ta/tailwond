module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    }
  },
  plugins: [
    //require('daisyui'),
  ],
};
