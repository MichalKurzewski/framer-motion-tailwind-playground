/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#FF6363",
                secondary: {
                    100: "#E2E2D5",
                    200: "#888883",
                },
            },
            fontFamily: {
                head: ["Oswald"],
                body: ["Inter"],
            },
            boxShadow: {
                "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
            },
            dropShadow: {
                "3xl": "0 35px 35px rgba(0, 0, 0, 0.5)",
                "4xl": [
                    "0 35px 35px rgba(0, 0, 0, 0.5)",
                    "0 45px 65px rgba(0, 0, 0, 0.5)",
                ],
            },
        },
    },
    plugins: [],
};