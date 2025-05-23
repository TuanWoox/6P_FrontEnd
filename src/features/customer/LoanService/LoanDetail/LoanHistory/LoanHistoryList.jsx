import LoanHistoryItem from "./LoanHistoryItem";

function LoanHistoryList({ loanHistoryData }) {
    return (
        <>
            {loanHistoryData &&
                Array.isArray(loanHistoryData) &&
                loanHistoryData.map((item, index) => (
                    <LoanHistoryItem key={item._id || index} item={item} />
                ))}
            {(!loanHistoryData ||
                !Array.isArray(loanHistoryData) ||
                loanHistoryData.length === 0) && (
                <div className="text-center text-gray-500 py-4">
                    Không có dữ liệu lịch sử khoản vay.
                </div>
            )}
        </>
    );
}

export default LoanHistoryList;
