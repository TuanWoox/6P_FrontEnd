import { useFetchAllSavingnterestRates } from "../../../../hooks/useFetchAllSavingnterestRates";
import { useFetchAllSavingTypes } from "../../../../hooks/useFetchAllSavingTypes";
import SavingCalculate from "../SavingCalculate/SavingCalculate";
import Spinner from "../../../../components/Spinner";
import Error from "../../../../components/Error";
function SavingInterest() {
    const { savingTypes, isSavingTypesLoading, savingTypesError } =
        useFetchAllSavingTypes();
    const { interestRates, isInterestRatesLoading, interestRatesError } =
        useFetchAllSavingnterestRates();

    if (isSavingTypesLoading || isInterestRatesLoading) {
        return <Spinner />;
    }

    if (savingTypesError || interestRatesError) {
        return <Error />;
    }

    return (
        <div className="py-8 px-24">
            {/* Banner */}
            <div
                className="mt-8 h-[30px] bg-cover bg-center rounded-lg mx-auto relative p-24 flex items-center justify-start"
                style={{
                    backgroundImage:
                        "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHTC/Giai-Phap/Banner-ty-gia---lai-suat/banner-lai-suat-update-1406.jpg?h=500&iar=0&w=2624&ts=20230615080859&hash=4C7B77D96BD6F4D43EA817F892B4EE5F')",
                }}
            >
                <div>
                    <p className="uppercase text-green-800 font-semibold text-4xl bg-opacity-70 p-2 rounded">
                        Lãi suất tiền gửi
                    </p>
                </div>
            </div>

            {/* Interest Rates Table */}
            <div className="my-8 mb-36">
                <h1 className="uppercase text-green-800 text-xl font-bold mb-6">
                    Thông tin sản phẩm
                </h1>

                {savingTypes.map((type) => {
                    const filteredRates = interestRates.filter(
                        (rate) => rate.savingType._id === type._id,
                    );

                    if (filteredRates.length === 0) return null;

                    return (
                        <div key={type._id} className="mb-8">
                            <h2 className="text-lg font-semibold mb-2 text-green-700">
                                {type.name}
                            </h2>
                            <div className="max-h-[450px] overflow-auto">
                                <table className="w-full table-auto border-collapse border border-gray-300 text-xl">
                                    <thead className="bg-[#96C576] bg-opacity-80 text-gray-800 font-semibold sticky top-0">
                                        <tr>
                                            <th className="border border-gray-300 p-4 text-center w-1/2">
                                                Kỳ hạn
                                            </th>
                                            <th className="border border-gray-300 p-4 text-center w-1/2">
                                                %/
                                                {type.name ===
                                                "Tiết kiệm không kỳ hạn"
                                                    ? "Ngày"
                                                    : "Tháng"}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredRates.map((rate, index) => (
                                            <tr
                                                key={rate._id}
                                                className={
                                                    index % 2 === 0
                                                        ? "bg-white h-12"
                                                        : "bg-gray-50 h-12"
                                                }
                                            >
                                                <td className="border border-gray-300 p-4 text-center">
                                                    {rate.maturityPeriod
                                                        ? `${rate.maturityPeriod} Tháng`
                                                        : `1 Ngày`}
                                                </td>
                                                <td className="border border-gray-300 p-4 text-center">
                                                    {rate.monthlyInterestRate >
                                                    0
                                                        ? `${rate.monthlyInterestRate}%`
                                                        : `${rate.dailyInterestRate}%`}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Saving Calculator */}
            <div className="my-8 mb-36">
                <h1 className="uppercase text-green-800 text-xl font-bold mb-6">
                    Tính tiền Tiết kiệm
                </h1>
                <SavingCalculate
                    interestRates={interestRates}
                    savingTypes={savingTypes}
                />
            </div>
        </div>
    );
}

export default SavingInterest;
