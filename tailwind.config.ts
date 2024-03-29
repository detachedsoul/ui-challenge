import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "fadeIn": {
                    from: {
                        "opacity": "0",
                    },
                    to: {
                        "opacity": "1",
                    },
                },
                "fadeOut": {
                    from: {
                        "opacity": "1",
                    },
                    to: {
                        "opacity": "0",
                    },
                },
            },
            animation: {
                "fadeIn": "fadeIn .25s linear forwards",
                "fadeOut": "fadeOut .25s linear forwards",
            },
        },
    },
    plugins: [],
};
export default config;
