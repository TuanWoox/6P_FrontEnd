// SavingCalculate.jsx
import { useForm } from "react-hook-form";
import SavingCalculateInput from "./SavingCalculateInput";
import SavingCalculateResult from "./SavingCalculateResult";

function SavingCalculate({ savingTypes, interestRates }) {
    const { register, watch, setValue } = useForm({
        defaultValues: {
            savingTypeId: "",
            interestRateId: "",
            amount: 0,
        },
    });

    const savingTypeId = watch("savingTypeId");
    const amount = watch("amount");
    const interestRateId = watch("interestRateId");

    const selectedType = savingTypes.find((type) => type._id === savingTypeId);
    const isTerm = selectedType?.name === "Tiết kiệm có kỳ hạn";

    // Fixed: Use correct field for filtering - savingType.id should match savingTypeId
    const filteredInterestRates = interestRates.filter(
        (r) => r.savingType._id === savingTypeId,
    );

    const selectedRate = interestRates.find((r) => r._id === interestRateId);

    const monthlyInterestRate = selectedRate?.monthlyInterestRate || 0;
    const dailyInterestRate = selectedRate?.dailyInterestRate || 0;
    const maturityPeriod = selectedRate?.maturityPeriod || 0;

    return (
        <div className="bg-gradient-to-r from-[#f3ffe9] to-[#eaf6fe] border-[#e7e7e7] border w-full mx-auto mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6 lg:mb-8 rounded-md shadow-md p-3 sm:p-4 md:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                <div className="w-full lg:w-1/2">
                    <SavingCalculateInput
                        register={register}
                        savingTypes={savingTypes}
                        filteredInterestRates={filteredInterestRates}
                        setValue={setValue}
                        isTerm={isTerm}
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <SavingCalculateResult
                        amount={amount}
                        monthlyInterestRate={monthlyInterestRate}
                        dailyInterestRate={dailyInterestRate}
                        maturityPeriod={maturityPeriod}
                        isTerm={isTerm}
                    />
                </div>
            </div>
        </div>
    );
}

export default SavingCalculate;
