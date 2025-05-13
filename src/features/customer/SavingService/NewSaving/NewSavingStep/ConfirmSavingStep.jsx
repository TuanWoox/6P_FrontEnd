import React, { useEffect, useState } from "react";
import Button from "../Button";
import OtpModal from "../../../../../components/OTPModal";

const ConfirmSavingStep = ({
    state,
    interestsRate,
    savingTypes,
    dispatch,
    personalInfo,
    isCreatingSuccess,
    createSavingAccountFn,
}) => {
    const [otpModal, setOtpModal] = useState(false);

    useEffect(() => {
        if (isCreatingSuccess) dispatch({ type: "NEXT_STEP" });
    }, [isCreatingSuccess, dispatch]);

    // Find the selected saving type and interest rate
    const savingType = savingTypes?.find(
        (saving) => saving._id === state.formData.savingTypeId,
    );

    const rate = interestsRate?.find(
        (interestRate) =>
            interestRate._id === state.formData.savingTypeInterest,
    );

    // Format balance with VND currency
    const formattedBalance =
        state.formData.balance
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";

    const onNextStep = async () => {
        await createSavingAccountFn(state.formData);
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold mb-4">
                Quý khách vui lòng kiểm tra và xác nhận thông tin giao dịch
            </h2>

            <div className="bg-gray-100 rounded-xl p-6 space-y-4">
                <div className="flex justify-between">
                    <span className="text-gray-600">Tài khoản nguồn</span>
                    <span className="font-semibold">
                        {state.formData.accountNumber}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">Số tiền gửi</span>
                    <span className="font-semibold text-red-600">
                        {formattedBalance}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">Loại tiết kiệm</span>
                    <span className="font-semibold">{savingType?.name}</span>
                </div>

                {rate && rate.maturityPeriod > 0 && (
                    <div className="flex justify-between">
                        <span className="text-gray-600">Kỳ hạn</span>
                        <span className="font-semibold">
                            {rate?.maturityPeriod} tháng
                        </span>
                    </div>
                )}

                <div className="flex justify-between">
                    <span className="text-gray-600">Lãi suất</span>
                    {rate ? (
                        rate.maturityPeriod > 0 ? (
                            <span className="font-semibold">
                                {rate?.monthlyInterestRate}%/tháng
                            </span>
                        ) : (
                            <span className="font-semibold">
                                {rate?.dailyInterestRate}%/ngày
                            </span>
                        )
                    ) : (
                        <span className="font-semibold">N/A</span>
                    )}
                </div>

                {rate && (
                    <div className="flex justify-between">
                        <span className="text-gray-600">
                            Lãi suất (hàng năm)
                        </span>
                        <span className="font-semibold">
                            {rate?.annualInterestRate}%/năm
                        </span>
                    </div>
                )}

                <hr className="my-4" />

                <p className="text-sm text-gray-500">
                    Thỏa thuận cụ thể và các thông tin: số tài khoản tiền gửi,
                    ngày gửi tiền, ngày đến hạn sẽ được gửi đến địa chỉ thư điện
                    tử (email) mà Quý khách đã đăng ký với 6PBank
                </p>

                <div className="flex justify-between mt-6">
                    <Button
                        variant="outline"
                        onClick={() => {
                            dispatch({ type: "PREVIOUS_STEP" });
                        }}
                    >
                        Quay lại
                    </Button>

                    <Button
                        variant="primary"
                        onClick={() => {
                            setOtpModal(true);
                        }}
                    >
                        Xác nhận
                    </Button>
                </div>
            </div>

            <OtpModal
                isOpen={otpModal}
                setIsOpen={setOtpModal}
                action="createSavingAccount"
                email={personalInfo.customerProfile.email}
                onNextStep={onNextStep}
            />
        </div>
    );
};

export default ConfirmSavingStep;
