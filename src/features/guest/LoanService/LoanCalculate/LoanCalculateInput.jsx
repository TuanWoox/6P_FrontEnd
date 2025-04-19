import React from "react"; // Import React
import LoanCalculateInputItem from "./LoanCalculateInputItem";

const inputFields = [
  {
    label: "Số tiền muốn vay",
    type: "number",
    placeholder: "VND",
    name: "amount",
  },
  {
    label: "Lãi suất",
    type: "number",
    placeholder: "%/Năm",
    name: "rate",
  },
  {
    label: "Số tháng vay",
    type: "number",
    placeholder: "Tháng",
    name: "term",
  },
  {
    label: "Ngày giải ngân",
    type: "date",
    name: "startDate",
  },
];

function LoanCalculateInput({ values, onChange }) {
  return (
    <div className="flex-1 p-6 rounded-md space-y-4">
      {inputFields.map((field, index) => (
        <LoanCalculateInputItem
          key={index}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={values[field.name]}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export default LoanCalculateInput;
