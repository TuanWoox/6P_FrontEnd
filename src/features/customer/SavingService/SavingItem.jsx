import { Link, useLocation } from 'react-router-dom';
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function SavingsItem({ item }) {
  const { id, savingTypeName, term, accountNumber, principalAmount, remainingDays } = item;

  const shouldShowRemainingDays = term !== "Không kỳ hạn" && remainingDays != null;

  return (
    <Link
      to="/customer/saving/detail"      // just the URL…
      state={item?.id}                  // …and pass your item here
      className="block no-underline"
    >
      <div className="bg-white p-4 rounded-lg shadow mb-4 hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{savingTypeName}</h3>
            {term && <p className="text-sm text-gray-600">{term}</p>}
          </div>
          <span className="text-[#95C475] text-sm font-semibold flex items-center">
            Chi tiết
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </span>
        </div>
        <p className="text-sm text-gray-600">STK: {accountNumber}</p>
        {shouldShowRemainingDays && <p className="text-sm text-gray-600">Còn {remainingDays} ngày</p>}
        <div className="text-right mt-2">
          <span className="text-xl font-bold text-gray-900">
            {principalAmount?.toLocaleString()} VND
          </span>
        </div>
      </div>
    </Link>
  );
}

export default SavingsItem;