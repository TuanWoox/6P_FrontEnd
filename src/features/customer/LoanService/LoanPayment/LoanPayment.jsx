import { useParams } from "react-router-dom";
import { useState } from "react";
import InnerHeader from "../../../../components/InnerHeader.jsx";
import ProgressSteps from "./ProgressSteps.jsx";
import CreateLoanPayment from "./PaymentStep/CreateLoanPaymentStep.jsx";
import ConfirmLoanPaymentStep from "./PaymentStep/ConfirmLoanPaymentStep.jsx";
import ResultLoanPaymentStep from "./PaymentStep/ResultLoanPaymentStep.jsx";

function LoanPayment() {
    const title = "Thanh toán khoản vay";
    const { loanId } = useParams();
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep((step) => step + 1);
    const preStep = () => setCurrentStep((step) => step - 1);
    const goToHome = () => setCurrentStep(1);

    const paymentBreadcrumbs = [
        { label: "Trang chủ", path: "/customer", icon: true },
        { label: "Danh sách vay", path: "/customer/loan", icon: true },
        { label: "Khoản vay", path: `/customer/loan/${loanId}`, icon: true },
        {
            label: "Thanh toán",
            path: `/customer/loan/${loanId}/process`,
            icon: true,
        },
    ];

    return (
        <div>
            <InnerHeader title={title} breadcrumbs={paymentBreadcrumbs} />
            <div className="max-w-3xl mx-auto p-4 font-sans">
                <ProgressSteps currentStep={currentStep} />
                {currentStep === 1 && (
                    <CreateTransactionStep nextStep={nextStep} />
                )}

                {currentStep === 2 && (
                    <ConfirmTransactionStep preStep={preStep} />
                )}

                {currentStep === 3 && (
                    <ResultTransactionStep goToHome={goToHome} />
                )}
            </div>
        </div>
    );
}

export default LoanPayment;
