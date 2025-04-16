function TabNavigation({ tabs, activeTab, onActiveTab }) {
  return (
    <div className="flex border-b border-gray-200 mb-4">
      {tabs.map((tab, index) => (
        <button
          className={`py-2 px-4 font-medium text-md focus:outline-none transition-colors duration-200 ${
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
