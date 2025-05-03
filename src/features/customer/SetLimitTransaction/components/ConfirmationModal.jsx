import React from "react";
import OtpModal from "../../../../components/OTPModal";

const ConfirmationModal = ({ pendingLimit, updating, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-lg z-50">
            <div className="p-5 bg-white rounded-lg shadow-lg animate-fadeIn">
                <h3 className="text-lg font-bold text-gray-800">
                    Xác nhận thay đổi
                </h3>
                <p className="mt-2 text-gray-600">
                    Bạn có chắc chắn muốn chuyển sang{" "}
                    <strong>{pendingLimit}</strong>?
                </p>
                <div className="flex justify-end mt-4 space-x-3">
                    <button
                        className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-300"
                        onClick={onCancel}
                        disabled={updating}
                    >
                        Hủy
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition-colors duration-300"
                        onClick={onConfirm}
                        disabled={updating}
                    >
                        {updating ? "Đang lưu…" : "Xác nhận"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
