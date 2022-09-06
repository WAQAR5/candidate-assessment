module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        risque: ["Risque", "cursive"],
        tai: ["Tai Heritage Pro", "serif"],
        mulishs: ["Mulish", "sans-serif"],
        poirets: ["Poiret One", "cursive"],
      },

      colors: {
        bgColor: "#00523F",
        themeColor: "#FFC42A",
        bodyColor: "#01785c",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/Rectangle.svg')",
      },
      clipPath: {
        mypolygon: "polygon(0 46%, 100% 0, 100% 100%, 0% 100%)",
      },
      keyframes: {
        wave: {
          "0%": {
            boxShadow: "0px 0px 0px 5px rgb(50, 205, 50,1)",
          },
          "50%": {
            boxShadow: "0px 0px 0px 15px rgba(50, 205, 50,0.5)",
          },
          "75%": {
            boxShadow: "0px 0px 0px 20px rgba(50, 205, 50,0)",
          },
          "100%": {
            boxShadow: "0px 0px 0px 0px rgba(50, 205, 50,0)",
          },
        },
        outerwave: {
          "0%": {
            boxShadow: "0px 0px 0px 0px rgba(255,196,42, 1)",
          },
          "50%": {
            boxShadow: "0px 0px 0px 25px rgba(255,196,42, 0)",
          },
          "75%": {
            boxShadow: "0px 0px 0px 0px rgba(255,196,42, 0)",
          },
          "100%": {
            boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
          },
        },
      },
      animation: {
        pulse: "wave 2s linear infinite",
        outerPulse: "outerwave 2.1s linear infinite",
        slowPulse: "wave 2.5s linear infinite",
        slowOuterPulse: "outerwave 2.6s linear infinite",
      },
    },
  },
  plugins: [
    // require("tailwind-scrollbar"),
    // require("tailwind-clip-path"),
    //  require("@tailwindcss/forms")
  ],
};
