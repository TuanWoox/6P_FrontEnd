import React from "react";
import { LIMIT_OPTIONS } from "../constants";

const SuccessMessage = ({ selectedLimit, onClose }) => {
    const selectedOption = LIMIT_OPTIONS.find((o) => o.label === selectedLimit);

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg text-center transition-all duration-500 transform animate-fadeIn">
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Cập nhật thành công!
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6">
                Hạn mức giao dịch của bạn đã được cập nhật thành công.
            </p>

            {/* Details Card */}
            <div className="mt-5 bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-lg border border-gray-200">
                <div className="space-y-4">
                    {/* Limit Details */}
                    <div className="flex justify-between items-center text-gray-700 pb-3 border-b border-gray-200">
                        <div className="flex items-center">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-green-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    x="2"
                                    y="7"
                                    width="20"
                                    height="14"
                                    rx="2"
                                    ry="2"
                                ></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <span className="font-medium">
                                Hạn mức/giao dịch
                            </span>
                        </div>
                        <span className="font-semibold text-green-600">
                            {selectedOption?.value.toLocaleString("vi-VN")} VND
                        </span>
                    </div>

                    {/* Update Time */}
                    <div className="flex justify-between items-center text-gray-700">
                        <div className="flex items-center">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-blue-500 mr-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className="font-medium">
                                Thời gian cập nhật
                            </span>
                        </div>
                        <span className="font-medium text-gray-600">
                            {new Date().toLocaleString("vi-VN")}
                        </span>
                    </div>
                </div>
            </div>

            {/* Close Button */}
            <button
                className="w-full px-6 py-3 mt-6 bg-[#96C576] text-white hover:bg-white border-3 hover:text-[#96C576] cursor-pointer transition-colors duration-500 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 font-medium shadow-sm"
                onClick={onClose}
            >
                Đóng
            </button>
        </div>
    );
};

export default SuccessMessage;
