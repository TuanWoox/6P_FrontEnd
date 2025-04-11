import LoanCalculateInputItem from "./LoanCalculateInputItem";

const inputFields = [
  { label: "Số tiền muốn vay", type: "number", placeholder: "VND" },
  { label: "Lãi suất", type: "number", placeholder: "%/Năm" },
  { label: "Số tháng vay", type: "number", placeholder: "Tháng" },
  {
    label: "Ngày giải ngân",
    type: "date",
    defaultValue: new Date().toISOString().split("T")[0],
  },
];

function LoanCalculateInput() {
  return (
    <div className="flex-1 p-6 rounded-md space-y-4">
      {inputFields.map((field, index) => (
        <LoanCalculateInputItem
          key={index}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
        />
      ))}
    </div>
  );
}

export default LoanCalculateInput;
