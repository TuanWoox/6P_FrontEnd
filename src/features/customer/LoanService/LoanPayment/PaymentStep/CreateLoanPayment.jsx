import Button from "../FormElements/Button";
import SelectField from "../FormElements/SelectField";
import LoanPaymentStatus from "../FormElements/LoanPaymentStatus";
import { useEffect } from "react";

function CreateLoanPayment({
    nextStep,
    accounts,
    payments,
    filteredPayments,
    paymentDetails,
    handleInputChange,
    moneyAddOnOverdue,
    allPaymentsPaid,
}) {
    const accountOptions = accounts.map((acc) => ({
        value: acc.accountNumber,
        label: `${acc.accountNumber} - Số dư khả dụng: ${acc.balance.toLocaleString()} VND`,
    }));

    const paymentOptions = filteredPayments
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .map((pay) => ({
            value: pay._id,
            label: `Trạng thái: ${pay.status} - Số tiền: ${pay.amount.toLocaleString()} VND - Ngày đến hạn: ${new Date(pay.dueDate).toLocaleDateString("vi-VN")}`,
        }));

    const chosenPayment = payments.find(
        (pay) => pay._id === paymentDetails.targetPayment,
    );
    const chosenAccount = accounts.find(
        (acc) => acc.accountNumber === paymentDetails.sourceAccount,
    );

    const isInsufficientBalance =
        chosenAccount && chosenPayment
            ? chosenAccount.balance <
              chosenPayment.amount +
                  (chosenPayment.status === "OVERDUE"
                      ? chosenPayment.overdueDays *
                        moneyAddOnOverdue *
                        chosenPayment.amount
                      : 0)
            : false;

    useEffect(() => {
        if (chosenPayment) {
            handleInputChange("amount", chosenPayment.amount);
        }
    }, [chosenPayment, handleInputChange]);

    return (
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            {allPaymentsPaid ? (
                <p className="text-green-500 text-lg font-semibold">
                    Chúc mừng bạn đã thanh toán hết khoản vay này!
                </p>
            ) : filteredPayments.length === 0 ? (
                <p className="text-blue-500 text-lg font-semibold">
                    Hiện tại không có khoản thanh toán nào cần trả trong vòng 1
                    tháng.
                </p>
            ) : (
                <>
                    <SelectField
                        label="Tài khoản nguồn"
                        value={paymentDetails.sourceAccount}
                        onChange={(v) => handleInputChange("sourceAccount", v)}
                        options={accountOptions}
                    />
                    {isInsufficientBalance && (
                        <p className="text-red-500 text-sm">
                            Tài khoản của bạn không đủ tiền cho khoản thanh toán
                            này.
                        </p>
                    )}
                    <SelectField
                        label="Chọn khoản thanh toán"
                        value={paymentDetails.targetPayment}
                        onChange={(v) => handleInputChange("targetPayment", v)}
                        options={paymentOptions}
                    />
                    {chosenPayment && (
                        <LoanPaymentStatus
                            amount={chosenPayment.amount}
                            dueDate={chosenPayment.dueDate}
                            overdueDays={chosenPayment.overdueDays}
                            status={chosenPayment.status}
                            moneyAddOnOverdue={moneyAddOnOverdue}
                        />
                    )}
                    <Button
                        onClick={nextStep}
                        fullWidth
                        disabled={!chosenPayment || isInsufficientBalance}
                    >
                        Tiếp tục
                    </Button>
                </>
            )}
        </div>
    );
}

export default CreateLoanPayment;
