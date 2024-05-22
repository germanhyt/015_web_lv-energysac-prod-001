/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,php}",
    "./pages/**/*.{html,php}",
    "./pages/**/**/*.{html,php}",
    "./components/*.{html,php}",
    "*.{html,php}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    extend: {
      fontSize: {
        "dynamic-100": "clamp(2rem, 1.6vw + 1.7rem, 4.3rem)",
        "dynamic-200": "clamp(1.125rem, 1.4vw + 0.9rem, 2.5rem)",
        "dynamic-300": "clamp(1rem, 0.5vw + 0.9rem, 1.5rem)",
        "dynamic-400": "clamp(0.875rem, 0.1vw + 0.9rem, 1rem)",
      },

      backgroundImage: {},
      colors: {
        "primary-100": "#1A1A1A",
        "primary-200": "#FF8300",
        "primary-300": "#FFFFFF",
        "primary-400": "#15375B",
        "primary-500": "#C7C7C7",
        "primary-600": "#4E4E4E",
      },
      boxShadow: {
        articles: "10px 10px 50px rgba(175, 175, 175,0.25)",
      },
      // NO ELIMINAR
      container: {
        center: true,
        padding: {
          DEFAULT: "0rem",
        },
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        itm: "1100px",
        xl: "1280px",
        "2xl": "1600px",
        // "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
