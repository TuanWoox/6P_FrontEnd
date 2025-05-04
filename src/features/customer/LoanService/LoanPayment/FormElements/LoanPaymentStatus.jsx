import formatMoney from "../../../../../utils/formatMoney";

function LoanPaymentStatus({
    amount,
    dueDate,
    paymentDate,
    status,
    overdueDays = 0,
    moneyAddOnOverdue,
}) {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-2">
                <span className="text-gray-600">Số tiền: </span>
                <span className="font-medium text-gray-800">
                    {formatMoney(amount)} VND
                </span>
            </div>
            <div className="mb-2">
                <span className="text-gray-600">Ngày đến hạn: </span>
                <span className="font-medium text-gray-800">
                    {new Date(dueDate).toLocaleDateString("vi-VN")}
                </span>
            </div>
            {paymentDate && (
                <div className="mb-2">
                    <span className="text-gray-600">Ngày thanh toán: </span>
                    <span className="font-medium text-gray-800">
                        {new Date(paymentDate).toLocaleDateString("vi-VN")}
                    </span>
                </div>
            )}
            <div className="mb-2">
                <span className="text-gray-600">Trạng thái: </span>
                <span
                    className={`font-medium ${status === "OVERDUE" ? "text-red-500" : "text-green-500"}`}
                >
                    {status}
                </span>
            </div>
            {overdueDays !== null && status === "PENDING" && (
                <div className="mb-2">
                    <span className="text-gray-600">Số ngày còn lại: </span>
                    <span className="font-medium text-green-500">
                        {overdueDays}
                    </span>
                </div>
            )}
            {overdueDays !== null && status === "OVERDUE" && (
                <div className="mb-2">
                    <span className="text-gray-600">Số ngày quá hạn: </span>
                    <span className="font-medium text-red-500">
                        {overdueDays} Ngày
                    </span>
                </div>
            )}
            {overdueDays !== null && status === "OVERDUE" && (
                <div className="mb-2">
                    <span className="text-gray-600">Tiền phạt: </span>
                    <span className="font-medium text-red-500">
                        {formatMoney(overdueDays * moneyAddOnOverdue * amount)}{" "}
                        VND
                    </span>
                </div>
            )}
        </div>
    );
}

export default LoanPaymentStatus;
