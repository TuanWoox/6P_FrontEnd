import TabComponent from "../../../../components/Tab/TabComponent";
import SmallInfoCard from "../../../../components/SmallInfoCard";
import { getLoanDetailDataByType } from "./loanDetailData.js";

function LoanDetail({ loanType }) {
  const { tabsData, infoCards, imgData } = getLoanDetailDataByType(loanType);
  const [{ title, loanAmountInfo, loanTermInfo, backgroundImageURL }] = imgData;
  return (
    <div>
      <div className="p-8">
        <div
          className="w-full h-[440px] bg-cover bg-center relative p-24 rounded-2xl flex flex-col justify-start"
          style={{
            backgroundImage: backgroundImageURL,
          }}
        >
          <h2 className="text-4xl uppercase font-bold text-green-800 mb-6">
            {title}
          </h2>

          <div className="flex gap-4 justify-between w-100 mt-6">
            <div>
              <p className="text-green-800 text-lg">Mức vay</p>
              <p className="font-bold text-black">{loanAmountInfo}</p>
            </div>

            <div>
              <p className="text-green-800 text-lg">Thời hạn vay tối đa</p>
              <p className="font-bold text-black">{loanTermInfo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-32 flex flex-row gap-4 justify-between mt-4">
        {infoCards.map((card, index) => (
          <SmallInfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="mx-32 my-8 ">
        <div>
          <h1 className="uppercase text-green-800 text-xl font-bold">
            Thông tin sản phẩm
          </h1>
          <div className="mt-4 flex flex-row gap-4  justify-center">
            <TabComponent tabs={tabsData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanDetail;
