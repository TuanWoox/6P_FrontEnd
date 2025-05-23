import { useState } from "react";
import Tabs from "./Tabs";
import InnerHeader from "../../../components/InnerHeader";
import LoanList from "./LoanList";
import AddLoanProductContent from "./AddLoanProductContent";
// import loanData from "./loanData.js";
import { useFetchLoanList } from "../../../hooks/useFetchLoanList";
import Spinner from "../../../components/Spinner";
import Error from "../../../components/Error";

const title = "Danh Sách Vay";

const loansListBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách vay", isCurrent: true }, // Mark the last item as current
];

function LoanPage() {
    const [activeTab, setActiveTab] = useState("loanlist"); // Default to 'savinglist' (Danh sách)
    const { loanList: loanData, isLoading, error } = useFetchLoanList();

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Lọc dữ liệu dựa vào activeTab
    const filteredLoans = Array.isArray(loanData)
        ? activeTab === "loanlist"
            ? loanData.filter((loan) => loan.status !== "CLOSED")
            : activeTab === "closedloanlist"
              ? loanData.filter((loan) => loan.status === "CLOSED")
              : []
        : [];

    if (isLoading)
        return (
            <div>
                <Spinner />
            </div>
        );
    if (error) return <Error />;

    return (
        <div className="mx-auto p-4">
            <InnerHeader title={title} breadcrumbs={loansListBreadcrumbs} />
            <div className="max-w-screen-lg mx-auto">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-140 overflow-y-auto">
                    {activeTab === "loanlist" ||
                    activeTab === "closedloanlist" ? (
                        <LoanList loanData={filteredLoans} />
                    ) : (
                        <AddLoanProductContent />
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoanPage;
