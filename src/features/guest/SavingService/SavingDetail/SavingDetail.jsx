import SavingDetail_Image from "./SavingDetail_Image";
import SavingDetail_Advantage from "./SavingDetail_Advantage";
import SavingDetail_ProductInfo from "./SavingDetail_ProductInfo";
import { useState } from "react";
import { getSavingDetailDataByType } from "./savingDetailData.js";

function SavingDetail({ savingType }) {
    const { imgData, infoCard, listProductInfo, listDemandInfo } =
        getSavingDetailDataByType(savingType);
    const [{ title, content1_title, content1, content2_title, content2 }] =
        imgData;
    const [productInfo, setProductInfo] = useState("Thông tin chung");

    return (
        <div className="px-4 py-4 sm:py-6 md:py-8 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <SavingDetail_Image
                title={title}
                content1_title={content1_title}
                content1={content1}
                content2_title={content2_title}
                content2={content2}
            />
            <div className="flex flex-col justify-between gap-4 my-6 sm:flex-row md:my-8 lg:my-10 sm:gap-6">
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
            <div className="mb-6 md:mb-8 lg:mb-10">
                {/* Header already in your code */}
                <h1 className="mb-4 text-xl font-semibold sm:text-2xl md:text-3xl md:mb-6">
                    THÔNG TIN SẢN PHẨM
                </h1>

                {/* Tabs */}
                <div className="flex mb-4 overflow-x-auto">
                    {/* Tab 1: Thông tin chung */}
                    <div
                        onClick={() => setProductInfo("Thông tin chung")}
                        className={`pb-2 mr-4 sm:mr-6 cursor-pointer border-b-2 font-semibold text-lg sm:text-xl md:text-2xl duration-600 whitespace-nowrap ${
                            productInfo === "Thông tin chung"
                                ? "border-[#95C475] text-[#95C475]"
                                : "border-transparent text-gray-500 hover:border-[#95C475] hover:text-[#95C475]"
                        }`}
                    >
                        <span>Thông tin chung</span>
                    </div>

                    {/* Tab 2: Điều kiện tham gia */}
                    <div
                        onClick={() => setProductInfo("Điều kiện tham gia")}
                        className={`pb-2 cursor-pointer border-b-2 font-semibold text-lg sm:text-xl md:text-2xl duration-600 whitespace-nowrap ${
                            productInfo === "Điều kiện tham gia"
                                ? "border-[#95C475] text-[#95C475]"
                                : "border-transparent text-gray-500 hover:border-[#95C475] hover:text-[#95C475]"
                        }`}
                    >
                        <span>Điều kiện tham gia</span>
                    </div>
                </div>

                {/* Content Table */}
                <div className="flex flex-col space-y-2">
                    {productInfo === "Thông tin chung"
                        ? listProductInfo.map((item, index) => (
                              <SavingDetail_ProductInfo
                                  key={index}
                                  title={item.title}
                                  content={item.content}
                              />
                          ))
                        : listDemandInfo.map((item, index) => (
                              <SavingDetail_ProductInfo
                                  key={index}
                                  title={item.title}
                                  content={item.content}
                              />
                          ))}
                </div>
            </div>
        </div>
    );
}

export default SavingDetail;
