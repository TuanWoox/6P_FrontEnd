import React from "react";

function LoanCalculateResultItem({ isBold = false, label, text, suffix }) {
    const displayText = String(text ?? "--");

    return (
        <div
            className={`flex justify-between items-center ${
                isBold
                    ? "text-base sm:text-lg font-bold text-green-700"
                    : "text-xs sm:text-sm"
            }`}
        >
            <span className="text-gray-600">{label}</span>
            <span
                className={`font-medium ${isBold ? "text-green-700" : "text-gray-800"}`}
            >
                {displayText} {suffix && ` ${suffix}`}
            </span>
        </div>
    );
}

export default LoanCalculateResultItem;
