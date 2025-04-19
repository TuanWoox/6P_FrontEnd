function Tabs({ activeTab, onTabChange }) {
    return (
        // The main container with green background and rounded corners
        <div className="flex items-center p-3 bg-[#95C475] rounded-t-2xl ">
            {/* Danh sách Tab */}
            <button
                className={`flex-1 py-2.5 px-4 text-center font-semibold transition-colors duration-200 ease-in-out
                    ${ // Apply these rounded corners on hover for the first button
                      activeTab === 'savinglist' ? 'rounded-xl' : 'hover:rounded-xl'
                    }
                    ${ // Apply the active/inactive styles and their respective hover colors
                      activeTab === 'savinglist'
                        ? 'bg-[#F0F0F0] text-gray-800 shadow rounded-xl' // Active styles + hover
                        : 'text-white hover:bg-[#82AA64] rounded-xl hover:cursor-pointer' // Inactive styles + hover
                    }
                `}
                onClick={() => onTabChange('savinglist')} // Call parent's handler
            >
                Danh sách
            </button>

            {/* Thêm sản phẩm Tab */}
            <button
                className={`flex-1 py-2.5 px-4 text-center font-semibold transition-colors duration-200 ease-in-out
                    ${ // Apply these rounded corners on hover for the second button
                       activeTab === 'savingadd' ? 'rounded-xl' : 'hover:rounded-xl'
                    }
                    ${ // Apply the active/inactive styles and their respective hover colors
                       activeTab === 'savingadd'
                        ? 'bg-[#F0F0F0] text-gray-800 shadow rounded-xl' // Active styles + hover
                        : 'text-white hover:bg-[#82AA64] rounded-xl hover:cursor-pointer' // Inactive styles + hover
                    }
                `}
                onClick={() => onTabChange('savingadd')} // Call parent's handler
            >
                Thêm sản phẩm
            </button>
        </div>
    );
}

export default Tabs;