module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["font-fredoka"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite Danmark Loopet"', "sans-serif"],
        geist: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        fredoka: ["var(--font-fredoka)", "sans-serif"],
      },
    },
  },
};
