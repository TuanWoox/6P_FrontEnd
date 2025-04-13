import SavingDetail_Image from "./SavingDetail_Image";
import SavingDetail_Advantage from "./SavingDetail_Advantage";
import SavingDetail_ProductInfo from "./SavingDetail_ProductInfo";
import { useState } from "react";
import { getSavingDetailDataByType } from "./SavingDetailData.js";

function SavingDetail({savingType}) {

    const { imgData, infoCard, listProductInfo, listDemandInfo } = getSavingDetailDataByType(savingType);
    const [{ title, content1_title, content1, content2_title, content2 }] = imgData;
    const [productInfo, setProductInfo] = useState("Thông tin chung");

    return (
        <div className="py-8 px-24">
            <SavingDetail_Image title={title} content1_title={content1_title} content1={content1} content2_title={content2_title} content2={content2} />
            <div className="flex my-10 justify-between">
                {infoCard.map((item, index) => (
                    <SavingDetail_Advantage
                        key={index}
                        title={item.title}
                        content={item.content}
                        imgSrc={item.imgSrc}
                    />
                ))}
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
                        listDemandInfo.map((item, index) => (
                            <SavingDetail_ProductInfo
                                key={index}
                                title={item.title}
                                content={item.content}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default SavingDetail;