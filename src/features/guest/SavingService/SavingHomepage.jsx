import SavingCard from "./SavingCard";

function SavingHomepage() {

    return (
        <div className="p-8">
            <div className="w-full h-[440px] bg-cover bg-center relative p-24 rounded-2xl drop-shadow-lg"
                style={{
                    backgroundImage:
                        "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Danh-sach-tiet-kiem/Danh-sach-tiet-kiem-desktop/Herobanner-Tietkiem.jpg?h=1500&iar=0&w=3942&ts=20230607081424&hash=BA757FFB667CD87DFC8239B74448F5CE')"
                }
                }>
                <p className="text-green-800 font-semibold text-4xl">
                    Tiết kiệm
                </p>
                <div className="w-1/4 mt-10">
                    <p className="text-2xl  mt-4">
                        Lợi ích khi sử dụng sản phẩm tiết kiệm của VFB: Lãi suất hấp dẫn - Kỳ hạn đa dạng - Gửi rút linh hoạt và dễ dàng
                    </p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto mt-10 mb-5 bg-gray-100 p-6 rounded-2xl">
                {/* Header */}
                <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Sản phẩm tiết kiệm</h2>

                {/* Cards container */}
                <div className="flex flex-wrap justify-center gap-8">
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