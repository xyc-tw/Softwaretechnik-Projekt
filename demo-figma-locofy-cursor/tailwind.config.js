/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkolivegreen: "#466a22",
        gainsboro: "#e0e0e0",
        gray: {
          "100": "#828282",
          "200": "rgba(255, 255, 255, 0.79)",
        },
        darkslategray: "#434242",
        red: "#fb2525",
        olivedrab: "#6aa62e",
      },
      spacing: {},
      fontFamily: {
        "small-text": "Inter",
        inherit: "inherit",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
