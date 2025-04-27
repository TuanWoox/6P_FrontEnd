import { useState, useEffect, useCallback } from "react";
import ProgressSteps from "./ProgressSteps";
import CreateTransactionStep from "./TransferStep/CreateTransactionStep";
import ConfirmTransactionStep from "./TransferStep/ConfirmTransactionStep";
import ResultTransactionStep from "./TransferStep/ResultTransactionStep";
import InnerHeader from "../../../../components/InnerHeader.jsx";
import useCheckingAccounts from "../../../../hooks/useGetCheckingAccount.js";

export default function TransferPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const {
        accounts,
        loading: accountsLoading,
        error: accountsError,
    } = useCheckingAccounts();

    const [transactionDetails, setTransactionDetails] = useState({
        sourceAccount: "",
        balance: "",
        targetAccount: "",
        amount: "",
        description: "",
        receiverName: "",
        receiverBank: "",
        transactionId: "",
    });
    const chosenAccount = accounts.find(
        (account) => account.accountNumber === transactionDetails.sourceAccount,
    );
    useEffect(() => {
        if (accounts.length > 0) {
            setTransactionDetails((td) => ({
                ...td,
                sourceAccount: accounts[0].accountNumber,
                balance: accounts[0].balance,
            }));
        }
    }, [accounts]);
    console.log(accounts);
    const handleInputChange = useCallback((field, value) => {
        setTransactionDetails((prev) => ({
            ...prev,
            [field]: value,
        }));
    }, []);

    const nextStep = () => setCurrentStep((step) => step + 1);
    const preStep = () => setCurrentStep((step) => step - 1);
    const goToHome = () => setCurrentStep(1);

    const title = "Chuyển tiền";
    const transferBreadcrumbs = [
        { label: "Trang chủ", path: "/customer", icon: true },
        { label: "Chuyển tiền", isCurrent: true },
    ];

    if (accountsLoading)
        return <div className="text-center py-8">Đang tải tài khoản...</div>;
    if (accountsError)
        return (
            <div className="text-center py-8 text-red-600">
                Lỗi tải tài khoản: {accountsError.message}
            </div>
        );

    return (
        <>
            <InnerHeader title={title} breadcrumbs={transferBreadcrumbs} />
            <div className="max-w-3xl mx-auto p-4 font-sans">
                <ProgressSteps currentStep={currentStep} />

                {currentStep === 1 && (
                    <CreateTransactionStep
                        accounts={accounts}
                        transactionDetails={transactionDetails}
                        handleInputChange={handleInputChange}
                        nextStep={nextStep}
                    />
                )}

                {currentStep === 2 && (
                    <ConfirmTransactionStep
                        transactionDetails={transactionDetails}
                        nextStep={nextStep}
                        setTransactionDetails={setTransactionDetails}
                        preStep={preStep}
                        email={chosenAccount?.owner.email}
                    />
                )}

                {currentStep === 3 && (
                    <ResultTransactionStep
                        transactionDetails={transactionDetails}
                        goToHome={goToHome}
                    />
                )}
            </div>
        </>
    );
}
