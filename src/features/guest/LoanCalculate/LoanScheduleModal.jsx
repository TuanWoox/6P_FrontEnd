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

  return (
    <div
      className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Bảng tính lịch trả nợ
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#96C576] bg-opacity-80 text-gray-800 font-semibold">
              <tr>
                <th className="border border-gray-300 p-2 text-center">
                  Kỳ Hạn
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Ngày Trả Nợ
                </th>
                <th className="border border-gray-300 p-2 text-right">
                  Số Tiền Gốc Còn
                </th>
                <th className="border border-gray-300 p-2 text-right">
                  Tiền Gốc Trả
                </th>
                <th className="border border-gray-300 p-2 text-right">
                  Tiền Lãi Trả
                </th>
                <th className="border border-gray-300 p-2 text-right">
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
                  <td className="border border-gray-300 p-2 text-right">
                    {formatCurrency(row.remainingBalanceStart)}
                  </td>
                  <td className="border border-gray-300 p-2 text-right">
                    {formatCurrency(row.principalPayment)}
                  </td>
                  <td className="border border-gray-300 p-2 text-right">
                    {formatCurrency(row.interestPayment)}
                  </td>
                  <td className="border border-gray-300 p-2 text-right">
                    {formatCurrency(row.totalPayment)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 font-bold text-gray-800">
                <td
                  colSpan="3"
                  className="border border-gray-300 p-2 text-center"
                >
                  Tổng
                </td>
                <td className="border border-gray-300 p-2 text-right">
                  {formatCurrency(totals.totalPrincipal)}
                </td>
                <td className="border border-gray-300 p-2 text-right">
                  {formatCurrency(totals.totalInterest)}
                </td>
                <td className="border border-gray-300 p-2 text-right">
                  {formatCurrency(totals.totalRepayment)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Lưu ý: Kết quả tính toán này chỉ mang tính chất tham khảo. Lãi suất
          được tính trên dư nợ gốc giảm dần.
        </p>
      </div>
    </div>
  );
}

export default LoanScheduleModal;
