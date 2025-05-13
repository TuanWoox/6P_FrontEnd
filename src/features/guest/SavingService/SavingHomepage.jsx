import SavingCard from "./SavingCard";

function SavingHomepage() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[440px] bg-cover bg-center relative p-4 sm:p-8 md:p-12 lg:p-24 rounded-2xl drop-shadow-lg"
                style={{
                    backgroundImage:
                        "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Danh-sach-tiet-kiem/Danh-sach-tiet-kiem-desktop/Herobanner-Tietkiem.jpg?h=1500&iar=0&w=3942&ts=20230607081424&hash=BA757FFB667CD87DFC8239B74448F5CE')",
                }}
            >
                <p className="text-[#95C475] font-semibold text-2xl sm:text-3xl md:text-4xl">
                    Tiết kiệm
                </p>
                <div className="w-full mt-4 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 sm:mt-6 md:mt-8 lg:mt-10">
                    <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl md:mt-4">
                        Lợi ích khi sử dụng sản phẩm tiết kiệm của 6PBank: Lãi
                        suất hấp dẫn - Kỳ hạn đa dạng - Gửi rút linh hoạt và dễ
                        dàng
                    </p>
                </div>
            </div>
            <div className="max-w-5xl p-4 mx-auto mt-6 mb-5 bg-gray-100 sm:mt-8 md:mt-10 sm:p-6 rounded-2xl">
                {/* Header */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#95C475] mb-4 sm:mb-6 md:mb-8 text-center">
                    Sản phẩm tiết kiệm
                </h2>

                {/* Cards container */}
                <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row sm:gap-6 md:gap-8">
                    <SavingCard
                        title="Tiết kiệm có kỳ hạn"
                        imgSrc="https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Danh-sach-tiet-kiem/Danh-sach-tiet-kiem-desktop/tietkiem.jpg?h=32&w=32&ts=20230606095910"
                        link="/saving/term-deposit"
                    />
                    <SavingCard
                        title="Tiết kiệm không kỳ hạn"
                        imgSrc="https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Danh-sach-tiet-kiem/Danh-sach-tiet-kiem-desktop/banner25.jpg?h=32&w=32&ts=20230606095844"
                        link="/saving/demand-deposit"
                    />
                </div>
            </div>
        </div>
    );
}

export default SavingHomepage;
