import { useState } from "react";
import Tabs from "./Tabs";
import InnerHeader from "../../../components/InnerHeader";
import LoanList from "./LoanList";
import AddLoanProductContent from "./AddLoanProductContent";
import products from "./productsData.js";
// import loanData from "./loanData.js";
import { useFetchLoanList } from "../../../hooks/useFetchLoanList";

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
      ? loanData.filter((loan) => loan.status === "ACTIVE")
      : activeTab === "closedloanlist"
      ? loanData.filter((loan) => loan.status === "CLOSED")
      : []
    : [];

  if (isLoading) return <div>Đang tải dữ liệu khoản vay...</div>;
  if (error) return <div>Lỗi: {error.message}</div>;

  return (
    <div className="mx-auto p-4">
      <InnerHeader title={title} breadcrumbs={loansListBreadcrumbs} />
      <div className="max-w-screen-lg mx-auto">
        <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
        <div className="bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-140 overflow-y-auto">
          {activeTab === "loanlist" || activeTab === "closedloanlist" ? (
            <LoanList loanData={filteredLoans} />
          ) : (
            <AddLoanProductContent products={products} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanPage;
