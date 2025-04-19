import React from "react";

function LoanCalculateInputItem({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block text-md font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center">
        <input
          type={type}
          name={name}
          className="flex-1 border bg-white border-[#e7e7e7] rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={type === "number" ? "0" : undefined}
          step={type === "number" && name === "rate" ? "0.01" : undefined}
        />
      </div>
    </div>
  );
}

export default LoanCalculateInputItem;
