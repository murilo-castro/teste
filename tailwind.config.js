/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    extend: {
      screens: {
        tablet: "600px",
        // => @media (min-width: 600px) { ... }

        laptop: "601px",
        // => @media (min-width: 601px) { ... }

        desktop: "940px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        rexpet: "#1271A1",
        primary: "#062A3C",
        main: "#F7F9FA",
        "auxiliary-pink": "#F67392",
        "black-services": "#000305",
        "auxiliary-blue": "#D9EAF2",
        brand: {
          primary: "#219EBC",
          secundary: "#023047",
          tertiary: "#FFb703",
        },
        // primary: {
        //   50: '#edf9fc',
        //   100: '#dcf3f9',
        //   200: '#caedf6',
        //   300: '#95dbec',
        //   400: '#60c9e3',
        //   500: '#bee9f4',
        //   600: '#bee9f4',
        //   700: '#219ebc',
        //   800: '#195766',
        //   900: '#133239',
        // },
        secundary: {
          50: "#f4f9fb",
          100: "#d9eaf2",
          200: "#4095bf",
          300: "#1271a1",
          400: "#03547c",
          500: "#d9eaf2",
          600: "#4095bf",
          700: "#1271a1",
          800: "#03547c",
          900: "#023047",
        },
        tertiary: {
          50: "#fff8f0",
          100: "#ffe7cc",
          200: "#ffc380",
          300: "#fb8500",
          400: "#804400",
          500: "#ffe7cc",
          600: "#ffc380",
          700: "#fb8500",
          800: "#804400",
          900: "#4d2900",
        },
        auxiliary: {
          purple: "#8f63d9",
          green: "#5F8420",
          yellow: "#f6db66",
          red: "#b3000b",
          turquese: "#06d6a0",
          pink: "#F67392",
        },
        gray: {
          50: "#f7f8f8",
          100: "#f1f3f3",
          200: "#d6dadb",
          300: "#bbc1c3",
          400: "#a0a8ab",
          500: "#858f94",
          600: "#5f686d",
          700: "#3c4144",
          800: "#242729",
          900: "#161819",
        },
      },
      // fontFamily: {
      //   'sans': ['ui-sans-serif', 'system-ui', ...],
      //   'serif': ['ui-serif', 'Georgia', ...],
      //   'mono': ['ui-monospace', 'SFMono-Regular', ...],
      //   'display': ['Oswald', ...],
      //   'body': ['"Open Sans"', ...],
      // }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
