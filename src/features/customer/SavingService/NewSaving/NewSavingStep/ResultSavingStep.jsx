import { useNavigate } from "react-router";
import Button from "../Button";
import StatusCard from "./StatusCard";

function ResultSavingStep() {
    const navigate = useNavigate();
    return (
        <div className="max-w-2xl mx-auto p-4">
            <StatusCard data={"Hi"} />

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
