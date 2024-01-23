import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-dark-purple": "#2a2c60",
                "brand-light-purple": "#202b3c",
                "brand-light-blue": "#67B3e4",
            }
        },
    },
    plugins: [],
};
export default config;
