import CustomButton from "../../../components/CustomButton";

function LoanProductCard({ product }) {
    return (
        <div className="w-full flex items-center bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden mb-8">
            {/* Left side with image */}
            <div className="w-2/5 h-64 relative">
                <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Right side with content */}
            <div className="w-3/5 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[#95C475] mb-3">
                    {product.name}
                </h2>

                <p className="text-gray-700 mb-6">{product.description}</p>

                <CustomButton
                    name="Mở ngay"
                    width="w-48"
                    height="h-12"
                    link={`/customer/loan/new/`}
                    state={{ product }}
                    position="left" // hoặc 'left', 'center'
                />
            </div>
        </div>
    );
}

export default LoanProductCard;
