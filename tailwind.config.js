/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7600',
        "dark-1": '#090D32',
        "dark-2": '#343541',
        "dark-3": '#5E617A',
        'info-1': '#6F80E7'
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}

