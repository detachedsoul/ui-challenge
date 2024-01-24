import type { Config } from "tailwindcss";

const config: Config = {
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
                        "display": "none",
                    },
                    to: {
                        "opacity": "1",
                        "display": "grid",
                    },
                },

                "fadeOut": {
                    from: {
                        "opacity": "1",
                        "display": "grid",
                    },
                    to: {
                        "opacity": "0",
                        "display": "none",
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
