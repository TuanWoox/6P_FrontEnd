function LoanCalculateInputItem({ label, type, placeholder, defaultValue }) {
  return (
    <div>
      <label className="block text-md font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center">
        <input
          type={type}
          className="flex-1 border bg-white border-[#e7e7e7] rounded-sm px-3 py-2"
          placeholder={placeholder}
          value={defaultValue}
        />
      </div>
    </div>
  );
}

export default LoanCalculateInputItem;
