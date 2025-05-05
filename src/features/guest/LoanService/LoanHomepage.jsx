import LoanCard from "./LoanCard";
import loanCardData from "./loanCardData";

function LoanHomepage() {
    return (
        <div>
            <div className="p-4 sm:p-6 md:p-8">
                <div
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[440px] bg-cover bg-center relative p-6 sm:p-12 md:p-16 lg:p-24 rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{
                        backgroundImage:
                            "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Vay/Danh-sach-vay/Vietcombank-vay-tiu-dng.jpg?h=732&iar=0&w=1920&ts=20230329032521&hash=C746121161DD373CB820AA44187F1C5D')",
                    }}
                >
                    <p className="text-2xl font-semibold text-green-600 uppercase sm:text-3xl md:text-4xl">
                        Vay Tiêu dùng
                    </p>
                    <p className="mt-2 text-base md:mt-4 sm:text-lg md:text-xl">
                        Lãi suất cạnh tranh, thời hạn linh hoạt
                    </p>
                    <ul className="mt-2 text-base md:mt-4 sm:text-lg md:text-xl">
                        <li className="py-1 md:py-2 w-fit">Vay tiêu dùng</li>
                        <li className="py-1 md:py-2 w-fit">Vay mua nhà</li>
                        <li className="py-1 md:py-2 w-fit">
                            Vay mua kinh doanh
                        </li>
                        <li className="py-1 md:py-2 w-fit">Vay sinh viên</li>
                    </ul>
                </div>
            </div>
            <div className="mx-4 my-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 sm:my-6 md:my-8">
                <div>
                    <h3 className="text-2xl font-bold sm:text-3xl">
                        Các sản phẩm cho vay
                    </h3>
                    <p className="my-2 text-sm sm:my-4 text-stone-500 sm:text-base">
                        Chúng tôi cam kết mang đến trải nghiệm vay vốn an toàn,
                        minh bạch và thuận tiện. Thời gian xử lý hồ sơ nhanh,
                        điều kiện vay đơn giản và hỗ trợ tận tình là những ưu
                        điểm nổi bật của các sản phẩm cho vay tại đây, giúp bạn
                        an tâm giải quyết mọi nhu cầu tài chính cấp thiết. Các
                        sản phẩm cho vay của chúng tôi giúp bạn dễ dàng thực
                        hiện những dự định lớn như mua nhà, mua xe, sửa chữa nhà
                        cửa hoặc đáp ứng các nhu cầu chi tiêu cá nhân. Hãy lựa
                        chọn gói vay phù hợp để chủ động tài chính, tận hưởng
                        cuộc sống trọn vẹn hơn mỗi ngày
                    </p>
                </div>
                <LoanCard loanData={loanCardData[0]} />
                <LoanCard loanData={loanCardData[1]} />
                <LoanCard loanData={loanCardData[2]} />
            </div>
        </div>
    );
}

export default LoanHomepage;
