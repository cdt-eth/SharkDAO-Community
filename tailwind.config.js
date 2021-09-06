module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      "shark-text": ["AUTHENTIC Sans", "sans-serif"],
      "shark-display": ["MsGothic-SharkDAOMembersOnly-Regular", "sans-serif"],
      "shark-display-light": [
        "MsGothic-SharkDAOMembersOnly-Light",
        "sans-serif",
      ],
      "shark-display-heavy": [
        "MsGothic-SharkDAOMembersOnly-Heavy",
        "sans-serif",
      ],
      "shark-display-black": [
        "MsGothic-SharkDAOMembersOnly-Black",
        "sans-serif",
      ],
    },
    colors: {
      "shark-white": "#ffffff",
      "shark-black": "#000000",
      "shark-light-blue": "#7CC4F2",
      "shark-blue": "#2B83F6",
      "shark-dark-blue": "#395ED1",
      "shark-magenta": "#AB36BE",
      "shark-pink": "#FF638D",
      "shark-orange": "#FE500C",
      "shark-beach": "#F9F1DF",
      "nouns-grey": "#D5D7E1",
    },
    screens: {
      xs: "200px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
