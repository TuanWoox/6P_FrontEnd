export default {
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 1.5s ease-in-out",
                "spin-slow": "spin 3s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
};
