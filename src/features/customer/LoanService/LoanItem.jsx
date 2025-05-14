import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function LoanItem({ item }) {
    const { id, balance: amount, status, accountNumber } = item;
    console.log("LoanItem", item);

    // Format amount with commas
    const formattedAmount = amount.toLocaleString();

    const isDisabled = status === "PENDING" || status === "REJECTED";
    console.log("item?._id", item?._id);

    return (
        <Link
            to="/customer/loan/detail"
            state={item?._id}
            className={`block no-underline ${isDisabled ? "cursor-not-allowed pointer-events-none" : ""}`}
        >
            <div className="px-8 py-10 mb-4 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-xl font-medium text-gray-700">
                            {accountNumber}
                        </p>
                    </div>
                    <div className="text-[#95C475] text-sm font-medium flex items-center">
                        Chi tiết
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </div>
                </div>
                <div className="">
                    <div>
                        <p className="mb-2 text-gray-500 text-md">
                            Số tiền vay: {formattedAmount} VND
                        </p>
                        <div className="flex items-center justify-between">
                            {status === "CLOSED" && (
                                <span className="text-xl font-bold text-red-500">
                                    Đã đóng
                                </span>
                            )}
                            {status === "PENDING" && (
                                <span className="text-xl font-bold text-yellow-500">
                                    Chờ Phê duyệt
                                </span>
                            )}
                            {status === "ACTIVE" && (
                                <span className="text-xl font-bold text-green-500">
                                    Hoạt động
                                </span>
                            )}
                            {status === "REJECTED" && (
                                <span className="text-xl font-bold text-red-500">
                                    Bị từ chối
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default LoanItem;
