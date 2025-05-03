import React, { useState, useEffect } from "react";
import Button from "../FormElements/Button";
import LoanPaymentStatus from "../FormElements/LoanPaymentStatus";
import OtpModal from "../../../../../components/OTPModal";
import { getEmail } from "../../../../../services/customerService";
import { useLoanPayment } from "../../../../../hooks/useLoanPayment";

function ConfirmLoanPayment({
    preStep,
    nextStep,
    accounts,
    payments,
    paymentDetails,
}) {
    const [otpModal, setOtpModal] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    const { mutate: loanPayment } = useLoanPayment();

    const chosenPayment = payments.find(
        (pay) => pay._id === paymentDetails.targetPayment,
    );
    const chosenAccount = accounts.find(
        (acc) => acc.accountNumber === paymentDetails.sourceAccount,
    );

    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const emailData = await getEmail();
                setUserEmail(emailData.email);
            } catch (error) {
                console.error("Lỗi truy xuất Email:", error);
            }
        };
        fetchEmail();
    }, []);

    const handleClickConfirm = () => {
        setOtpModal(true);
    };

    const handleOtpSuccess = () => {
        const paymentData = {
            sourceAccount: paymentDetails.sourceAccount,
            targetPayment: paymentDetails.targetPayment,
            amount: paymentDetails.amount,
        };

        loanPayment(paymentData, {
            onSuccess: () => {
                console.log("Thanh toán thành công!");
                nextStep();
            },
            onError: (error) => {
                console.error("Lỗi thanh toán:", error.message);
            },
        });
    };

    return (
        <div>
            <p className="text-2xl font-semibold mb-4">
                Quý khách vui lòng kiểm tra và xác nhận thông tin giao dịch
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">
                        Tài khoản nguồn:
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        {chosenAccount.accountNumber}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">
                        Số dư khả dụng:
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        {chosenAccount.balance.toLocaleString()} VND
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">
                        Khoản thanh toán:
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        {chosenPayment._id}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">
                        Số tiền thanh toán:
                    </p>
                    <p className="text-lg font-semibold mb-2">
                        {chosenPayment.amount.toLocaleString()} VND
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold mb-2">
                        Tình trạng của khoản thanh toán:
                    </p>
                    <p
                        className={`text-lg font-semibold mb-2 ${
                            chosenPayment.status === "OVERDUE"
                                ? "text-red-500"
                                : ""
                        }`}
                    >
                        {chosenPayment.status}
                    </p>
                </div>
                <Button onClick={preStep} variant="secondary" fullWidth>
                    Quay lại
                </Button>
                <Button onClick={handleClickConfirm} fullWidth>
                    Xác nhận
                </Button>
            </div>
            <OtpModal
                isOpen={otpModal}
                setIsOpen={setOtpModal}
                action="loan-payment"
                email={userEmail}
                onNextStep={handleOtpSuccess}
            />
        </div>
    );
}

export default ConfirmLoanPayment;
