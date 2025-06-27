/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#3B82F6",
        "secondary": "#8B5CF6",
      },
      fontFamily: {
        reddit: ["Reddit Sans", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
