import { formatCurrency } from "../../../../../utils/helpers";
import Button from "../Button";
import OtpModal from "../../../../../components/OTPModal";
import { useEffect, useState } from "react";
import { getEmail } from "../../../../../services/customerService";
import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useCreateNewLoan } from "../../../../../hooks/useCreateNewLoan";
// import { createPayments } from "../../../../../services/paymentService";

function ConfirmLoanStep({ preStep, loanData, handleCreateLoanNext }) {
    const [otpModalOpen, setOtpModalOpen] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    const today = new Date();
    const dueDate = new Date(today);
    dueDate.setMonth(
        today.getMonth() +
            parseInt(loanData.selectedLoanInterestRate.termMonths),
    );

    // Format lại theo kiểu Việt Nam (ví dụ: 28/10/2025)
    const formattedDueDate = dueDate.toLocaleDateString("vi-VN");

    // Tính số tiền trả mỗi tháng

    const annualInterestRate =
        loanData.selectedLoanInterestRate.annualInterestRate;

    const totalInterest = annualInterestRate * parseInt(loanData.loanAmount);
    const totalPayment = parseInt(loanData.loanAmount) + totalInterest;

    //lấy email của người dùng để sử dụng cho OTP
    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const emailData = await getEmail();
                setUserEmail(emailData.email);
            } catch (error) {
                console.error("Lỗi truy xuất Email:", error);
            }
        };
        fetchEmail();
    }, []);

    const queryClient = new QueryClient();

    const {
        mutate: createNewLoan,
        isLoading: isCreating,
        // error: createError,
    } = useCreateNewLoan({
        onSuccess: (result) => {
            toast.success("Tạo khoản vay thành công!");
            queryClient.invalidateQueries({ queryKey: ["loanList"] });
            // handleCreateLoanNext(result);
            // nextStep();
        },
        onError: (error) => toast.error(error.message),
    });

    // Trong hàm xử lý tạo khoản vay
    const handleCreateLoan = async (loanData) => {
        try {
            // Tạo khoản vay và chờ kết quả trả về
            const loanResponse = await new Promise((resolve, reject) => {
                createNewLoan(loanData, {
                    onSuccess: resolve,
                    onError: reject,
                });
            });

            // Gọi API để lưu các kỳ thanh toán
            // await createPayments(payments);

            // Chuyển đến bước tiếp theo
            handleCreateLoanNext(loanResponse);
        } catch (error) {
            console.error("Error creating loan:", error);
            toast.error("Không thể tạo khoản vay. Vui lòng thử lại.");
        }
    };

    function handleNext() {
        // Gọi hàm tiếp theo trong quy trình
        // createNewLoan(loanData);
        handleCreateLoan(loanData);
    }

    return (
        <>
            <div className="max-w-2xl p-4 mx-auto">
                {/* Thông tin khoản vay đã được duyệt */}
                <div className="p-6 mb-6 bg-gray-100 rounded-lg">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Thời hạn</span>
                            <span className="font-medium text-gray-900">
                                {loanData.selectedLoanInterestRate.termMonths}{" "}
                                tháng
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Ngày vay</span>
                            <span className="font-medium text-gray-900">
                                {new Date().toLocaleDateString("vi-VN")}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Ngày hết hạn</span>
                            <span className="font-medium text-gray-900">
                                {formattedDueDate}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Chi tiết khoản vay */}
                <div className="p-6 mb-6 bg-gray-100 rounded-lg">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Lãi suất năm</span>
                            <span className="font-medium text-gray-900">
                                {(annualInterestRate * 100).toFixed(1)} %
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">Phí thu hộ</span>
                            <span className="font-medium text-gray-900">
                                0 VND
                            </span>
                        </div>
                        <div className="my-2 border-b border-gray-200"></div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-700">
                                Số tiền thực nhận
                            </span>
                            <span className="font-medium text-red-600">
                                {formatCurrency(loanData.loanAmount)} VND
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="secondary" onClick={preStep}>
                        Quay lại
                    </Button>
                    <Button
                        onClick={() => setOtpModalOpen(true)}
                        isDisable={isCreating}
                    >
                        {isCreating ? "Đang tạo tài khoản" : "Tiếp tục"}
                    </Button>
                </div>
            </div>
            <OtpModal
                isOpen={otpModalOpen}
                setIsOpen={setOtpModalOpen}
                action="createNewLoan"
                onNextStep={handleNext}
                email={userEmail}
            />
        </>
    );
}

export default ConfirmLoanStep;
