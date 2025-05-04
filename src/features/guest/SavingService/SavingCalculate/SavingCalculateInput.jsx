// SavingCalculateInput.jsx
function SavingCalculateInput({
    register,
    savingTypes,
    filteredInterestRates,
    setValue,
    isTerm,
}) {
    return (
        <div className="flex-1 p-12 space-y-4">
            <div>
                <label className="block mb-2 text-sm">Loại tiết kiệm</label>
                <select
                    {...register("savingTypeId")}
                    className="w-full border rounded-md p-4"
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
                <label className="block mb-2 text-sm">
                    Chọn kỳ hạn & lãi suất
                </label>
                <select
                    {...register("interestRateId")}
                    className="w-full border rounded-md p-4"
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
                <label className="block mb-2 text-sm">Số tiền gửi</label>
                <input
                    {...register("amount", { valueAsNumber: true })}
                    type="number"
                    placeholder="Nhập số tiền"
                    className="w-full border rounded-md p-4"
                />
            </div>
        </div>
    );
}

export default SavingCalculateInput;
