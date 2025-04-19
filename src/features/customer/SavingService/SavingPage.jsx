import SavingsList from "./SavingList";
import Tabs from "./Tabs";
import Breadcrumbs from "./Breadcrumbs";
import savingsData from "./savingData.js";
import AddSavingsProductContent from "./AddSavingProductContent.jsx";
import products from "./productsData.js";
import { useState } from "react";

function SavingPage() {

    const [activeTab, setActiveTab] = useState('savinglist'); // Default to 'savinglist' (Danh sách)

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const savingsListBreadcrumbs = [
        { label: 'Trang chủ', path: '/customer', icon: true },
        { label: 'Danh sách tiết kiệm', isCurrent: true } // Mark the last item as current
    ];

    return (
        <div className="mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Danh sách tiết kiệm</h1>
            <Breadcrumbs breadcrumbs={savingsListBreadcrumbs} />
            <div className="max-w-screen-lg mx-auto"> {/* Added max-width and auto horizontal margins for centering */}
                 {/* Pass activeTab state and the change handler to Tabs */}
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

                {/* Conditionally render content based on activeTab */}
                {activeTab === 'savinglist' ? ( // Use 'list' to match the state and tab prop
                    <SavingsList savingsData={savingsData} />
                ) : (
                    <AddSavingsProductContent products={products} />
                )}
            </div>
        </div>
    );
}

export default SavingPage;