import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressSteps from "../../LoanService/NewLoan/ProgressSteps.jsx";
import CreateTransactionStep from "./TransferStep/CreateTransactionStep";
import ConfirmTransactionStep from "./TransferStep/ConfirmTransactionStep";
import ResultTransactionStep from "./TransferStep/ResultTransactionStep";
import InnerHeader from "../../../../components/InnerHeader.jsx";
import useCheckingAccounts from "../../../../hooks/useGetCheckingAccount.js";
import Spinner from "../../../../components/Spinner.jsx";

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

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    if (accountsLoading)
        return (
            <div className="text-center py-8">
                <Spinner />
            </div>
        );

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
                <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <CreateTransactionStep
                                accounts={accounts}
                                transactionDetails={transactionDetails}
                                handleInputChange={handleInputChange}
                                nextStep={nextStep}
                            />
                        </motion.div>
                    )}
                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <ConfirmTransactionStep
                                transactionDetails={transactionDetails}
                                nextStep={nextStep}
                                setTransactionDetails={setTransactionDetails}
                                preStep={preStep}
                                email={chosenAccount?.owner.email}
                            />
                        </motion.div>
                    )}
                    {currentStep === 3 && (
                        <motion.div
                            key="step3"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <ResultTransactionStep
                                transactionDetails={transactionDetails}
                                goToHome={goToHome}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
