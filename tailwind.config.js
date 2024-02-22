/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1132px",
      xl: "1132px",
      "2xl": "1132px",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #FFF 0%, rgba(207, 238, 247, 0.5) 100%)",
        "custom-gradient-hover":
          "linear-gradient(180deg, #FFF 50%, rgba(207, 238, 247, 0.5) 100%)",
        "custom-gradient2":
          "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 51.04%, rgba(255, 255, 255, 0.00) 100%)",
      },
      boxShadow: {
        custom: "0px 8px 16px 0px #afdff5",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        jost: ["var(--font-jost)"],
        "roboto-cond": ["var(--font-roboto-cond)"],
      },
      colors: {
        primary: "var(--color-primary)",
        quaternary: "var(--color-quaternary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        white: "var(--color-white)",
        disabled: "var(--color-disabled)",
        text: "var(--color-text)",
      },
    },
  },
};
