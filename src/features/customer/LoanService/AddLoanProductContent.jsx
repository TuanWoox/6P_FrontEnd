import { useFetchAllLoanTypes } from "../../../hooks/useFetchAllLoanTypes";
import LoanProductCard from "./LoanProductCard";

const benefits =
    "Lợi ích khi sử dụng sản phẩm cho vay của VFB: Giải ngân nhah chóng - Lãi suất cạnh tranh - Phương thức trả nợ thuận tiện";
function AddLoanProductContent() {
    const { loanTypes: products, isLoading, error } = useFetchAllLoanTypes();

    console.log("products", products);
    if (isLoading) return <div>Đang tải dữ liệu loại vay...</div>;
    if (error) return <div>Lỗi: {error.message}</div>;

    return (
        // Ensure this outer div doesn't have conflicting height/overflow
        <div className="p-6">
            {" "}
            {/* Added matching background, padding, shadow, rounded corners */}
            {/* Benefits Section */}
            <div className="rounded-lg mb-6 text-gray-700 font-medium">
                {benefits}
            </div>
            {/* Product Cards */}
            {products &&
                Array.isArray(products) &&
                products.map(
                    (
                        product,
                        index, // Added check for products prop
                    ) => (
                        <LoanProductCard
                            key={index}
                            product={product} // Added product prop
                        />
                    ),
                )}
            {(!products ||
                !Array.isArray(products) ||
                products.length === 0) && (
                <div className="text-center text-gray-500">
                    Không có sản phẩm nào.
                </div>
            )}
        </div>
    );
}

export default AddLoanProductContent;
