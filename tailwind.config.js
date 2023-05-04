/** @type {import('tailwindcss').Config} */

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
            }
        }
    },
    plugins: []
};
