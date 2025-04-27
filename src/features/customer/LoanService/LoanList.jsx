import LoanItem from "./LoanItem";

function LoanList({ loanData }) {
  // console.log("LoanList", loanData);

  return (
    <>
      {loanData && Array.isArray(loanData) && loanData.length > 0 ? (
        loanData.map((item, index) => (
          <LoanItem key={item._id || index} item={item} />
        ))
      ) : (
        <div className="text-center text-gray-500 py-4">
          Không có dữ liệu khoản vay.
        </div>
      )}
    </>
  );
}

export default LoanList;
