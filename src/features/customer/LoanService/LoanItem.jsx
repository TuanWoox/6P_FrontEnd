import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function LoanItem({ item }) {
    const { _id: id, balance: amount, status, accountNumber } = item;

    // Format amount with commas
    const formattedAmount = amount.toLocaleString();

    const isDisabled = status === "PENDING" || status === "REJECTED";

    return (
        <Link
            to={`/customer/loan/${id}`}
            className={`block no-underline ${isDisabled ? "cursor-not-allowed pointer-events-none" : ""}`}
        >
            <div className="bg-white px-8 py-10 rounded-lg shadow mb-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-xl text-gray-700 font-medium">
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
                        <p className="text-md text-gray-500 mb-2">
                            Số tiền vay: {formattedAmount} VND
                        </p>
                        <div className="flex justify-between items-center">
                            {status === "CLOSED" && (
                                <span className="text-red-500 text-xl font-bold">
                                    Đã đóng
                                </span>
                            )}
                            {status === "PENDING" && (
                                <span className="text-yellow-500 text-xl font-bold">
                                    Chờ Phê duyệt
                                </span>
                            )}
                            {status === "ACTIVE" && (
                                <span className="text-green-500 text-xl font-bold">
                                    Hoạt động
                                </span>
                            )}
                            {status === "REJECTED" && (
                                <span className="text-red-500 text-xl font-bold">
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
