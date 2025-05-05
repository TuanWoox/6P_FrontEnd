function TabNavigation({ tabs, activeTab, onActiveTab }) {
    return (
        <div className="flex mb-2 overflow-x-auto border-b border-gray-200 sm:mb-4 whitespace-nowrap">
            {tabs.map((tab, index) => (
                <button
                    className={`py-1.5 sm:py-2 px-3 sm:px-4 font-medium text-sm sm:text-md focus:outline-none transition-colors duration-200 ${
                        activeTab === index
                            ? "text-green-500 border-b-2 border-green-500"
                            : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => onActiveTab(index)}
                    key={index}
                >
                    {tab.title}
                </button>
            ))}
        </div>
    );
}

export default TabNavigation;
