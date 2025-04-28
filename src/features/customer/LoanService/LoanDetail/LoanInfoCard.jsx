import ProgressBar from "../../../../components/ProgressBar";
import { formatCurrency, getTodayFormatted } from "../../../../utils/helpers";

function LoanInfoCard({
  amount,
  paidAmount,
  startDate,
  monthlyPayment,
  loanTypeName,
  status,
}) {
  const remainingAmount = amount - paidAmount;
  const percentage = Math.round((paidAmount / amount) * 100);

  return (
    <div className="p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">Tổng số tiền phải trả</div>
        <div className="font-medium">{formatCurrency(amount)} VND</div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">Loại vay</div>
        <div className="font-medium">{loanTypeName}</div>
      </div>

      <div className="border-t border-gray-300 my-4"></div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">Ngày vay</div>
        <div className="font-medium">{getTodayFormatted(startDate)}</div>
      </div>

      <div className="border-t border-gray-300 my-4"></div>

      <div className="mb-4">
        <ProgressBar percentage={percentage} />
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">Số tiền đã đóng</div>
        <div className="font-medium text-green-500">
          {formatCurrency(paidAmount)} VND
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">Số tiền còn lại</div>
        <div className="font-medium text-red-500">
          {formatCurrency(remainingAmount)} VND
        </div>
      </div>

      <div className="border-t border-gray-300 my-4"></div>

      <div className="flex justify-between items-center mb-4"></div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">Số tiền cần thanh toán hàng tháng</div>
        <div className="font-medium">{formatCurrency(monthlyPayment)} VND</div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">Trạng thái</div>
        <div className="font-medium">{status}</div>
      </div>
    </div>
  );
}

export default LoanInfoCard;
