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
        <div className="bg-gradient-to-r from-[#f3ffe9] to-[#eaf6fe] border-[#e7e7e7] border w-full mx-auto mt-8 mb-8 rounded-md shadow-md flex flex-col md:flex-row gap-4">
            <SavingCalculateInput
                register={register}
                savingTypes={savingTypes}
                filteredInterestRates={filteredInterestRates}
                setValue={setValue}
                isTerm={isTerm}
            />
            <SavingCalculateResult
                amount={amount}
                monthlyInterestRate={monthlyInterestRate}
                dailyInterestRate={dailyInterestRate}
                maturityPeriod={maturityPeriod}
                isTerm={isTerm}
            />
        </div>
    );
}

export default SavingCalculate;
