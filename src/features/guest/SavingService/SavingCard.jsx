import { Link } from "react-router";

function SavingCard({
    // Type of saving service
    title = "Tiết kiệm",

    // Image
    imgSrc = "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Danh-sach-tiet-kiem/Danh-sach-tiet-kiem-desktop/Ava_TK-tu-dongi_DT.jpg?h=32&w=32&ts=20230608110243",
    imgAlt = "Saving service",

    //Link to detail page
    link="",
}) {

    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-5">
            <img className="w-full rounded-t-xl" src={imgSrc} alt={imgAlt} />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl">{title}</div>
            </div>
            <div className="px-6 pb-4">
                <div className="flex justify-between items-center">
                    <button className="w-40 bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md">
                        Đăng ký
                    </button>
                    <Link to={link} className="w-40 border border-green-400 text-green-500 py-2 px-6 rounded-md hover:bg-green-50">
                    Tìm hiểu thêm
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default SavingCard;