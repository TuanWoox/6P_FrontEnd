import CustomButton from "../../../../../components/CustomButton";
import Button from "../Button";

function ResultLoanStep({ goToHome }) {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="bg-gray-100 rounded-lg p-6 mb-4 text-center">
                <div className="text-green-500 font-medium mb-1">VFB 🍀</div>
                <div className="flex justify-center mb-2">
                    {/* <CheckCircleIcon className="h-8 w-8 text-green-500" /> */}
                </div>
                <div className="text-gray-800 font-medium mb-1">
                    Cho vay thành công!
                </div>
                <div className="text-gray-600 text-sm">
                    21:11 Thứ hai 29/09/2024
                </div>
            </div>

            {/* Phần 5: Chi tiết giao dịch */}
            <div className="bg-gray-100 rounded-lg p-6">
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Tài khoản nhận</span>
                        <span className="text-gray-800 font-medium">
                            1048411145
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Sản phẩm vay</span>
                        <span className="text-gray-800 font-medium">
                            Vay tiêu dùng
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Tài khoản vay</span>
                        <span className="text-gray-800 font-medium">
                            CA0000050195612
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Ngày vay</span>
                        <span className="text-gray-600">Ngày hết hạn</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-800 font-medium">
                            29/09/2024
                        </span>
                        <span className="text-gray-800 font-medium">
                            29/09/2025
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Lãi suất</span>
                        <span className="text-gray-800 font-medium">
                            4.8%/tháng
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">
                            Tổng thanh toán tạm tính
                        </span>
                        <span className="text-red-600 font-medium">
                            10.480.000 VND
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Mã giao dịch</span>
                        <span className="text-gray-800 font-medium">
                            735341100
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 mt-6">
                <CustomButton
                    name="Về trang chủ"
                    width="w-full"
                    height="h-12"
                    link={`/customer/loan/`}
                    onClick={goToHome}
                    position="center" // hoặc 'left', 'center'
                />
            </div>
        </div>
    );
}

export default ResultLoanStep;
