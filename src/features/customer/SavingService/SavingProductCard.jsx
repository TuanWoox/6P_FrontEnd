
function SavingsProductCard({ imageSrc, title, description }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row mb-6">
            <img src={imageSrc} alt={title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
            <div className="p-4 flex flex-col justify-center md:w-2/3">
                <h3 className="text-xl font-semibold text-[#95C475] mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <button className="self-start bg-[#95C475] text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-[#95C475] transition-colors duration-200 border border-[#95C475]">
                    MỞ NGAY
                </button>
            </div>
        </div>
    );
};

export default SavingsProductCard;