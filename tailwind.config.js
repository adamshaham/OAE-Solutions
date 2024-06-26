/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumslateblue: "#405eff",
        "neutral-n0": "#fff",
        "neutral-n200": "#eceef4",
        black: "#000",
        "primary-pr600": "#387ff5",
        "neutral-n400": "#b6bcce",
        "primary-pr300": "#b6d1fb",
        gainsboro: "#e6e6e6",
        lightslategray: "#828a9c",
        "neutral-n800": "#4b5162",
        blue: "#0029ff",
        darkslategray: "#404040",
        gray: {
          "100": "#03071c",
          "200": "rgba(255, 255, 255, 0.24)",
        },
      },
      spacing: {
        "inline-xl": "20px",
        "stack-2xl": "24px",
        "inset-md": "13.230203628540039px",
      },
      fontFamily: {
        urbanist: "Urbanist",
        "m-plus-1": "'M PLUS 1'",
        "dm-sans": "'DM Sans'",
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "2xs": "11px",
        "10xs-2": "2.2px",
        "sm-2": "13.2px",
        "base-5": "16.5px",
        "xs-6": "11.6px",
        "201xl": "220px",
        "xs-9": "11.9px",
        xl: "20px",
        lg: "13.230203628540039px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "4xl-7": "23.7px",
      lgi: "19px",
      "3xl-1": "22.1px",
      "mid-6": "17.6px",
      "24xl": "43px",
      "15xl": "34px",
      "7xl": "26px",
      "31xl": "50px",
      "21xl": "40px",
      "11xl": "30px",
      "sm-1": "13.1px",
      "5xl-4": "24.4px",
      xl: "20px",
      "6xl": "25px",
      "smi-9": "12.9px",
      "xl-9": "20.9px",
      mid: "17px",
      "51xl-5": "70.5px",
      "37xl": "56px",
      "23xl": "42px",
      "mid-4": "17.4px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
