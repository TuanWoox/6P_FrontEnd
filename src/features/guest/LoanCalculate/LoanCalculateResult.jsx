import React from "react"; // Import React
import LoanCalculateResultItem from "./LoanCalculateResultItem";

function LoanCalculateResult({
  results,
  formatCurrency,
  onShowSchedule,
  canCalculate,
}) {
  const resultFields = [
    { label: "Phương thức vay", text: results.method },
    {
      label: "Số tiền trả hàng tháng",
      text: formatCurrency(results.monthlyPayment),
      suffix: "VND",
    },
    {
      label: "Tổng gốc phải trả",
      text: formatCurrency(results.totalPrincipal),
      suffix: "VND",
    },
    {
      label: "Tổng lãi phải trả",
      text: formatCurrency(results.totalInterest),
      suffix: "VND",
    },
    {
      label: "Tổng số tiền cần trả",
      text: formatCurrency(results.totalRepayment),
      suffix: "VND",
      isBold: true,
    },
  ];

  const summaryItem = resultFields[resultFields.length - 1];
  const detailFields = resultFields.slice(0, -1);

  return (
    <div className="flex-1 bg-gray-50 p-6 rounded-md space-y-3 flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800">Số tiền cần trả</h2>
      <div className="text-sm text-gray-600 space-y-2 flex-grow">
        {detailFields.map((field, index) => (
          <LoanCalculateResultItem
            key={index}
            label={field.label}
            text={field.text}
            suffix={field.suffix}
          />
        ))}
      </div>
      <hr />
      <LoanCalculateResultItem
        label={summaryItem.label}
        text={summaryItem.text}
        suffix={summaryItem.suffix}
        isBold={summaryItem.isBold}
      />
      <p className="text-xs text-gray-500 mt-2">
        Lưu ý: Kết quả tính toán này chỉ mang tính chất tham khảo
      </p>
      <button
        className={`w-full mt-4 font-bold py-2 rounded duration-300 ${
          canCalculate
            ? "bg-[#96C576] text-white hover:bg-transparent hover:text-[#96C576] hover:border hover:border-[#96C576]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!canCalculate}
        onClick={onShowSchedule}
      >
        Xem lịch trả nợ
      </button>
    </div>
  );
}

export default LoanCalculateResult;
