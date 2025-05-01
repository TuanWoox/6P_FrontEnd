import { useNavigate } from "react-router";
import Button from "../Button";
import StatusCard from "./StatusCard";

function ResultSavingStep({ data, error, interestsRate, savingTypes }) {
    const navigate = useNavigate();

    const rate = interestsRate?.find(
        (interestRate) => interestRate._id === data.savingTypeInterest,
    );
    const savingType = savingTypes?.find(
        (saving) => saving._id === rate.savingType._id,
    );

    return (
        <div className="max-w-2xl mx-auto p-4">
            <StatusCard data={data} error={error} />

            {/* Phần 5: Chi tiết giao dịch */}
            <div className="bg-gray-100 rounded-lg p-6">
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-gray-600">
                            Số tài khoản tiết kiệm
                        </span>
                        <span className="text-gray-800 font-medium">
                            {data.accountNumber}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Số tiền tiết kiệm</span>
                        <span className="text-gray-800 font-medium">
                            {data.balance}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Ngày mở tài khoản</span>
                        {rate.maturityPeriod > 0 && (
                            <span className="text-gray-600">Ngày hết hạn</span>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-800 font-medium">
                            {new Date(data.createdAt).toLocaleDateString(
                                "vi-VN",
                            )}
                        </span>
                        {rate.maturityPeriod > 0 && (
                            <span className="text-gray-800 font-medium">
                                {new Date(
                                    data.finishEarningDate,
                                ).toLocaleDateString("vi-VN")}
                            </span>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Loại tiết kiệm</span>
                        <span className="text-gray-800 font-medium">
                            {savingType.name}
                        </span>
                    </div>
                    {rate.maturityPeriod > 0 ? (
                        <>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Kỳ hạn</span>
                                <span className="text-gray-800 font-medium">
                                    {rate.maturityPeriod} tháng
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Lãi suất</span>
                                <span className="text-gray-800 font-medium">
                                    {rate.monthlyInterestRate}%/tháng
                                </span>
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-between">
                            <span className="text-gray-600">Lãi suất</span>
                            <span className="text-gray-800 font-medium">
                                {rate.dailyInterestRate}%/ngày
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <Button
                    variant="outline"
                    onClick={() => {
                        navigate("/customer/saving");
                    }}
                >
                    Về trang danh sách tiết kiệm
                </Button>
            </div>
        </div>
    );
}

export default ResultSavingStep;
