
function SavingDetail_Image({
    // Type of saving service
    title = "Tiết kiệm",

    // Text Content
    typeOfMoney = "VND",
    maxTerm = "24 tháng",
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
                            Loại tiền tệ
                        </p>
                        <p className="text-2xl  mt-4 font-bold">
                            {typeOfMoney}
                        </p>
                    </div>
                    <div className="w-1/4 mt-10">
                        <p className="text-2xl  mt-4">
                            Kỳ hạn gửi tối đa
                        </p>
                        <p className="text-2xl  mt-4 font-bold">
                            {maxTerm}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavingDetail_Image;