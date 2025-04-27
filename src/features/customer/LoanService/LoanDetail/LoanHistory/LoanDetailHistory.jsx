import { useParams } from "react-router";
import InnerHeader from "../../../../../components/InnerHeader";

const title = "Chi tiết thanh toán";

function LoanDetailHistory() {
  const { loanId } = useParams();
  const loanDetailBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Danh sách vay", path: "/customer/loan", icon: true },
    { label: "Khoản vay", path: `/customer/loan/${loanId}`, icon: true },
    { label: "Chi tiết hóa đơn", isCurrent: true }, // Mark the last item as current
  ];
  return (
    <div className="mx-auto p-4">
      <InnerHeader title={title} breadcrumbs={loanDetailBreadcrumbs} />
      <div className="max-w-screen-lg mx-auto bg-gray-100 p-4 rounded-b-2xl shadow-md max-h-129">
        <div className="p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4 text-[#95C475]">
            Chi tiết khoản vay
          </h2>

          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600">Mã giao dịch</div>
            <div className="font-medium">45616271</div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600">Tài khoản nguồn</div>
            <div className="font-medium">03776561</div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600">Sản phẩm cho vay</div>
            <div className="font-medium">Cho vay tiêu dùng</div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600">Tài khoản vay</div>
            <div className="font-medium">CA00000501956412</div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600">Nội dung</div>
            <div className="font-medium ">Thanh toan TK Vay CA0..</div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600">Số tiền thanh toán</div>
            <div className="font-medium text-red-500">2.000.000 VND</div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>
        </div>
      </div>
    </div>
  );
}

export default LoanDetailHistory;
