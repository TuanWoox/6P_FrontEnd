import TabComponent from "../../../../components/Tab/TabComponent";
import SmallInfoCard from "../../../../components/SmallInfoCard";
import { getLoanDetailDataByType } from "./loanDetailData.js";

function LoanDetail({ loanType }) {
    const { tabsData, infoCards, imgData } = getLoanDetailDataByType(loanType);
    const [{ title, loanAmountInfo, loanTermInfo, backgroundImageURL }] =
        imgData;
    return (
        <div>
            <div className="p-4 sm:p-6 md:p-8">
                <div
                    className="w-full h-[250px] sm:h-[350px] md:h-[440px] bg-cover bg-center relative p-6 sm:p-12 md:p-16 lg:p-24 rounded-xl sm:rounded-2xl flex flex-col justify-start"
                    style={{
                        backgroundImage: backgroundImageURL,
                    }}
                >
                    <h2 className="mb-3 text-2xl font-bold text-green-800 uppercase sm:text-3xl md:text-4xl sm:mb-4 md:mb-6">
                        {title}
                    </h2>

                    <div className="flex flex-col justify-start w-full gap-2 mt-3 sm:flex-row sm:gap-4 sm:justify-between sm:mt-4 md:mt-6">
                        <div className="mb-2 sm:mb-0">
                            <p className="text-base text-green-800 sm:text-lg">
                                Mức vay
                            </p>
                            <p className="text-sm font-bold text-black sm:text-base">
                                {loanAmountInfo}
                            </p>
                        </div>

                        <div>
                            <p className="text-base text-green-800 sm:text-lg">
                                Thời hạn vay tối đa
                            </p>
                            <p className="text-sm font-bold text-black sm:text-base">
                                {loanTermInfo}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-4 mx-4 mt-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 sm:flex-row">
                {infoCards.map((card, index) => (
                    <SmallInfoCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
            <div className="mx-4 my-6 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 md:my-8">
                <div>
                    <h1 className="text-lg font-bold text-green-800 uppercase sm:text-xl">
                        Thông tin sản phẩm
                    </h1>
                    <div className="flex flex-col justify-center gap-4 mt-4 sm:flex-row">
                        <TabComponent tabs={tabsData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoanDetail;
