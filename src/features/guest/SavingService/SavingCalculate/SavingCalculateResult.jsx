import { formatCurrency, getTodayFormatted } from "../../../../utils/helpers";

function SavingCalculateResult({ amount, interestRate }) {
  const totalAmount = amount * (1 + interestRate / 100);

  return (
    <div className="flex-1 bg-gray-50 p-12 rounded-md space-y-3 flex flex-col">
      <div className="text-sm text-gray-600 space-y-2 flex flex-col items-end">
        <div className="text-4xl font-semibold text-gray-800 mb-6">
          {formatCurrency(totalAmount)} VND
        </div>

        <div className="text-xl text-gray-800 mt-2 mb-6">
          {formatCurrency(amount)} VND
        </div>

        <div className="text-2xl text-gray-800 mt-1">{interestRate}%</div>
      </div>

      <div className="border-t border-gray-300 mt-6 pt-4">
        <div className="text-gray-600 ">{getTodayFormatted()}</div>
      </div>
    </div>
  );
}

export default SavingCalculateResult;
