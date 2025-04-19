
function SavingsDetailsCard({ type, term, accountNumber, amount, daysDeposited }) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-[#95C475] mb-4">{type}</h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="text-sm">Kỳ hạn:</p>
            <p className="font-medium">{term}</p>
          </div>
          <div>
            <p className="text-sm">Số tài khoản:</p>
            <p className="font-medium">{accountNumber}</p>
          </div>
          <div className="col-span-2 mt-2">
            <p className="text-3xl font-bold text-gray-900">{amount} VND</p> {/* Larger font for amount */}
          </div>
          <div className="col-span-2 mt-4 flex justify-between">
              <p className="text-sm text-gray-600">Số ngày đã gửi:</p>
              <p className="font-medium text-gray-800">{daysDeposited}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SavingsDetailsCard;