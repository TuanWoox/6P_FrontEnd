import { useState, useCallback, useEffect } from "react";
import OtpModal from "../../../../../components/OTPModal";
import Button from "../FormElements/Button";
import TransactionDetail from "../FormElements/TransactionDetail";
import { useTransferMoney } from "../../../../../hooks/useTransferMoney";

export default function ConfirmTransactionStep({
    transactionDetails,
    setTransactionDetails, // cần thêm setter từ parent
    nextStep,
    preStep,
    email,
}) {
    const {
        mutate: transfer,
        isLoading: isTransferring,
        error: transferError,
        data: transferResult,
    } = useTransferMoney();

    const [otpModalOpen, setOtpModalOpen] = useState(false);

    const handleOtpSuccess = useCallback(() => {
        transfer(transactionDetails);
    }, [transfer, transactionDetails]);

    useEffect(() => {
        if (transferResult) {
            setTransactionDetails((td) => ({
                ...td,
                transactionId: transferResult.transactionID,
            }));
            nextStep();
        }
    }, [transferResult, nextStep, setTransactionDetails]);
    return (
        <>
            <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-6">
                    Quý khách vui lòng kiểm tra và xác nhận thông tin giao dịch
                </h2>

                <div className="space-y-4 mb-8">
                    <TransactionDetail
                        label="Tài khoản nguồn"
                        value={transactionDetails.sourceAccount}
                    />
                    <TransactionDetail
                        label="Tài khoản nhận"
                        value={transactionDetails.targetAccount}
                    />
                    <TransactionDetail
                        label="Tên người nhận"
                        value={transactionDetails.receiverName}
                        highlight
                    />
                    <TransactionDetail
                        label="Nội dung"
                        value={transactionDetails.description}
                    />
                    <div className="border-t border-gray-200 pt-4">
                        <TransactionDetail
                            label="Số tiền"
                            value={`${Number(transactionDetails.amount).toLocaleString()} VND`}
                            highlight
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button
                        variant="secondary"
                        onClick={preStep}
                        disabled={isTransferring}
                    >
                        Quay lại
                    </Button>
                    <Button
                        onClick={() => setOtpModalOpen(true)}
                        fullWidth
                        disabled={isTransferring}
                    >
                        {isTransferring ? "Đang xử lý..." : "Tiếp tục"}
                    </Button>
                </div>

                {/* show transfer errors (if any) */}
                {transferError && (
                    <p className="mt-4 text-center text-red-500">
                        {transferError.message}
                    </p>
                )}
            </div>

            {/* OTP Modal */}
            <OtpModal
                isOpen={otpModalOpen}
                setIsOpen={setOtpModalOpen}
                action="transfer"
                email={email}
                onNextStep={handleOtpSuccess}
            />
        </>
    );
}
