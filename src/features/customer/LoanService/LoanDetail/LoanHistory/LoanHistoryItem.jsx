import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";

function LoanHistoryItem({ item }) {
  console.log("LoanHistoryItem", item);
  const { paymentID, amount, paymentDate } = item;
  const loanId = item?.loan?.loanID;

  console.log("LoanHistoryItem", item);

  return (
    <Link
      to={`/customer/loan/${loanId}/payment/${paymentID}`}
      className="block no-underline"
    >
      <div className="bg-white px-8 py-10 rounded-lg shadow mb-4 hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-xl text-gray-700 font-medium">{paymentID}</p>
          </div>
          <div className="text-[#95C475] text-sm font-medium flex items-center">
            Chi tiết
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="">
          <div>
            <p className="text-md text-gray-500 mb-2">
              Số tiền cần thanh toán: {amount} VND
            </p>
            <div className="flex justify-between items-center">
              <p className="text-md text-gray-500">Ngày đóng: {paymentDate}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LoanHistoryItem;
