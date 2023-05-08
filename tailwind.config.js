/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            tablet: '640px',
            tabletPlus: '1024px'
        },
        extend: {
            backgroundImage: {
                main: "url('/src/images/main-bg.svg')"
            },
            fontFamily: {
                sans: ['Raleway', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: []
};
