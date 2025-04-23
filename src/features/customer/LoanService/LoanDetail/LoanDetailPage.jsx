import { useEffect, useState } from "react";
import { useParams } from "react-router";
import InnerHeader from "../../../../components/InnerHeader";
import LoanAccountCard from "../../LoanService/LoanDetail/LoanAccountCard";
import Tabs from "./Tabs";
import LoanInfoCard from "./LoanInfoCard";
import loanData from "../loanData";
import Loader from "../../../../components/Loader"; // Import your Loader component
import CustomButton from "../../../../components/CustomButton";
import loanHistoryData from "./LoanHistory/loanHistoryData";
import LoanHistoryList from "./LoanHistory/LoanHistoryList";

const title = "Khoản vay";

const loanDetailBreadcrumbs = [
  { label: "Trang chủ", path: "/customer", icon: true },
  { label: "Danh sách vay", path: "/customer/loan", icon: true },
  { label: "Khoản vay", isCurrent: true }, // Mark the last item as current
];

function LoanDetailPage() {
  const { loanId } = useParams();
  const [activeTab, setActiveTab] = useState("info"); // Default to 'savinglist' (Danh sách)

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [loanAccountData, setLoanAccountData] = useState(null);
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // In a real app, you'd fetch data from an API using accountId
    // Example: fetch(`/api/savings/${accountId}`).then(...)

    // For now, find the data in the imported array
    const foundAccount = loanData.find((account) => account.id === loanId);

    if (foundAccount) {
      setLoanAccountData(foundAccount);
      setLoading(false);
    } else {
      setError("Loan account not found.");
      setLoading(false);
    }

    // Clean up effect if needed (e.g., abort fetch request)
  }, [loanId]); // Re-run effect if accountId changes

  return (
    <div className="mx-auto p-4">
      <InnerHeader title={title} breadcrumbs={loanDetailBreadcrumbs} />
      <div className="max-w-screen-md mx-auto">
        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            {/* ✅ Di chuyển destructure vào đây */}
            {loanAccountData && (
              <>
                <LoanAccountCard
                  id={loanAccountData.id}
                  loanType={loanAccountData.loanType}
                />
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-129 overflow-y-auto">
                  {activeTab === "info" ? (
                    <LoanInfoCard
                      amount={loanAccountData.amount}
                      paidAmount={loanAccountData.paidAmount}
                      loanType={loanAccountData.loanType}
                      startDate={loanAccountData.startDate}
                      dueDate={loanAccountData.dueDate}
                      monthlyPayment={loanAccountData.monthlyPayment}
                    />
                  ) : (
                    <LoanHistoryList
                      loanHistoryData={loanHistoryData.payments.filter(
                        (item) => item.loan.loanID === loanId
                      )}
                    />
                  )}
                </div>
                <CustomButton
                  name="THANH TOÁN"
                  width="w-full"
                  height="h-12"
                  link="/"
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default LoanDetailPage;
