
function SavingsDetailsCard({ type, term, accountNumber, amount, daysDeposited, maturityDate, remainingDays }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold text-[#95C475] mb-4">{type}</h3>

      <div className="mb-4">
        <span className="text-sm text-gray-600">Kỳ hạn: </span>
        <span className="font-medium text-gray-800">{term}</span>
      </div>
      <div className="mb-4">
        <span className="text-sm text-gray-600">Số tài khoản: </span>
        <span className="font-medium text-gray-800">{accountNumber}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-gray-700">

          <div className="col-span-2 mt-2">
            <p className="text-3xl font-bold text-gray-900">{amount} VND</p>
          </div>

          <div className="col-span-2 mt-4 flex justify-between">
              {term === "Không kỳ hạn" ? (
                  <>
                      <span className="text-sm text-gray-600">Số ngày đã gửi:</span>
                      <span className="font-medium text-gray-800">{daysDeposited || 'N/A'}</span>
                  </>
              ) : (
                  <>
                      <div className="flex flex-col">
                          <span className="text-sm text-gray-600">Ngày đáo hạn</span>
                          <span className="font-medium text-gray-800">{maturityDate || 'N/A'}</span>
                      </div>
                      <div className="flex flex-col items-end"> 
                          <span className="text-sm text-gray-600">Thời gian còn lại</span>
                          <span className="font-medium text-gray-800">{remainingDays || 'N/A'}</span>
                      </div>
                  </>
              )}
          </div>
      </div>
    </div>
  );
};

export default SavingsDetailsCard;