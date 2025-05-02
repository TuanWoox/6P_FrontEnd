import CustomButton from "../../../../../components/CustomButton";
import {
    formatCurrency,
    getTodayFormatted,
} from "../../../../../utils/helpers";
import Button from "../Button";

function ResultLoanStep({ goToHome, loanData }) {
    console.log("loanData", loanData);
    const loanType = loanData.loanTypeInterest.loanType.name;

    // Chuyển dateOpened từ string sang Date object
    const openedDate = new Date(loanData.dateOpened);

    // Tạo bản sao để không thay đổi ngày gốc
    const dueDate = new Date(openedDate.getTime());

    // Cộng thêm số tháng từ loanTerm
    dueDate.setMonth(
        dueDate.getMonth() + parseInt(loanData.loanTypeInterest.termMonths), // hoặc loanTerm nếu đúng tên trường
    );

    // Định dạng ngày theo "vi-VN"
    const formattedDueDate = dueDate.toLocaleDateString("vi-VN");
    console.log("formattedDueDate", formattedDueDate);

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
                    {new Date().toLocaleDateString("vi-VN")}
                </div>
            </div>

            {/* Phần 5: Chi tiết giao dịch */}
            <div className="bg-gray-100 rounded-lg p-6">
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Sản phẩm vay</span>
                        <span className="text-gray-800 font-medium">
                            {loanType}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Tài khoản vay</span>
                        <span className="text-gray-800 font-medium">
                            {loanData.accountNumber}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Ngày vay</span>
                        <span className="text-gray-600">Ngày hết hạn</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-800 font-medium">
                            {getTodayFormatted(loanType.dateOpened)}
                        </span>
                        <span className="text-gray-800 font-medium">
                            {formattedDueDate}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Lãi suất</span>
                        <span className="text-gray-800 font-medium">
                            {loanData.loanTypeInterest.annualInterestRate}% /
                            năm
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Tổng thanh toán</span>
                        <span className="text-red-600 font-medium">
                            {formatCurrency(loanData.balance)} VND
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
