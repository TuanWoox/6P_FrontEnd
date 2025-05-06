import { motion, AnimatePresence } from "framer-motion";
import SavingsList from "./SavingList";
import Tabs from "./Tabs";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import AddSavingsProductContent from "./AddSavingProductContent.jsx";
import InnerHeader from "../../../components/InnerHeader.jsx";
import productsData from "./productsData.js";
import { useState } from "react";
import { useFetchSavingList } from "../../../hooks/useFetchSavingList";
import Spinner from "../../../components/Spinner.jsx";

const title = "Danh Sách Tiết Kiệm";

const savingsListBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách tiết kiệm", isCurrent: true },
];

function SavingPage() {
    const [activeTab, setActiveTab] = useState("savinglist");

    const { savingList, isLoading, error } = useFetchSavingList();
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="mx-auto p-4">
            <InnerHeader title={title} breadcrumbs={savingsListBreadcrumbs} />
            <div className="max-w-screen-lg mx-auto">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />

                <AnimatePresence mode="wait">
                    {activeTab === "savinglist" ? (
                        <motion.div
                            key="savinglist"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isLoading && (
                                <div className="text-center text-gray-500 py-8">
                                    <Spinner />
                                </div>
                            )}
                            {error && (
                                <div className="text-center text-red-500 py-8">
                                    Đã xảy ra lỗi khi tải dữ liệu.
                                </div>
                            )}
                            {!isLoading && !error && (
                                <SavingsList savingsData={savingList || []} />
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="addsaving"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <AddSavingsProductContent products={productsData} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default SavingPage;
