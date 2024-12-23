/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            purple: '#ff00f2',
            grayText: '#B9B9B9',
            blackField: '#1C1C1C',
            purpleHover: '#7f008d',
            brightPurple: '#c600d5',
        },
        extend: {
            fontFamily: {
                istok: ['Istok Web', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
