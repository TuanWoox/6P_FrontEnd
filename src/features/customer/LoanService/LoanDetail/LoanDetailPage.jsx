import InnerHeader from "../../../../components/InnerHeader";
import LoanAccountCard from "../../LoanService/LoanDetail/LoanAccountCard";
import Tabs from "./Tabs";
import LoanInfoCard from "./LoanInfoCard";
import Loader from "../../../../components/Loader";
import CustomButton from "../../../../components/CustomButton";
import LoanHistoryList from "./LoanHistory/LoanHistoryList";
import { useFetchLoanDetail } from "../../../../hooks/useFetchLoanDetail"; // Đường dẫn tới custom hook của bạn
import { useState } from "react";
import { useLocation } from "react-router-dom";

const title = "Khoản vay";

const loanDetailBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách vay", path: "/customer/loan", icon: true },
    { label: "Khoản vay", isCurrent: true },
];

function LoanDetailPage() {
    // const { loanId } = useParams();
    const location = useLocation();
    const _id = location.state;
    console.log("Loan ID in loan detail page:", _id);

    const [activeTab, setActiveTab] = useState("info");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Sử dụng custom hook để lấy chi tiết khoản vay
    const { loanDetail, isLoading, isError, error } = useFetchLoanDetail(_id);

    // loanDetail.loanTypeInterest.loanType.name
    const loanTypeName = loanDetail?.loanTypeInterest?.loanType?.name;

    const totalPaid = loanDetail?.loanPayments
        ? loanDetail.loanPayments
              .filter((payment) => payment.status === "PAID") // Chỉ lấy các khoản thanh toán có trạng thái "PAID"
              .reduce((sum, p) => sum + (p.amount || 0), 0)
        : 0;

    const paidLoanPayments = loanDetail?.loanPayments
        ? loanDetail.loanPayments.filter((payment) => payment.status === "PAID") // Lọc danh sách "PAID"
        : [];

    return (
        <div className="p-4 mx-auto">
            <InnerHeader title={title} breadcrumbs={loanDetailBreadcrumbs} />
            <div className="max-w-screen-md mx-auto">
                {isLoading ? (
                    <Loader />
                ) : isError ? (
                    <p className="text-red-500">
                        {error?.message || "Đã xảy ra lỗi"}
                    </p>
                ) : (
                    <>
                        {loanDetail && (
                            <>
                                <LoanAccountCard
                                    id={
                                        loanDetail.accountNumber ||
                                        loanDetail._id
                                    }
                                    loanTypeName={loanTypeName}
                                />
                                <Tabs
                                    activeTab={activeTab}
                                    onTabChange={handleTabChange}
                                />
                                <div className="p-4 overflow-y-auto bg-gray-100 shadow-md rounded-b-2xl max-h-129">
                                    {activeTab === "info" ? (
                                        <LoanInfoCard
                                            amount={loanDetail.balance}
                                            paidAmount={totalPaid}
                                            loanType={loanDetail.loanType}
                                            startDate={loanDetail.createdAt}
                                            dueDate={loanDetail.dueDate}
                                            monthlyPayment={
                                                loanDetail.monthlyPayment
                                            }
                                            loanTypeName={loanTypeName}
                                            status={loanDetail.status}
                                        />
                                    ) : (
                                        <LoanHistoryList
                                            loanHistoryData={
                                                paidLoanPayments || []
                                            }
                                        />
                                    )}
                                </div>
                                <CustomButton
                                    name="THANH TOÁN"
                                    width="w-full"
                                    height="h-12"
                                    state={_id}
                                    link={`/customer/loan/process`}
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
