import SavingsItem from "./SavingItem";
import { normalizeSavingAccount } from "../../../utils/normalizeSavingAccount";

function SavingsList({ savingsData }) {
    return (
        <div className="bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-129 overflow-y-auto">
            {savingsData &&
                Array.isArray(savingsData) &&
                savingsData.map((item, index) => (
                    <SavingsItem
                        key={item._id || index}
                        item={normalizeSavingAccount(item)}
                    />
                ))}
            {(!savingsData ||
                !Array.isArray(savingsData) ||
                savingsData.length === 0) && (
                <div className="text-center text-gray-500">
                    Không có dữ liệu tiết kiệm.
                </div>
            )}
        </div>
    );
}
export default SavingsList;
