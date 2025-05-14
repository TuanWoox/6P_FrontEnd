import { useLocation, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import InnerHeader from "../../../../components/InnerHeader.jsx";
import ProgressSteps from "../../../../components/ProgressStep.jsx";
import CreateLoanPayment from "./PaymentStep/CreateLoanPayment.jsx";
import ConfirmLoanPayment from "./PaymentStep/ConfirmLoanPayment.jsx";
import ResultLoanPayment from "./PaymentStep/ResultLoanPayment.jsx";
import useCheckingAccounts from "../../../../hooks/useGetCheckingAccount.js";
import { useFetchLoanDetail } from "../../../../hooks/useFetchLoanDetail.js";
import { useUpdateLoanPaymentsQuery } from "../../../../hooks/useUpdateLoanPayments.js";
import Spinner from "../../../../components/Spinner.jsx";

function LoanPayment() {
    const title = "Thanh toán khoản vay";
    const location = useLocation();
    const _id = location.state;
    const loanId = _id;
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const { accounts } = useCheckingAccounts();
    const { isLoading: isUpdating, isError: isUpdateError } =
        useUpdateLoanPaymentsQuery(loanId);
    const { loanDetail, isLoading, isError, error } =
        useFetchLoanDetail(loanId);
    const [paymentDetails, setPaymentDetails] = useState({
        sourceAccount: "",
        targetPayment: "",
        amount: "",
    });

    const handleInputChange = useCallback((field, value) => {
        setPaymentDetails((prev) => ({
            ...prev,
            [field]: value,
        }));
    }, []);

    const nextStep = async () => {
        setCurrentStep((step) => step + 1);
    };

    const preStep = () => setCurrentStep((step) => step - 1);
    const goToHome = () => navigate(`/customer/loan/${loanId}`);

    const paymentBreadcrumbs = [
        { label: "Trang chủ", path: "/customer", icon: true },
        { label: "Danh sách vay", path: "/customer/loan", icon: true },
        {
            label: "Thanh toán",
            isCurrent: true,
            icon: true,
        },
    ];

    if (isLoading || isUpdating)
        return (
            <div className="py-8 text-center">
                <Spinner />
            </div>
        );
    if (isError || isUpdateError)
        return (
            <div className="py-8 text-center text-red-600">
                Lỗi tải tài khoản: {error?.message}
            </div>
        );

    const unpaidPayments = loanDetail.loanPayments.filter(
        (pay) => pay.status !== "PAID",
    );

    const today = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(today.getMonth() + 1);

    const filteredPayments = unpaidPayments.filter(
        (pay) => new Date(pay.dueDate) <= oneMonthLater,
    );

    const allPaymentsPaid = unpaidPayments.length === 0;
    const noPaymentThisMonth = filteredPayments.length === 0;

    return (
        <div>
            <InnerHeader title={title} breadcrumbs={paymentBreadcrumbs} />
            <div className="max-w-3xl p-4 mx-auto font-sans">
                {!noPaymentThisMonth && (
                    <ProgressSteps currentStep={currentStep} />
                )}

                {currentStep === 1 && (
                    <CreateLoanPayment
                        nextStep={nextStep}
                        accounts={accounts}
                        payments={loanDetail.loanPayments}
                        filteredPayments={filteredPayments}
                        paymentDetails={paymentDetails}
                        handleInputChange={handleInputChange}
                        moneyAddOnOverdue={
                            loanDetail.loanTypeInterest.moneyAddOnOverdue
                        }
                        allPaymentsPaid={allPaymentsPaid}
                    />
                )}

                {currentStep === 2 && (
                    <ConfirmLoanPayment
                        preStep={preStep}
                        nextStep={nextStep}
                        accounts={accounts}
                        payments={loanDetail.loanPayments}
                        paymentDetails={paymentDetails}
                        moneyAddOnOverdue={
                            loanDetail.loanTypeInterest.moneyAddOnOverdue
                        }
                    />
                )}

                {currentStep === 3 && (
                    <ResultLoanPayment
                        goToHome={goToHome}
                        paymentDetails={paymentDetails}
                        payments={loanDetail.loanPayments}
                        moneyAddOnOverdue={
                            loanDetail.loanTypeInterest.moneyAddOnOverdue
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default LoanPayment;
