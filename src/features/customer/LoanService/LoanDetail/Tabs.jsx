function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="flex items-center p-3 bg-[#95C475] rounded-t-2xl">
      {/* Tab: Thông tin */}
      <button
        className={`rounded-xl flex-1 py-2.5 px-4 text-center font-semibold transition-colors duration-200 ease-in-out
          ${
            activeTab === "info"
              ? "bg-[#F0F0F0] text-gray-800 shadow rounded-xl"
              : "text-white hover:bg-[#82AA64] hover:rounded-xl hover:cursor-pointer"
          }
        `}
        onClick={() => onTabChange("info")}
      >
        Thông tin
      </button>

      {/* Tab: Lịch sử thanh toán */}
      <button
        className={`rounded-xl flex-1 py-2.5 px-4 text-center font-semibold transition-colors duration-200 ease-in-out
          ${
            activeTab === "paymenthistory"
              ? "bg-[#F0F0F0] text-gray-800 shadow rounded-xl"
              : "text-white hover:bg-[#82AA64] hover:rounded-xl hover:cursor-pointer"
          }
        `}
        onClick={() => onTabChange("paymenthistory")}
      >
        Lịch sử thanh toán
      </button>
    </div>
  );
}

export default Tabs;
