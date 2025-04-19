import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ArrowRightIcon } from "@heroicons/react/16/solid";

// Make sure your SavingsItem component receives the item object or at least the id
function SavingsItem({ item }) { // It's often easier to pass the whole item
    const { id, type, duration, accountNumber, remainingDays, amount } = item; // Destructure item data

    return (
        // Wrap the entire item in a Link
        <Link to={`/customer/saving/${id}`} className="block no-underline"> {/* Use block and no-underline to make the link behave like the div */}
            <div className="bg-white p-4 rounded-lg shadow mb-4 hover:shadow-lg transition-shadow duration-200"> {/* Add hover effect */}
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{type}</h3>
                        {duration && <p className="text-sm text-gray-600">{duration}</p>}
                    </div>
                    {/* This span is part of the clickable link */}
                    <span className="text-[#95C475] text-sm font-semibold flex items-center">
                        Chi tiết
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </span>
                </div>
                <p className="text-sm text-gray-600">STK: {accountNumber}</p>
                {remainingDays && <p className="text-sm text-gray-600">Còn {remainingDays}</p>}
                <div className="text-right mt-2">
                    <span className="text-xl font-bold text-gray-900">{amount} VND</span>
                </div>
            </div>
        </Link>
    );
}

export default SavingsItem;