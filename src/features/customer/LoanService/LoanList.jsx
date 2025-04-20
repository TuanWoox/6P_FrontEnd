import LoanItem from "./LoanItem";

function LoanList({ loanData }) {
  return (
    <>
      {/* Add a check to prevent map error if loanListData is null/undefined */}
      {loanData &&
        Array.isArray(loanData) &&
        loanData.map((item, index) => (
          <LoanItem key={item.id || index} item={item} />
        ))}
      {/* Optional: Add a message if there's no data */}
      {(!loanData || !Array.isArray(loanData) || loanData.length === 0) && (
        <div className="text-center text-gray-500 py-4">
          Không có dữ liệu khoản vay.
        </div>
      )}
    </>
  );
}

export default LoanList;
