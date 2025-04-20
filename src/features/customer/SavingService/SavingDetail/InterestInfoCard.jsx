
function InterestInfoCard({ interestRate, interestEarned, amountReceived }) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Thông tin lãi suất</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p>Lãi suất</p>
          <p className="text-right font-medium">{interestRate}</p>
  
          <p>Tiền lãi</p>
          <p className="text-right font-medium">{interestEarned} VND</p>
  
          <p>Tiền nhận</p>
          <p className="text-right font-bold text-gray-900">{amountReceived} VND</p>
        </div>
      </div>
    );
  };
  
  export default InterestInfoCard;