module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f0f0f',
        'dark-text': '#f1f1f1',
        'dark-accent': '#ff784f', // Change to any non-violet highlight color
        'dark-card': '#1c1c1c',
      },
    },
  },
  plugins: [],
};
