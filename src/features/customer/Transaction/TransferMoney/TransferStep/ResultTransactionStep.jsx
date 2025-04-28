import Button from "../FormElements/Button";
import TransactionDetail from "../FormElements/TransactionDetail";

export default function ResultTransactionStep({
    transactionDetails,
    goToHome,
}) {
    return (
        <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4 text-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mx-auto my-2"></div>
                <h2 className="text-xl font-medium">Giao dịch thành công!</h2>
                <div className="text-red-600 font-bold text-2xl my-2">
                    {transactionDetails.amount.toLocaleString()} VND
                </div>
                <div className="text-gray-500 text-sm">
                    21:11 Thứ năm 16/10/2024
                </div>
            </div>

            <div className="space-y-4 mb-8">
                <TransactionDetail
                    label="Tài khoản nguồn"
                    value={transactionDetails.sourceAccount}
                />

                <TransactionDetail
                    label="Tài khoản nhận"
                    value={transactionDetails.targetAccount}
                />

                <TransactionDetail
                    label="Tên người nhận"
                    value={transactionDetails.receiverName}
                    highlight
                />

                <TransactionDetail
                    label="Nội dung"
                    value={`${transactionDetails.description}`}
                />

                <TransactionDetail
                    label="Mã giao dịch"
                    value={transactionDetails.transactionId}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button onClick={goToHome} variant="secondary">
                    Về trang chủ
                </Button>
                <Button>Tiếp tục</Button>
            </div>
        </div>
    );
}
