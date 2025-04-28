export default function Button({
    onClick,
    variant = "primary",
    children,
    fullWidth = false,
}) {
    const baseClasses = "font-medium py-3 px-4 rounded transition duration-200";
    const variantClasses = {
        primary:
            "bg-[#96C576] text-white cursor-default hover:bg-white border-3 hover:text-[#96C576] cursor-pointer transition-colors duration-350    ease-in-out",
        secondary: "border border-gray-300 hover:bg-gray-100 text-gray-700",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} `}
        >
            {children}
        </button>
    );
}
