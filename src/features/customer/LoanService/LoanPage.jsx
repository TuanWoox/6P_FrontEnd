import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "./Tabs";
import InnerHeader from "../../../components/InnerHeader";
import LoanList from "./LoanList";
import AddLoanProductContent from "./AddLoanProductContent";
import { useFetchLoanList } from "../../../hooks/useFetchLoanList";
import Spinner from "../../../components/Spinner";
import Error from "../../../components/Error";

const title = "Danh Sách Vay";

const loansListBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách vay", isCurrent: true },
];

function LoanPage() {
    const [activeTab, setActiveTab] = useState("loanlist");
    const { loanList: loanData, isLoading, error } = useFetchLoanList();

    const handleTabChange = (tab) => setActiveTab(tab);

    const filteredLoans = Array.isArray(loanData)
        ? activeTab === "loanlist"
            ? loanData.filter((loan) => loan.status !== "CLOSED")
            : activeTab === "closedloanlist"
              ? loanData.filter((loan) => loan.status === "CLOSED")
              : []
        : [];

    if (isLoading) return <Spinner />;
    if (error) return <Error />;

    // Animation variants for container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    // Animation for tab content
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            className="mx-auto p-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <InnerHeader title={title} breadcrumbs={loansListBreadcrumbs} />
            <div className="max-w-screen-lg mx-auto">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="bg-gray-100 p-4 rounded-b-2xl shadow-md  overflow-y-auto min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "loanlist" ||
                        activeTab === "closedloanlist" ? (
                            <motion.div
                                key={activeTab}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <LoanList loanData={filteredLoans} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="addloan"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <AddLoanProductContent />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

export default LoanPage;
