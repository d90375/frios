module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      container: {
        padding: {
          DEFAULT: "1rem",
          // sm: "2rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1100px",
        xl: "1100px",
        "2xl": "1100px",
      },
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
      },
    },
  },
};
