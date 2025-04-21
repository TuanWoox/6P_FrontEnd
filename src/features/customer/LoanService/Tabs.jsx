function Tabs({ activeTab, onTabChange }) {
  return (
    <div className="flex items-center p-3 bg-[#95C475] rounded-t-2xl">
      {/* Tab: Danh sách */}
      <button
        className={`rounded-xl flex-1 py-2.5 px-4 text-center font-semibold transition-colors duration-200 ease-in-out
            ${
              activeTab === "loanlist"
                ? "bg-[#F0F0F0] text-gray-800 shadow rounded-xl"
                : "text-white hover:bg-[#82AA64] hover:rounded-xl hover:cursor-pointer"
            }
          `}
        onClick={() => onTabChange("loanlist")}
      >
        Danh sách
      </button>

      {/* Tab: Đã đóng */}
      <button
        className={`rounded-xl flex-1 py-2.5 px-4 text-center font-semibold transition-colors duration-200 ease-in-out
            ${
              activeTab === "closedloanlist"
                ? "bg-[#F0F0F0] text-gray-800 shadow rounded-xl"
                : "text-white hover:bg-[#82AA64] hover:rounded-xl hover:cursor-pointer"
            }
          `}
        onClick={() => onTabChange("closedloanlist")}
      >
        Đã đóng
      </button>

      {/* Tab: Thêm sản phẩm */}
      <button
        className={`rounded-xl flex-1 py-2.5 px-4 text-center font-semibold transition-colors duration-200 ease-in-out
            ${
              activeTab === "loanadd"
                ? "bg-[#F0F0F0] text-gray-800 shadow rounded-xl"
                : "text-white hover:bg-[#82AA64] hover:rounded-xl hover:cursor-pointer"
            }
          `}
        onClick={() => onTabChange("loanadd")}
      >
        Thêm sản phẩm
      </button>
    </div>
  );
}

export default Tabs;
