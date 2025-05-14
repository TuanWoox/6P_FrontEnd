import InnerHeader from "../../../../../components/InnerHeader";
import Loader from "../../../../../components/Loader";
import { useFetchLoanDetail } from "../../../../../hooks/useFetchLoanDetail"; // Đảm bảo đường dẫn đúng
import { useLocation } from "react-router-dom";

const title = "Chi tiết thanh toán";

function LoanDetailHistory() {
    // const { loanId, paymentId } = useParams();
    const location = useLocation();
    const { loanId, paymentId } = location.state || {};

    console.log("Loan ID in loan detail page:", loanId);
    console.log("Payment ID in loan detail page:", paymentId);

    const loanDetailBreadcrumbs = [
        { label: "Trang chủ", path: "/customer", icon: true },
        { label: "Danh sách vay", path: "/customer/loan", icon: true },
        { label: "Chi tiết hóa đơn", isCurrent: true },
    ];

    // Lấy thông tin khoản vay
    const { loanDetail, isLoading, isError, error } =
        useFetchLoanDetail(loanId);

    // Tìm payment theo paymentId
    const paymentDetail = loanDetail?.loanPayments?.find(
        (payment) => payment._id === paymentId,
    );

    const loanTypeName = loanDetail?.loanTypeInterest?.loanType?.name;

    return (
        <div className="p-4 mx-auto">
            <InnerHeader title={title} breadcrumbs={loanDetailBreadcrumbs} />
            <div className="max-w-screen-lg p-4 mx-auto bg-gray-100 shadow-md rounded-b-2xl max-h-129">
                {isLoading ? (
                    <Loader />
                ) : isError ? (
                    <p className="text-red-500">
                        {error?.message || "Đã xảy ra lỗi"}
                    </p>
                ) : !paymentDetail ? (
                    <p className="text-red-500">
                        Không tìm thấy thông tin thanh toán.
                    </p>
                ) : (
                    <div className="p-6 mb-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-[#95C475]">
                            Chi tiết khoản vay
                        </h2>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-600">Mã giao dịch</div>
                            <div className="font-medium">
                                {paymentDetail._id}
                            </div>
                        </div>

                        <div className="my-4 border-t border-gray-300"></div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-600">
                                Sản phẩm cho vay
                            </div>
                            <div className="font-medium">{loanTypeName}</div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-600">Tài khoản vay</div>
                            <div className="font-medium">
                                {loanDetail.accountNumber}
                            </div>
                        </div>

                        <div className="my-4 border-t border-gray-300"></div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-600">
                                Số tiền thanh toán
                            </div>
                            <div className="font-medium text-red-500">
                                {paymentDetail.amount?.toLocaleString("vi-VN")}{" "}
                                VND
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-600">Ngày thanh toán</div>
                            <div className="font-medium">
                                {new Date(
                                    paymentDetail.paymentDate,
                                ).toLocaleDateString("vi-VN")}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-600">Trạng thái</div>
                            <div className="font-medium">
                                {paymentDetail.status}
                            </div>
                        </div>

                        <div className="my-4 border-t border-gray-300"></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoanDetailHistory;
