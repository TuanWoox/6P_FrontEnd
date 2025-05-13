import React from "react";

const formatDate = (dateString) => {
    if (!dateString) return "--";
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "--";
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    } catch (error) {
        console.error("Error formatting date:", error);
        return "--";
    }
};

function LoanScheduleModal({
    isOpen,
    onClose,
    schedule,
    totals,
    formatCurrency,
}) {
    if (!isOpen) return null;

    const tableMaxHeight = "max-h-[300px] sm:max-h-[350px] md:max-h-[450px]";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-opacity-50 backdrop-blur-sm sm:p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-3 sm:p-4 md:p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute z-20 text-xl font-bold text-gray-500 top-1 sm:top-2 right-2 sm:right-3 hover:text-gray-800 sm:text-2xl"
                    aria-label="Close modal"
                >
                    ×
                </button>
                <h2 className="flex-shrink-0 mb-2 text-lg font-semibold text-left text-gray-800 sm:text-xl sm:mb-4">
                    Bảng tính lịch trả nợ
                </h2>

                <div className={`overflow-auto ${tableMaxHeight}`}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs border border-collapse border-gray-300 table-auto sm:text-sm">
                            <thead className="sticky top-0 z-10 bg-[#96C576] bg-opacity-80 text-gray-800 font-semibold">
                                <tr>
                                    <th className="p-1 text-center border border-gray-300 sm:p-2">
                                        Kỳ Hạn
                                    </th>
                                    <th className="p-1 text-center border border-gray-300 sm:p-2">
                                        Ngày Trả Nợ
                                    </th>
                                    <th className="p-1 text-center border border-gray-300 sm:p-2">
                                        Số Tiền Gốc Còn
                                    </th>
                                    <th className="p-1 text-center border border-gray-300 sm:p-2">
                                        Tiền Gốc Trả
                                    </th>
                                    <th className="p-1 text-center border border-gray-300 sm:p-2">
                                        Tiền Lãi Trả
                                    </th>
                                    <th className="p-1 text-center border border-gray-300 sm:p-2">
                                        Tổng Phải Trả
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {schedule.map((row) => (
                                    <tr
                                        key={row.period}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="p-1 text-center border border-gray-300 sm:p-2">
                                            {row.period}
                                        </td>
                                        <td className="p-1 text-center border border-gray-300 sm:p-2">
                                            {formatDate(row.paymentDate)}
                                        </td>
                                        <td className="p-1 text-center border border-gray-300 sm:p-2">
                                            {formatCurrency(
                                                row.remainingBalanceStart,
                                            )}
                                        </td>
                                        <td className="p-1 text-center border border-gray-300 sm:p-2">
                                            {formatCurrency(
                                                row.principalPayment,
                                            )}
                                        </td>
                                        <td className="p-1 text-center border border-gray-300 sm:p-2">
                                            {formatCurrency(
                                                row.interestPayment,
                                            )}
                                        </td>
                                        <td className="p-1 text-center border border-gray-300 sm:p-2">
                                            {formatCurrency(row.totalPayment)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="sticky bottom-0 z-10 font-bold text-gray-800 bg-gray-100">
                                <tr>
                                    <td
                                        colSpan="3"
                                        className="p-1 text-center border border-gray-300 sm:p-2"
                                    >
                                        Tổng
                                    </td>
                                    <td className="p-1 text-center border border-gray-300 sm:p-2">
                                        {formatCurrency(totals.totalPrincipal)}
                                    </td>
                                    <td className="p-1 text-center border border-gray-300 sm:p-2">
                                        {formatCurrency(totals.totalInterest)}
                                    </td>
                                    <td className="p-1 text-center border border-gray-300 sm:p-2">
                                        {formatCurrency(totals.totalRepayment)}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoanScheduleModal;
