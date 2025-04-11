function LoanCalculateResultItem({ isBold = 0, label, text, suffix }) {
  return (
    <div
      className={`flex justify-between ${isBold ? "text-lg font-bold" : ""}`}
    >
      <span>{label}</span>
      <span className="text-gray-700">
        {text} {suffix}
      </span>
    </div>
  );
}

export default LoanCalculateResultItem;
