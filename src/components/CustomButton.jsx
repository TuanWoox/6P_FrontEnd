import { Link } from "react-router-dom";

function CustomButton({
    name = "",
    width = "w-auto",
    height = "h-auto",
    link = "/",
    position = "center", // 'left', 'center', 'right'
    onClick = () => {},
    state,
}) {
    const positionClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }[position];

    return (
        <div className={`mt-8 ${positionClass}`}>
            <Link
                onClick={onClick}
                to={link}
                state={state}
                className={`inline-flex items-center justify-center ${width} ${height} 
                    bg-[#95C475] text-white font-semibold rounded px-4 py-2
                    hover:bg-white hover:text-[#95C475] transition-colors duration-200 
                    border border-[#95C475]`}
            >
                {name}
            </Link>
        </div>
    );
}

export default CustomButton;
