import { useParams } from "react-router";
import InnerHeader from "../../../../components/InnerHeader";
import LoanAccountCard from "../../LoanService/LoanDetail/LoanAccountCard";
import Tabs from "./Tabs";
import LoanInfoCard from "./LoanInfoCard";
import Loader from "../../../../components/Loader";
import CustomButton from "../../../../components/CustomButton";
import LoanHistoryList from "./LoanHistory/LoanHistoryList";
import { useFetchLoanDetail } from "../../../../hooks/useFetchLoanDetail"; // Đường dẫn tới custom hook của bạn
import { useState } from "react";

const title = "Khoản vay";

const loanDetailBreadcrumbs = [
  { label: "Trang chủ", path: "/customer", icon: true },
  { label: "Danh sách vay", path: "/customer/loan", icon: true },
  { label: "Khoản vay", isCurrent: true },
];

function LoanDetailPage() {
  const { loanId } = useParams();
  const [activeTab, setActiveTab] = useState("info");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Sử dụng custom hook để lấy chi tiết khoản vay
  const { loanDetail, isLoading, isError, error } = useFetchLoanDetail(loanId);

  // loanDetail.loanTypeInterest.loanType.name
  const loanTypeName = loanDetail?.loanTypeInterest?.loanType?.name;

  const totalPaid = loanDetail?.loanPayments
    ? loanDetail.loanPayments.reduce((sum, p) => sum + (p.amount || 0), 0)
    : 0;

  console.log(loanDetail);

  return (
    <div className="mx-auto p-4">
      <InnerHeader title={title} breadcrumbs={loanDetailBreadcrumbs} />
      <div className="max-w-screen-md mx-auto">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <p className="text-red-500">{error?.message || "Đã xảy ra lỗi"}</p>
        ) : (
          <>
            {loanDetail && (
              <>
                <LoanAccountCard
                  id={loanDetail._id || loanDetail.id}
                  loanTypeName={loanTypeName}
                />
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-129 overflow-y-auto">
                  {activeTab === "info" ? (
                    <LoanInfoCard
                      amount={loanDetail.balance}
                      paidAmount={totalPaid}
                      loanType={loanDetail.loanType}
                      startDate={loanDetail.createdAt}
                      dueDate={loanDetail.dueDate}
                      monthlyPayment={loanDetail.monthlyPayment}
                      loanTypeName={loanTypeName}
                      status={loanDetail.status}
                    />
                  ) : (
                    <LoanHistoryList
                      loanHistoryData={loanDetail.loanPayments || []}
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
