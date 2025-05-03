import React from "react";
import { LIMIT_OPTIONS } from "../constants";

const SuccessMessage = ({ selectedLimit, onClose }) => {
    const selectedOption = LIMIT_OPTIONS.find((o) => o.label === selectedLimit);

    return (
        <div className="p-5 bg-white rounded-lg shadow-md text-center transition-all duration-300">
            <p className="mt-2 text-gray-700">
                Bạn đã cập nhật hạn mức thành công.
            </p>
            <div className="mt-5 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between text-gray-700">
                    <span>Hạn mức/giao dịch</span>
                    <span>
                        {selectedOption?.value.toLocaleString("vi-VN")} VND
                    </span>
                </div>
                <div className="flex justify-between text-gray-700 mt-2">
                    <span>Thời gian cập nhật</span>
                    <span>{new Date().toLocaleString("vi-VN")}</span>
                </div>
            </div>
            <button
                className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-300"
                onClick={onClose}
            >
                Đóng
            </button>
        </div>
    );
};

export default SuccessMessage;
