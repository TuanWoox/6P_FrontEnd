import SavingDetail_Image from "./SavingDetail_Image";
import SavingDetail_Advantage from "./SavingDetail_Advantage";
import SavingDetail_ProductInfo from "./SavingDetail_ProductInfo";
import listProductInfo from "./listProductInfo";
import { useState } from "react";

function SavingDetail() {

    const [productInfo, setProductInfo] = useState("Thông tin chung");

    return (
        <div className="py-8 px-24">
            <SavingDetail_Image title="Tiết kiệm có kỳ hạn" typeOfMoney="Đa dạng" maxTerm="24 tháng" />
            <div className="flex my-10 justify-between">
                <SavingDetail_Advantage title="Loại tiền gửi đa dạng" content="Gửi tiền bằng nhiều loại ngoại tệ khác nhau: USD, EUR, GBP, AUD, v.v." imgSrc="https://s3-alpha-sig.figma.com/img/c340/42bc/50a7eea6fcaca63b9b937ff3fc2d8cf7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L7nTZlb5Zyt9HXGbSrDW3wuhHiQRVamL11dKK9-2C5NSwAC9MWwaRtzAvBxsyww~c~MUxG76~4c7HIPkaMPip8dGMUSCp5j4mrbdQOgN8GTUYX79dFxLY07ycZzVTQDbt0u8y7ivggsi5msZsQVhc5Q4MVLNO6~B3zpKe0UXuBu1K9-T6x9YsLFg8tuCN9qM1zGkQ4adqqXCHSaqotTJKZNKR3Jo15jb3Z6VHkxLkcOcJ8m3P2eIAE7VpztewEmQpmLKxGvLnQlvW9I912obwGzfwdHy0wM~8blr7WAxOJpjsD61ibyALFxx3hbYVRpjSzrF6g4XtRc5KzdNMg5GJQ__" />
                <SavingDetail_Advantage title="Kỳ hạn linh hoạt" content="Từ tối thiểu 1 tháng đến tối đa 24 tháng" imgSrc="https://s3-alpha-sig.figma.com/img/d88c/dc47/f808ff6a9bdb700fbb23ea1e7ee6eedc?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FYdx-Zf576P2gqfFIfuIS0cihSbc04jLl8Iijn~Z9a9xd9Lj0006mgg3K89N7Cik-HGA4CmApeRpxdIv4yorg55P1Ikujz8HN~Pynv0XN~T153vs5BRX0NecvFRcdJMG1EpLIz5eIUIe~apzXIe6W-SxrSXqPSlmWg5WcPb54RfS7IxRsUK1gM1-CFQBRYWT5~0cb64d~MnX9Fm7R7kMy0AUxl9HFruaxq5W-lOM7nu77-6UoFd5XCz~qbV2BbKvle7oSZT25TzDfWKAL7ydaabCd-CRlwLdkjruBuZbR-IY-TdFGpfJD9avkUvkcHhOY6VK99pFjoJuDNZWapa0WA__" />
                <SavingDetail_Advantage title="Thủ tục nhanh chóng" content="Gửi và rút dễ dàng tại tất cả điểm giao dịch của 6PBank trên toàn quốc" imgSrc="https://s3-alpha-sig.figma.com/img/0349/2017/d7385cd41888378bb443ea48107757d8?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KnjsH79FOAAVNLqqcEDLRmNZWvBQQTrKoCl7cinI8FRIce2s~VTUj~vDE6JUfifnVzzPISl-SIPVtk0j-X72dBLITqSF4AW1n260Btc7hGYihC6UgzLgUg2EDzttVaXHdfyk8g1frPIq9cDJJdSlGOSHIfdibfamGU~~23P1yrJPpqaif0TEF4dsulvWe9TCGhJD~pyNpxDgTFMyPJvsePMmmH~0QkiNfEVtu1pa6CR3jsIsjsb5OxS0pCe8bRAs9XDxRmC8MAVTzWPrq8uIeevS9TMrxJDaMl9YrQg8TNotOyRfKtYmANW-GWp74q2rbjMryYsR6WqmMOY7Qn7AKw__" />
            </div>
            {/* Product Information Section */}
            <div className="mb-10">
                {/* Header already in your code */}
                <h1 className="text-3xl font-semibold mb-6">THÔNG TIN SẢN PHẨM</h1>

                {/* Tabs */}
                <div className="flex mb-4">
                    {/* Tab 1: Thông tin chung */}
                    <div
                        onClick={() => setProductInfo("Thông tin chung")}
                        className={`pb-2 mr-6 cursor-pointer border-b-2 font-semibold text-2xl duration-600 ${productInfo === "Thông tin chung"
                                ? "border-green-500 text-green-500"
                                : "border-transparent text-gray-500 hover:border-green-500 hover:text-green-500"
                            }`}
                    >
                        <span>Thông tin chung</span>
                    </div>

                    {/* Tab 2: Điều kiện tham gia */}
                    <div
                        onClick={() => setProductInfo("Điều kiện tham gia")}
                        className={`pb-2 cursor-pointer border-b-2 font-semibold text-2xl duration-600 ${productInfo === "Điều kiện tham gia"
                                ? "border-green-500 text-green-500"
                                : "border-transparent text-gray-500 hover:border-green-500 hover:text-green-500"
                            }`}
                    >
                        <span>Điều kiện tham gia</span>
                    </div>
                </div>

                {/* Content Table */}
                <div className="flex flex-col space-y-2">
                    {productInfo === "Thông tin chung" ? (
                        listProductInfo.map((item, index) => (
                            <SavingDetail_ProductInfo
                                key={index}
                                title={item.title}
                                content={item.content}
                            />
                        ))
                    ) : (
                        <SavingDetail_ProductInfo
                            title="TIỀN GỬI CÓ KỲ HẠN"
                            content="Khách hàng từ 18 tuổi trở lên, có tài khoản thanh toán tại 6PBank"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default SavingDetail;