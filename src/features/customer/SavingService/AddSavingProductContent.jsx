import SavingsProductCard from "./SavingProductCard";

function AddSavingProductContent({ products }) {
    const benefits =
        "Lợi ích khi sử dụng sản phẩm tiết kiệm của 6P Bank: Lãi suất hấp dẫn - Kỳ hạn đa dạng - Gửi rút linh hoạt và dễ dàng";

    return (
        // Ensure this outer div doesn't have conflicting height/overflow
        <div className="bg-gray-100 p-4 rounded-b-2xl shadow-md">
            {" "}
            {/* Added matching background, padding, shadow, rounded corners */}
            {/* Benefits Section */}
            <div className="bg-green-100 p-4 rounded-lg mb-4 text-gray-700 font-medium">
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
                        <SavingsProductCard
                            key={index}
                            imageSrc={product.imageSrc}
                            title={product.title}
                            description={product.description}
                            link={product.link}
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

export default AddSavingProductContent;
