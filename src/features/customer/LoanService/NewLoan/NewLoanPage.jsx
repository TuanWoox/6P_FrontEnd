import { useState } from "react";
import InnerHeader from "../../../../components/InnerHeader";
import ProgressSteps from "./ProgressSteps";
import CreateLoanStep from "./NewLoanStep/CreateLoanStep";
import ConfirmLoanStep from "./NewLoanStep/ConfirmLoanStep";
import ResultLoanStep from "./NewLoanStep/ResultLoanStep";

const title = "Danh Sách Vay";

const loansListBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách vay", path: "/customer/loan" },
    { label: "Đăng ký cho vay", isCurrent: true },
];

function NewLoanPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [loanData, setLoanData] = useState(null); // <-- Thêm state này

    const nextStep = () => setCurrentStep((step) => step + 1);
    const preStep = () => setCurrentStep((step) => step - 1);
    const goToHome = () => setCurrentStep(1);

    // Hàm nhận data từ CreateLoanStep
    const handleCreateLoanNext = (data) => {
        setLoanData(data); // Lưu lại dữ liệu form
        nextStep();
    };

    return (
        <div className="mx-auto p-4">
            <InnerHeader title={title} breadcrumbs={loansListBreadcrumbs} />
            <div className="max-w-3xl mx-auto p-4 font-sans">
                <ProgressSteps currentStep={currentStep} />
                {currentStep === 1 && (
                    <CreateLoanStep
                        handleCreateLoanNext={handleCreateLoanNext}
                    />
                )}
                {currentStep === 2 && (
                    <ConfirmLoanStep
                        nextStep={nextStep}
                        preStep={preStep}
                        loanData={loanData} // <-- Truyền data sang ConfirmLoanStep
                        handleCreateLoanNext={handleCreateLoanNext} // <-- Truyền hàm này để ConfirmLoanStep có thể gọi nextStep
                    />
                )}
                {currentStep === 3 && (
                    <ResultLoanStep goToHome={goToHome} loanData={loanData} />
                )}
            </div>
        </div>
    );
}

export default NewLoanPage;
