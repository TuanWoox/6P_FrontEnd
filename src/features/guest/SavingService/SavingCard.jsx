import { Link } from "react-router";

function SavingCard({
    // Type of saving service
    title = "Tiết kiệm",

    // Image
    imgSrc = "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Danh-sach-tiet-kiem/Danh-sach-tiet-kiem-desktop/Ava_TK-tu-dongi_DT.jpg?h=32&w=32&ts=20230608110243",
    imgAlt = "Saving service",

    //Link to detail page
    link = "",
}) {
    return (
        <div className="w-full m-2 overflow-hidden transition-transform duration-300 shadow-lg sm:max-w-sm rounded-xl sm:m-3 md:m-5 hover:scale-105">
            <img
                className="object-cover w-full h-auto rounded-t-xl"
                src={imgSrc}
                alt={imgAlt}
            />
            <div className="px-4 py-3 sm:px-6 sm:py-4">
                <div className="text-xl font-bold sm:text-2xl">{title}</div>
            </div>
            <div className="px-4 pb-3 sm:px-6 sm:pb-4">
                <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
                    <Link
                        to="/customer/saving/new"
                        className="w-full sm:w-40 bg-[#95C475] hover:bg-gray-100 text-white hover:text-[#95C475] border hover:border-[#95C475] py-2 px-4 sm:px-6 rounded-md text-center text-sm sm:text-base transition-colors duration-300"
                    >
                        Đăng ký
                    </Link>
                    <Link
                        to={link}
                        className="w-full sm:w-40 bg-[#95C475] hover:bg-gray-100 text-white hover:text-[#95C475] border hover:border-[#95C475] py-2 px-4 sm:px-6 rounded-md text-center text-sm sm:text-base transition-colors duration-300"
                    >
                        Tìm hiểu thêm
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SavingCard;
