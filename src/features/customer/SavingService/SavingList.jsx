import SavingsItem from "./SavingItem";

function SavingsList({ savingsData }) {
    return (
        // Keep the height and overflow classes if you want the list itself to scroll
        // Remove them if the parent container handles scrolling
        <div className="bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-129 overflow-y-auto">
            {/* Add a check to prevent map error if savingsData is null/undefined */}
            {savingsData && Array.isArray(savingsData) && savingsData.map((item, index) => (
                // Pass the entire 'item' object as a prop named 'item'
                <SavingsItem
                    // Use item.id for the key if available and unique, otherwise fallback to index or accountNumber
                    key={item.id || item.accountNumber || index}
                    item={item} // Pass the whole item object here
                />
            ))}
            {/* Optional: Add a message if there's no data */}
            {(!savingsData || !Array.isArray(savingsData) || savingsData.length === 0) && (
                <div className="text-center text-gray-500">Không có dữ liệu tiết kiệm.</div>
            )}
        </div>
    );
}

export default SavingsList;