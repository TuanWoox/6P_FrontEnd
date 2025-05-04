import { formatCurrency } from "../../../../../utils/helpers";
import Button from "../Button";
import OtpModal from "../../../../../components/OTPModal";
import { useEffect, useState } from "react";
import { getEmail } from "../../../../../services/customerService";
import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useCreateNewLoan } from "../../../../../hooks/useCreateNewLoan";
import { createPayments } from "../../../../../services/paymentService";

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
        // isLoading: isCreating,
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

    // Tính toán các kỳ thanh toán
    const calculatePayments = (
        loanId,
        startDate,
        termMonths,
        monthlyPayment,
    ) => {
        const payments = [];
        const dueDate = new Date(startDate);

        for (let month = 1; month <= termMonths; month++) {
            // Tăng tháng lên 1 cho mỗi kỳ thanh toán
            dueDate.setMonth(dueDate.getMonth() + 1);

            const payment = {
                loan: loanId,
                amount: monthlyPayment,
                dueDate: new Date(dueDate), // Clone ngày để tránh reference
                status: "PENDING",
            };

            payments.push(payment);
        }

        return payments;
    };

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

            // Tính toán monthlyPayment (nếu chưa có)
            const monthlyPayment = calculateMonthlyPayment(
                loanData.loanAmount,
                loanData.selectedLoanInterestRate.annualInterestRate,
                loanData.selectedLoanInterestRate.termMonths,
            );

            // Tạo các kỳ thanh toán
            const payments = calculatePayments(
                loanResponse._id,
                new Date(),
                loanData.selectedLoanInterestRate.termMonths,
                monthlyPayment,
            );

            // Gọi API để lưu các kỳ thanh toán
            await createPayments(payments);

            // Chuyển đến bước tiếp theo
            handleCreateLoanNext(loanResponse);
        } catch (error) {
            console.error("Error creating loan:", error);
            toast.error("Không thể tạo khoản vay. Vui lòng thử lại.");
        }
    };

    // Hàm tính toán số tiền trả hàng tháng
    const calculateMonthlyPayment = (amount, annualRate, termMonths) => {
        const monthlyRate = annualRate / 100 / 12;
        const payment =
            (amount * monthlyRate) /
            (1 - Math.pow(1 + monthlyRate, -termMonths));
        return Math.round(payment);
    };

    function handleNext() {
        // Gọi hàm tiếp theo trong quy trình
        // createNewLoan(loanData);
        handleCreateLoan(loanData);
    }

    return (
        <>
            <div className="max-w-2xl mx-auto p-4">
                {/* Thông tin khoản vay đã được duyệt */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Thời hạn</span>
                            <span className="text-gray-900 font-medium">
                                {loanData.selectedLoanInterestRate.termMonths}{" "}
                                tháng
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Ngày vay</span>
                            <span className="text-gray-900 font-medium">
                                {new Date().toLocaleDateString("vi-VN")}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Ngày hết hạn</span>
                            <span className="text-gray-900 font-medium">
                                {formattedDueDate}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Chi tiết khoản vay */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Lãi suất năm</span>
                            <span className="text-gray-900 font-medium">
                                {(annualInterestRate * 100).toFixed(1)} %
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Phí thu hộ</span>
                            <span className="text-gray-900 font-medium">
                                0 VND
                            </span>
                        </div>
                        <div className="border-b border-gray-200 my-2"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">
                                Số tiền thực nhận
                            </span>
                            <span className="text-red-600 font-medium">
                                {formatCurrency(loanData.loanAmount)} VND
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="secondary" onClick={preStep}>
                        Quay lại
                    </Button>
                    <Button onClick={() => setOtpModalOpen(true)}>
                        Tiếp tục
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
