import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Button from "../FormElements/Button";
import InputField from "../FormElements/InputField";
import SelectField from "../FormElements/SelectField";
import { checkAvailableTargetAccount } from "../../../../../services/checkingAccountService";

export default function CreateTransactionStep({
    accounts,
    transactionDetails,
    handleInputChange,
    nextStep,
}) {
    const [amountError, setAmountError] = useState("");
    const accountOptions = accounts.map((acc) => ({
        value: acc.accountNumber,
        label: `${acc.accountNumber} - Số dư khả dụng: ${acc.balance.toLocaleString()} VND`,
    }));

    const { data, error, isFetching, refetch } = useQuery(
        ["targetAccount"],
        () => checkAvailableTargetAccount(transactionDetails.targetAccount),
        { enabled: false },
    );

    useEffect(() => {
        if (isFetching) return;
        if (data?.fullName) {
            handleInputChange("receiverName", data.fullName);
        } else {
            handleInputChange("receiverName", "");
        }
    }, [data, isFetching, handleInputChange]);

    // Trigger lookup on blur
    const handleTargetBlur = () => {
        const acct = transactionDetails.targetAccount;
        if (!acct) return;
        refetch();
    };

    const handleAmountChange = (value) => {
        handleInputChange("amount", value);
        const num = parseFloat(value.replace(/[,.]/g, ""));
        const bal = parseFloat(transactionDetails.balance.replace(/[,.]/g, ""));
        if (isNaN(num) || num <= 0) {
            setAmountError("Số tiền không hợp lệ");
        } else if (num > bal) {
            setAmountError("Số tiền vượt quá số dư khả dụng");
        } else {
            setAmountError("");
        }
    };

    const targetError =
        transactionDetails.targetAccount && !isFetching && error
            ? error.message
            : "";

    return (
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h2 className="text-xl font-semibold mb-2">
                Thông tin chuyển tiền
            </h2>

            <SelectField
                label="Tài khoản nguồn"
                value={transactionDetails.sourceAccount}
                onChange={(v) => handleInputChange("sourceAccount", v)}
                options={accountOptions}
            />

            <InputField
                label="Tài khoản người thụ hưởng"
                value={transactionDetails.targetAccount}
                onChange={(v) => handleInputChange("targetAccount", v)}
                onBlur={handleTargetBlur}
                placeholder="Nhập tài khoản thụ hưởng"
            />
            {isFetching && (
                <p className="text-sm text-gray-500 -mt-3">
                    Đang kiểm tra tài khoản…
                </p>
            )}
            {targetError && (
                <p className="text-sm text-red-500 -mt-3">{targetError}</p>
            )}

            <InputField
                label="Người thụ hưởng"
                value={transactionDetails.receiverName}
                placeholder="Họ tên người thụ hưởng"
                disabled
            />

            <InputField
                label="Số tiền"
                value={transactionDetails.amount}
                onChange={handleAmountChange}
                placeholder="Nhập số tiền"
                suffix="VND"
            />
            {amountError && (
                <p className="text-sm text-red-500 -mt-3">{amountError}</p>
            )}

            <InputField
                label="Nội dung giao dịch"
                value={transactionDetails.description}
                onChange={(v) => handleInputChange("description", v)}
                placeholder="Nhập nội dung giao dịch"
                charCount
            />

            <Button
                onClick={nextStep}
                fullWidth
                disabled={
                    !transactionDetails.targetAccount ||
                    !!targetError ||
                    !!amountError ||
                    !transactionDetails.amount
                }
            >
                Tiếp tục
            </Button>
        </div>
    );
}
