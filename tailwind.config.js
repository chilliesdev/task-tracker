/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
            },
            colors: {
                primary: "#0052CC",
                secondary: "#F4F5F7",
            },
        },
    },
    plugins: [],
};
