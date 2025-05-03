import React, { useState } from "react";

const LimitOptions = ({ options, selectedLimit, onSelectLimit }) => {
    const [hoveredOption, setHoveredOption] = useState(null);

    return (
        <div className="mt-8 space-y-4">
            {options.map((option) => {
                const isActive = selectedLimit === option.label;
                const isHovered = hoveredOption === option.label;

                return (
                    <div
                        key={option.label}
                        className={`relative overflow-hidden group transition-all duration-500 ease-in-out transform 
              ${isActive ? "scale-105" : isHovered ? "scale-103" : "scale-100"}
              rounded-xl shadow-sm hover:shadow-md cursor-pointer`}
                        onClick={() => onSelectLimit(option.label)}
                        onMouseEnter={() => setHoveredOption(option.label)}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        {/* Background gradient */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-500 opacity-0 
                ${isActive ? "opacity-100" : isHovered ? "opacity-30" : "opacity-0"}`}
                            style={{
                                background:
                                    "linear-gradient(120deg, rgba(220, 252, 231, 0.5), rgba(167, 243, 208, 0.5))",
                            }}
                        />

                        {/* Border animation */}
                        <div
                            className={`absolute inset-0 border-2 rounded-xl transition-all duration-500
                ${
                    isActive
                        ? "border-green-500"
                        : isHovered
                          ? "border-green-300"
                          : "border-gray-200"
                }`}
                        />

                        <div className="flex items-center justify-between p-5">
                            <div className="flex items-center space-x-3">
                                <div
                                    className={`flex items-center justify-center w-10 h-10 rounded-full 
                  ${
                      isActive
                          ? "bg-green-100"
                          : isHovered
                            ? "bg-gray-100"
                            : "bg-gray-50"
                  } 
                  transition-all duration-300`}
                                >
                                    {/* Custom SVG icon instead of lucide-react */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`w-5 h-5 transition-colors duration-300
                      ${isActive ? "text-green-600" : "text-gray-500"}`}
                                    >
                                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                        <polyline points="17 6 23 6 23 12" />
                                    </svg>
                                </div>
                                <div>
                                    <p
                                        className={`font-semibold text-lg transition-colors duration-300
                    ${isActive ? "text-green-700" : "text-gray-800"}`}
                                    >
                                        {option.label}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {option.value.toLocaleString("vi-VN")}{" "}
                                        VND
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                {isActive ? (
                                    <div className="flex items-center space-x-2 bg-green-500 text-white px-3 py-1.5 rounded-full transition-all duration-300">
                                        {/* Custom SVG icon instead of CheckCircle from lucide-react */}
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-4 h-4"
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        <span className="text-xs font-medium tracking-wide">
                                            ĐANG SỬ DỤNG
                                        </span>
                                    </div>
                                ) : (
                                    <div
                                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300
                    ${isHovered ? "border-green-300" : "border-gray-300"}`}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LimitOptions;
