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

  const tableMaxHeight = "max-h-[450px]";

  return (
    <div
      className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold z-20"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-left flex-shrink-0">
          Bảng tính lịch trả nợ
        </h2>

        <div className={`overflow-auto ${tableMaxHeight}`}>
          <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
            <thead className="sticky top-0 z-10 bg-[#96C576] bg-opacity-80 text-gray-800 font-semibold">
              <tr>
                <th className="border border-gray-300 p-2 text-center">
                  Kỳ Hạn
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Ngày Trả Nợ
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Số Tiền Gốc Còn
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Tiền Gốc Trả
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Tiền Lãi Trả
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Tổng Phải Trả
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.period} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-2 text-center">
                    {row.period}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {formatDate(row.paymentDate)}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {formatCurrency(row.remainingBalanceStart)}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {formatCurrency(row.principalPayment)}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {formatCurrency(row.interestPayment)}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {formatCurrency(row.totalPayment)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="sticky bottom-0 z-10 bg-gray-100 font-bold text-gray-800">
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-300 p-2 text-center"
                >
                  Tổng
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {formatCurrency(totals.totalPrincipal)}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {formatCurrency(totals.totalInterest)}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  {formatCurrency(totals.totalRepayment)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LoanScheduleModal;
