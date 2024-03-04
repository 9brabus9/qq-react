/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindFormPlugin from "@tailwindcss/forms"
import tailwindScrollbar from "tailwind-scrollbar"

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#2b2c30',
                primary: '#3fbac2',
                'gray-50': '#eaeaea',
                'gray-100': '#b3b3b3',
                "gray-150": '#4b4b4b',
            },
            backgroundImage: {
                mainPageBannerBg: "url('@/assets/img/main_bg.jpeg')",
            }
        },
        fontFamily: {
            sans: ["Ubuntu", "sans-serif"],
        },
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        }
    },
    plugins: [
        tailwindFormPlugin,
        tailwindScrollbar
    ],
}