import React from "react";
import Button from "../FormElements/Button";
import formatMoney from "../../../../../utils/formatMoney";

function ResultLoanPayment({
    goToHome,
    paymentDetails,
    payments,
    moneyAddOnOverdue,
}) {
    const today = new Date();
    const formattedDate = today.toLocaleString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    const chosenPayment = payments.find(
        (pay) => pay._id === paymentDetails.targetPayment,
    );
    const totalAmount =
        chosenPayment.status === "OVERDUE"
            ? chosenPayment.amount +
              chosenPayment.overdueDays *
                  chosenPayment.amount *
                  moneyAddOnOverdue
            : chosenPayment.amount;

    return (
        <div>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="mb-4 text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto my-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h2 className="text-xl font-medium">
                        Giao dịch thành công!
                    </h2>
                    <div className="text-gray-500 text-sm">{formattedDate}</div>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">
                        Tài khoản nguồn:
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        {paymentDetails.sourceAccount}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">
                        Khoản thanh toán:
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        {paymentDetails.targetPayment}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">
                        Số tiền thanh toán:
                    </p>
                    <p className="text-lg font-semibold mb-2 text-green-500">
                        {formatMoney(totalAmount)} VND
                    </p>
                </div>
            </div>
            <Button onClick={goToHome} fullWidth>
                Về trang chủ
            </Button>
        </div>
    );
}

export default ResultLoanPayment;
