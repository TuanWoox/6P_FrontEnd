import Button from "../FormElements/Button";
import InputField from "../FormElements/InputField";
import SelectField from "../FormElements/SelectField";
import LoanPaymentStatus from "../FormElements/LoanPaymentStatus";

function CreateLoanPayment({
    nextStep,
    accounts,
    payments,
    paymentDetails,
    handleInputChange,
}) {
    const accountOptions = accounts.map((acc) => ({
        value: acc.accountNumber,
        label: `${acc.accountNumber} - Số dư khả dụng: ${acc.balance.toLocaleString()} VND`,
    }));
    const paymentOptions = payments.map((pay) => ({
        value: pay._id,
        label: `Khoản vay ${pay._id} - Trạng thái: ${pay.status}`,
    }));
    const chosenPayment = payments.find(
        (pay) => pay._id === paymentDetails.targetPayment,
    );
    console.log(chosenPayment);

    return (
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <SelectField
                label="Tài khoản nguồn"
                value={paymentDetails.sourceAccount}
                onChange={(v) => handleInputChange("sourceAccount", v)}
                options={accountOptions}
            />
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
                    paymentDate={chosenPayment.paymentDate}
                    status={chosenPayment.status}
                    overdueDays={chosenPayment.overdueDays}
                />
            )}
            <Button
                onClick={nextStep}
                fullWidth
                disabled={!chosenPayment || chosenPayment.status === "PAID"}
            >
                Tiếp tục
            </Button>
        </div>
    );
}

export default CreateLoanPayment;
