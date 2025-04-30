
function WithdrawDetailCard({ accountDetails, isEarlyWithdrawal, percentMoneyLose }) {
  // Ensure accountDetails is not null/undefined before accessing properties
  if (!accountDetails) {
    return null; // Or a loading/error state
  }

  // Destructure necessary details from accountDetails
  const {
    accountNumber,
    principalAmount,
    withdrawalDate,
    annualInterestRate, 
    amountReceived,
  } = accountDetails;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
      {/* Account Number */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">Số tài khoản</p>
        <p className="font-medium text-gray-800">{accountNumber}</p>
      </div>

      {/* Principal Amount */}
      <div className="mb-4">
           <p className="text-xl font-bold text-gray-900">{principalAmount} VND</p>
      </div>


      {/* Grid for other details */}
      <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-gray-700">

        {/* Ngày tất toán */}
        <div>
          <p className="text-sm text-gray-600">Ngày tất toán</p>
        </div>
        <div className="text-right">
          <p className="font-medium">{withdrawalDate}</p>
        </div>

        {/* Lãi suất */}
        <div>
          {/* Change label based on isEarlyWithdrawal prop */}
          <p className="text-sm text-gray-600">Lãi suất</p>
        </div>
        <div className="text-right">
          <p className="font-medium">{annualInterestRate}</p>
        </div>


        {/* Số tiền trừ do tất toán trước hạn - Conditionally rendered based on isEarlyWithdrawal */}
        {isEarlyWithdrawal && (
          <>
            <div>
              <p className="text-sm text-gray-600">Số tiền trừ do tất toán trước hạn</p>
            </div>
            <div className="text-right">
              {/* Display the percentMoneyLose amount */}
              {/* Ensure percentMoneyLose is formatted correctly, assuming it's a number before here */}
              <p className="font-medium">{percentMoneyLose} VND</p>
            </div>
          </>
        )}

        {/* Số tiền nhận được */}
        <div>
          <p className="text-sm text-gray-600">Số tiền nhận được</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-900">{amountReceived} VND</p>
        </div>
      </div>
    </div>
  );
};

export default WithdrawDetailCard;