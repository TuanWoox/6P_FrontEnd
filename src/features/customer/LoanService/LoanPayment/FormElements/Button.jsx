export default function Button({
    onClick,
    variant = "primary",
    children,
    fullWidth = false,
    disabled = false,
}) {
    const baseClasses = "font-medium py-3 px-4 rounded transition duration-200";
    const variantClasses = {
        primary: "bg-[#96C576] text-white hover:bg-white hover:text-[#96C576]",
        secondary: "border border-gray-300 hover:bg-gray-100 text-gray-700",
    };

    return (
        <button
            onClick={disabled ? undefined : onClick} // Prevent click if disabled
            className={`${baseClasses} ${variantClasses[variant]} ${
                fullWidth ? "w-full" : ""
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} // Add styles for disabled state
            disabled={disabled} // Apply the disabled attribute
        >
            {children}
        </button>
    );
}
