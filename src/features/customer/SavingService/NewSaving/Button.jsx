import React from "react";

const Button = ({
    onClick,
    disabled = false,
    type = "button",
    variant = "primary",
    className = "",
    loading = false,
    children,
}) => {
    // Base button styles
    const baseStyles = "px-6 py-2 rounded-lg transition-colors font-medium";

    // Variant styles
    const variantStyles = {
        primary: "bg-[#96C576] text-white hover:bg-[#a0d37e]",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#96C576] text-[#96C576] hover:bg-[#f0f8eb]",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        >
            {loading ? "Đang xử lý..." : children}
        </button>
    );
};

export default Button;
