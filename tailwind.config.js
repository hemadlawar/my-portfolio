// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        custom: "32rem", // You can adjust the width value as needed
      },
      height: {
        lowhigh: "18rem",
        custom: "32rem", // You can adjust the width value as needed
        veryHigh: "40rem",
      },
    },
  },
  plugins: [],
};
