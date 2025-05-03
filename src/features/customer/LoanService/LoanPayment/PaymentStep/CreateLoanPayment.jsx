import Button from "../FormElements/Button";
import InputField from "../FormElements/InputField";
import SelectField from "../FormElements/SelectField";
import LoanPaymentStatus from "../FormElements/LoanPaymentStatus";
import { useEffect } from "react";

function CreateLoanPayment({
    nextStep,
    accounts,
    payments,
    paymentDetails,
    handleInputChange,
    moneyAddOnOverdue,
}) {
    const unpaidPayments = payments.filter((pay) => pay.status !== "PAID");
    const allPaymentsPaid = unpaidPayments.length === 0;

    const accountOptions = accounts.map((acc) => ({
        value: acc.accountNumber,
        label: `${acc.accountNumber} - Số dư khả dụng: ${acc.balance.toLocaleString()} VND`,
    }));
    const paymentOptions = unpaidPayments.map((pay) => ({
        value: pay._id,
        label: `Khoản vay ${pay._id} - Trạng thái: ${pay.status}`,
    }));
    const chosenPayment = unpaidPayments.find(
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
