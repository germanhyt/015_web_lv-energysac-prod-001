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
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "dynamic-h3": "clamp(1.15rem, 0.5vw + 1.1rem, 1.875rem)",
        // Para el card que pertenece al slider de sección envio nacional
        "dynamic-icon-card-national-shipping":
          "clamp(1.5rem, 0.7vw + 1.4rem, 2.5rem)",
        "dynamic-national-shipping-des":
          "clamp(1.125rem, 0.3vw + 1.1rem, 1.563rem)",
      },
      backgroundImage: {},
      colors: {
        "primary-100": "#EDFAE7",
        "primary-200": "#71C79F",
        "primary-300": "#49A078",
        "primary-400": "#337054",
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
          DEFAULT: "1rem",
          md: "4rem",
        },
      },
    },
  },
  plugins: [],
};
