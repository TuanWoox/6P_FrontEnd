import LoanCalculateResultItem from "./LoanCalculateResultItem";

function LoanCalculateResult() {
  const resultFields = [
    { label: "Phương thức vay", text: "--" },
    { label: "Số tiền trả hàng tháng", text: "0", suffix: "VND" },
    { label: "Tổng gốc phải trả", text: "0", suffix: "VND" },
    { label: "Tổng lãi phải trả", text: "0", suffix: "VND" },
    { label: "Tổng số tiền cần trả", text: "0", suffix: "VND", isBold: true },
  ];

  const summaryItem = resultFields[resultFields.length - 1];
  const detailFields = resultFields.slice(0, -1);

  return (
    <div className="flex-1 bg-gray-50 p-6 rounded-md space-y-3">
      <h2 className="text-lg font-semibold text-gray-800">Số tiền cần trả</h2>
      <div className="text-sm text-gray-600 space-y-2">
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
      <p className="text-xs text-gray-500">
        Lưu ý: Kết quả tính toán này chỉ mang tính chất tham khảo
      </p>
      <button
        className="w-full bg-[#96C576] text-white font-bold py-2 rounded 96C576 hover:bg-transparent hover:text-[#96C576] hover:border hover:border-[#96C576] duration-300"
        disabled
      >
        Xem lịch trả nợ
      </button>
    </div>
  );
}

export default LoanCalculateResult;
