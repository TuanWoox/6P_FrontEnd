function LoanPaymentStatus({
    amount,
    dueDate,
    paymentDate,
    status,
    overdueDays = 0,
}) {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-2">
                <span className="text-gray-600">Số tiền: </span>
                <span className="font-medium text-gray-800">{amount} VND</span>
            </div>
            <div className="mb-2">
                <span className="text-gray-600">Ngày đến hạn: </span>
                <span className="font-medium text-gray-800">
                    {new Date(dueDate).toLocaleDateString("vi-VN")}
                </span>
            </div>
            <div className="mb-2">
                <span className="text-gray-600">Ngày thanh toán: </span>
                <span className="font-medium text-gray-800">
                    {new Date(paymentDate).toLocaleDateString("vi-VN")}
                </span>
            </div>
            <div className="mb-2">
                <span className="text-gray-600">Trạng thái: </span>
                <span
                    className={`font-medium ${status === "OVERDUE" ? "text-red-500" : status === "PENDING" ? "text-yellow-400" : "text-green-500"}`}
                >
                    {status}
                </span>
            </div>
            {overdueDays > 0 && (
                <div className="mb-2">
                    <span className="text-gray-600">Số ngày quá hạn: </span>
                    <span className="font-medium text-red-500">
                        {overdueDays}
                    </span>
                </div>
            )}
        </div>
    );
}

export default LoanPaymentStatus;
