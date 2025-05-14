import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import { getTodayFormatted } from "../../../../../utils/helpers";
import { useLocation } from "react-router-dom";

function LoanHistoryItem({ item }) {
    const { _id: paymentId, amount, paymentDate } = item;
    const location = useLocation();
    const _id = location.state;
    console.log("LoanHistoryItem, loanid", _id);
    console.log("LoanHistoryItem, paymentId", paymentId);

    return (
        <Link
            to={`/customer/loan/payment/detail`}
            state={{ loanId: _id, paymentId: paymentId }}
            className="block no-underline"
        >
            <div className="px-8 py-10 mb-4 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-xl font-medium text-gray-700">
                            {paymentId}
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
                            Số tiền đã thanh toán: {amount} VND
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-500 text-md">
                                Ngày đóng: {getTodayFormatted(paymentDate)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default LoanHistoryItem;
