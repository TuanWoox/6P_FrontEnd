
function SavingDetail_Image({
    // Type of saving service
    title = "Tiết kiệm",

    // Text Content
    content1_title = "Loại tiền tệ",
    content1 = "",
    content2_title = "Kỳ hạn gửi tối đa",
    content2 = "",
}) {
    return (
        <div className="w-full h-[550px] bg-cover bg-center relative p-24 rounded-2xl drop-shadow-lg"
            style={{
                backgroundImage:
                    "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/DANH-SACH-_-CHI-TIET_TIET-KIEM/HBB_Tiet-kiem-tra-lai-sau_DT.jpg?h=1500&iar=0&w=3936&ts=20230813024133&hash=35AA2EEAE01E5665AB598D68DC85FB36')"
            }
            }>
            <div className="mt-16">
                <p className="text-green-800 font-semibold text-4xl">
                    {title}
                </p>
                <div className="flex">
                    <div className="w-1/4 mt-10">
                        <p className="text-2xl  mt-4">
                            {content1_title}
                        </p>
                        <p className="text-2xl  mt-4 font-bold">
                            {content1}
                        </p>
                    </div>
                    <div className="w-1/4 mt-10">
                        <p className="text-2xl  mt-4">
                            {content2_title}
                        </p>
                        <p className="text-2xl  mt-4 font-bold">
                            {content2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavingDetail_Image;