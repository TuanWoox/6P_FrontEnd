import React from "react";
import { AlertTriangle } from "lucide-react"; // Optional: use Lucide for icons

export default function Error({
    message = "Đã xảy ra lỗi",
    details = "Vui lòng thử lại sau.",
}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-red-50">
            <div className="relative w-32 h-32 mb-6">
                {/* Red alert circle */}
                <div className="w-full h-full rounded-full bg-red-100 border-4 border-red-300 flex items-center justify-center shadow-inner">
                    <AlertTriangle className="text-red-600 w-16 h-16" />
                </div>
            </div>

            <div className="text-center font-sans">
                <p className="text-red-800 text-xl font-semibold drop-shadow-sm">
                    {message}
                </p>
                <p className="text-red-600 text-sm mt-2">{details}</p>
            </div>
        </div>
    );
}
