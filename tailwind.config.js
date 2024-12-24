const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    safelist: ["dark"],
    prefix: "",

    content: [
        './pages/**/*.{js,jsx,vue}',
        './components/**/*.{js,jsx,vue}',
        './app/**/*.{js,jsx,vue}',
        './src/**/*.{js,jsx,vue}',
    ],

    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                purple: '#ff00f2',
                grayText: '#B9B9B9',
                blackField: '#1C1C1C',
                purpleHover: '#7f008d',
                brightPurple: '#c600d5',
                white: '#ffffff',
            },
            keyframes: {
                "accordion-down": {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                },
                "collapsible-down": {
                    from: {height: 0},
                    to: {height: 'var(--radix-collapsible-content-height)'},
                },
                "collapsible-up": {
                    from: {height: 'var(--radix-collapsible-content-height)'},
                    to: {height: 0},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-in-out",
                "collapsible-up": "collapsible-up 0.2s ease-in-out",
            },
            fontFamily: {
                sans: ["Istok Web", "sans-serif"],
            }
        },
    },
    plugins: [animate],
}