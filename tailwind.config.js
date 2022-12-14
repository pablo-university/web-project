/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  },
  plugins: [require("daisyui"), require('@tailwindcss/line-clamp'),],
  daisyui: {
    logs: true,
    themes: [
      {
        default: {
          primary: "#DD3333",
          secondary: "#881337",
          accent: "#37CDBE",
          neutral: "#515151",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
