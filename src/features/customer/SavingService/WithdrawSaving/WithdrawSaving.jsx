import WithdrawDetailCard from "./WithdrawDetailCard";

function WithdrawSaving({
    rawSavingDetail,
    principalAmount,
    today,
    annualInterestRate,
    finalAmountReceived,
    isEarlyWithdrawal,
    penaltyAmount,
    onCancel,
    onConfirm,
}) {
    return (
        <>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {isEarlyWithdrawal ? "TẤT TOÁN TRƯỚC HẠN" : "TẤT TOÁN"}
            </h1>
            <p className="text-gray-600 mb-6">
                Quý khách vui lòng kiểm tra và xác nhận thông tin giao dịch
            </p>
            <WithdrawDetailCard
                accountDetails={{
                    accountNumber: rawSavingDetail.accountNumber,
                    principalAmount: principalAmount.toLocaleString(),
                    withdrawalDate: today.toLocaleDateString("vi-VN"),
                    annualInterestRate: `${annualInterestRate}%/năm`,
                    amountReceived: Math.round(finalAmountReceived).toLocaleString(),
                }}
                isEarlyWithdrawal={isEarlyWithdrawal}
                percentMoneyLose={
                    isEarlyWithdrawal ? Math.round(penaltyAmount).toLocaleString() : null
                }
            />
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded transition duration-200"
                >
                    ← Quay lại
                </button>
                <button
                    onClick={onConfirm}
                    className="self-start bg-[#95C475] text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-[#95C475] transition-colors duration-200 border border-[#95C475]"
                >
                    Tiếp tục tất toán
                </button>
            </div>
        </>
    );
}

export default WithdrawSaving;
