import { Link } from "react-router";

function HomeButton({ icon, label, link }) {
    return (
        <Link
            to={`/${link}`}
            className="group flex flex-col items-center transform transition-all duration-300 hover:-translate-y-4"
        >
            {/* Main circular button with layered design */}
            <div className="relative">
                {/* Light background glow effect */}
                <div className="absolute inset-0 bg-emerald-300 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Outer circle with gradient */}
                <div className="bg-gradient-to-br from-emerald-400 to-green-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center shadow-lg group-hover:shadow-xl relative z-10 overflow-hidden">
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20"></div>

                    {/* Pattern overlay for texture */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full bg-emerald-200 bg-opacity-10"></div>
                    </div>

                    {/* Inner circle with animation */}
                    <div className="bg-white bg-opacity-20 rounded-full w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex items-center justify-center backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300">
                        {/* Icon with pulse animation on hover */}
                        <div className="text-white transform transition-all duration-300 group-hover:scale-110 relative">
                            {/* Pulse ring (appears on hover) */}
                            <div className="absolute inset-0 rounded-full border-2 border-white border-opacity-0 group-hover:border-opacity-20 group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                            {/* Icon */}
                            <div className="transform group-hover:rotate-3 transition-all duration-300">
                                {icon}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative accent circles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-yellow-300 opacity-0 group-hover:opacity-80 transition-all duration-300 shadow-md"></div>
                <div className="absolute top-2 -right-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400 opacity-0 group-hover:opacity-80 transition-all duration-300 shadow-md"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400 opacity-0 group-hover:opacity-80 transition-all duration-300 shadow-md"></div>
            </div>

            {/* Label with animated underline effect */}
            <div className="mt-3 sm:mt-4 relative">
                <p className="text-center text-sm sm:text-lg lg:text-xl font-bold text-gray-800">
                    {label}
                </p>
                <div className="h-0.5 bg-gradient-to-r from-green-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300 mx-auto"></div>
            </div>
        </Link>
    );
}

export default HomeButton;
