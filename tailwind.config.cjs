/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pureBlack: "#000000",
        lightGrey: "#DFDFDF",
        pureWhite: "#FFFFFF",
        bgGradiant1: "#FFC593",
        bgGradiant2: "#BC7198",
        bgGradiant3: "#5A77FF",
      },
      boxShadow: {
        bleed: "0 0 0 100vmax #000000",
      },
      fontSize: {
        headingClamp: "clamp(2rem, 1.523rem + 2.036vw, 2.5rem)",
      },
      screens: {
        md: "900px",
      },
    },
  },
  plugins: [],
};
