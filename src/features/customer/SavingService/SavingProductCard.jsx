import { Link } from "react-router";

function SavingsProductCard({ imageSrc, title, description, link }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-8 transition-transform hover:scale-[1.01]">
            <img
                src={imageSrc}
                alt={title}
                className="w-full md:w-1/3 h-52 md:h-auto object-cover"
            />
            <div className="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                    <h3 className="text-2xl font-bold text-[#4B9560] mb-3">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {description}
                    </p>
                </div>
                <div className="flex gap-4 flex-wrap">
                    <Link
                        to={link}
                        className="bg-[#4B9560] text-white font-medium py-2 px-5 rounded-lg hover:bg-white hover:text-[#4B9560] border border-[#4B9560] transition-all duration-200"
                    >
                        Chi tiết
                    </Link>
                    <Link
                        to="/customer/saving/new"
                        className="bg-[#95C475] text-white font-medium py-2 px-5 rounded-lg hover:bg-white hover:text-[#95C475] border border-[#95C475] transition-all duration-200"
                    >
                        Mở ngay
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SavingsProductCard;
