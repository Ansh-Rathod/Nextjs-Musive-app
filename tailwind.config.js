// /** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      ProximaRegular: ["ProximaNova Regular"],
      ProximaBold: ["ProximaNova Bold"],
    },
    screens: {
      mobile: {
        min: "100px",
        max: "500px",
      },
      tablet: {
        min: "500px",
        max: "750px",
      },
      "mini-laptop": {
        min: "750px",
        max: "874px",
      },
      laptop: {
        min: "874px",
        max: "1280px",
      },
      desktop: {
        min: "1280px",
      },
    },
    borderWidth: {
      DEFAULT: "0.5px",
    },
    extend: {},
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
