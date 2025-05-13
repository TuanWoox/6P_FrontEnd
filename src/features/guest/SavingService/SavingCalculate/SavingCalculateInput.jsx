// SavingCalculateInput.jsx
function SavingCalculateInput({
    register,
    savingTypes,
    filteredInterestRates,
    setValue,
    isTerm,
}) {
    return (
        <div className="flex-1 p-4 space-y-3 sm:p-6 md:p-8 lg:p-12 sm:space-y-4">
            <div>
                <label className="block mb-1 text-sm sm:mb-2">
                    Loại tiết kiệm
                </label>
                <select
                    {...register("savingTypeId")}
                    className="w-full p-2 text-sm border rounded-md sm:p-3 md:p-4 sm:text-base"
                    onChange={(e) => {
                        setValue("savingTypeId", e.target.value);
                        setValue("interestRateId", ""); // reset interest rate selection
                    }}
                >
                    <option value="">Chọn loại tiết kiệm</option>
                    {savingTypes.map((type) => (
                        <option key={type._id} value={type._id}>
                            {type.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block mb-1 text-sm sm:mb-2">
                    Chọn kỳ hạn & lãi suất
                </label>
                <select
                    {...register("interestRateId")}
                    className="w-full p-2 text-sm border rounded-md sm:p-3 md:p-4 sm:text-base"
                    disabled={!filteredInterestRates.length}
                >
                    <option value="">Chọn kỳ hạn & lãi suất</option>
                    {filteredInterestRates.map((rate) => (
                        <option key={rate._id} value={rate._id}>
                            {rate.maturityPeriod} tháng -{" "}
                            {isTerm
                                ? `${rate.monthlyInterestRate}%/tháng`
                                : `${rate.dailyInterestRate}%/ngày`}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block mb-1 text-sm sm:mb-2">
                    Số tiền gửi
                </label>
                <input
                    {...register("amount", { valueAsNumber: true })}
                    type="number"
                    placeholder="Nhập số tiền"
                    className="w-full p-2 text-sm border rounded-md sm:p-3 md:p-4 sm:text-base"
                />
            </div>
        </div>
    );
}

export default SavingCalculateInput;
