import { useState } from "react";
import InnerHeader from "../../../../components/InnerHeader";
import ProgressSteps from "../../LoanService/NewLoan/ProgressSteps";
import CreateSavingStep from "./NewSavingStep/CreateSavingStep";

const title = "Danh sách Tiết Kiệm";

const savingsListBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách tiết kiệm", path: "/customer/saving" },
    { label: "Đăng ký tiết kiệm", isCurrent: true },
];

function NewSavingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    return (
        <div className="mx-auto p-4">
            <InnerHeader title={title} breadcrumbs={savingsListBreadcrumbs} />
            <div className="max-w-3xl mx-auto p-4 font-sans">
                <ProgressSteps currentStep={1} />
                {currentStep === 1 && <CreateSavingStep />}
            </div>
        </div>
    );
}

export default NewSavingPage;
