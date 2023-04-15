module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      extend: {
        backgroundImage: {
          'pattern': "url('../public/images/bg-pattern.png')",
        }
      },
    },
    plugins: [],
  }
  
  