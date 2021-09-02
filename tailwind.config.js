module.exports = {
  purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      "shark-text": ["AUTHENTIC Sans", "sans-serif"],
      "shark-display": ["MS Gothic", "sans-serif"],
    },
    colors: {
      "shark-black": "#000000",
      "shark-light-blue": "#7CC4F2",
      "shark-blue": "#2B83F6",
      "shark-dark-blue": "#395ED1",
      "shark-magenta": "#AB36BE",
      "shark-pink": "#FF638D",
      "shark-orange": "#FE500C",
      "shark-beach": "#F9F1DF",
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
