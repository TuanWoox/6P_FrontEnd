import { useForm } from "react-hook-form";
import useCheckingAccounts from "../../../../../hooks/useGetCheckingAccount";
import { useFetchAllSavingTypes } from "../../../../../hooks/useFetchAllSavingTypes";
import { useFetchAllSavingnterestRates } from "../../../../../hooks/useFetchAllSavingnterestRates";
import { useFetchDepositSavingTypes } from "../../../../../hooks/useFetchDepositSavingTypes";

function CreateSavingStep() {
    // Custom hooks for fetching data
    const {
        accounts = [],
        loading: accountsLoading,
        error: accountsError,
    } = useCheckingAccounts();

    const {
        savingTypes = [],
        isSavingTypesLoading,
        savingTypesError,
    } = useFetchAllSavingTypes();

    const {
        interestRate = [],
        isInterestRateLoading,
        interestRateError,
    } = useFetchAllSavingnterestRates();

    const {
        savingDeposits = [],
        isDepositLoading,
        depositError,
    } = useFetchDepositSavingTypes();

    // Form setup
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            accountNumber: "",
            savingTypeId: "",
            term: "",
            amount: "",
        },
    });

    // Watched values
    const selectedAccount = watch("accountNumber");
    const selectedSavingTypeId = watch("savingTypeId");

    // Derived data
    const selectedAccountInfo = accounts.find(
        (acc) => acc.accountNumber === selectedAccount,
    );

    const filteredInterestRates = interestRate?.filter(
        (rate) => rate.savingType._id === selectedSavingTypeId,
    );

    const depositType = selectedSavingTypeId
        ? savingDeposits?.find(
              (deposit) => deposit.savingType === selectedSavingTypeId,
          )
        : null;

    // Form submission handler
    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        // Add your form submission logic here
    };

    // Common styles
    const inputStyle =
        "w-full px-3 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-500";
    const sectionStyle =
        "w-full bg-[#F1F2F2] shadow-md rounded-xl px-6 py-5 space-y-3";
    const labelStyle = "text-gray-600 text-sm mb-2 block";
    const errorStyle = "text-red-500 text-sm mt-1";

    // Loading states
    const isLoading =
        accountsLoading ||
        isSavingTypesLoading ||
        isInterestRateLoading ||
        isDepositLoading;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-4xl mx-auto flex flex-col gap-6 p-4">
                {/* Source Account Section */}
                <div className={sectionStyle}>
                    <h3 className={labelStyle}>Tài khoản nguồn</h3>

                    <select
                        {...register("accountNumber", {
                            required: "Vui lòng chọn tài khoản",
                        })}
                        className={inputStyle}
                        defaultValue=""
                        disabled={accountsLoading}
                    >
                        <option value="" disabled>
                            Chọn tài khoản nhận
                        </option>
                        {accounts.map((account) => (
                            <option
                                key={account.accountNumber}
                                value={account.accountNumber}
                            >
                                {account.accountNumber}
                            </option>
                        ))}
                    </select>
                    {errors.accountNumber && (
                        <p className={errorStyle}>
                            {errors.accountNumber.message}
                        </p>
                    )}

                    <div className="text-right text-sm">
                        <span className="text-gray-500">Số dư khả dụng: </span>
                        <span className="text-blue-600 font-semibold">
                            {selectedAccountInfo
                                ? Number(
                                      selectedAccountInfo.balance,
                                  ).toLocaleString("vi-VN")
                                : "---"}
                        </span>
                    </div>
                </div>

                {/* Section Heading */}
                <h2 className="text-xl font-semibold text-gray-800">
                    Thông tin tiết kiệm
                </h2>

                {/* Saving Product Section */}
                <div className={sectionStyle}>
                    <label className={labelStyle}>Sản phẩm tiết kiệm</label>
                    <select
                        {...register("savingTypeId", {
                            required: "Vui lòng chọn sản phẩm tiết kiệm",
                        })}
                        className={inputStyle}
                        defaultValue=""
                        disabled={isSavingTypesLoading}
                    >
                        <option value="" disabled>
                            Chọn sản phẩm tiết kiệm
                        </option>
                        {savingTypes?.map((type) => (
                            <option key={type._id} value={type._id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    {errors.savingTypeId && (
                        <p className={errorStyle}>
                            {errors.savingTypeId.message}
                        </p>
                    )}
                </div>

                {/* Term and Amount Section */}
                <div className={`${sectionStyle} space-y-10`}>
                    {/* Term Selection */}
                    <div>
                        <label className={labelStyle}>Kỳ hạn</label>
                        <select
                            {...register("term", {
                                required: "Vui lòng chọn kỳ hạn",
                            })}
                            className={inputStyle}
                            defaultValue=""
                            disabled={
                                !selectedSavingTypeId || isInterestRateLoading
                            }
                        >
                            <option value="" disabled>
                                Chọn kỳ hạn
                            </option>
                            {filteredInterestRates?.map((rate) => (
                                <option
                                    key={rate._id}
                                    value={rate.maturityPeriod}
                                >
                                    {rate.maturityPeriod} tháng - Lãi suất{" "}
                                    {rate.monthlyInterestRate}%
                                </option>
                            ))}
                        </select>
                        {errors.term && (
                            <p className={errorStyle}>{errors.term.message}</p>
                        )}
                    </div>

                    {/* Amount Input */}
                    <div>
                        <label className={labelStyle}>Số tiền gửi</label>
                        <input
                            {...register("amount", {
                                required: "Vui lòng nhập số tiền",
                                min: {
                                    value: depositType?.minDepositLimit || 0,
                                    message: `Tối thiểu là ${depositType?.minDepositLimit?.toLocaleString("vi-VN")} VNĐ`,
                                },
                                max: {
                                    value:
                                        depositType?.maxDepositLimit ||
                                        Infinity,
                                    message: `Tối đa là ${depositType?.maxDepositLimit?.toLocaleString("vi-VN")} VNĐ`,
                                },
                            })}
                            className={inputStyle}
                            placeholder="Số tiền gửi"
                            type="number"
                            disabled={!depositType || isDepositLoading}
                        />
                        {errors.amount && (
                            <p className={errorStyle}>
                                {errors.amount.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-right mt-2">
                    <button
                        type="submit"
                        className="bg-[#96C576] text-white px-6 py-2 rounded-lg hover:bg-[#a0d37e] transition-colors"
                        disabled={isLoading}
                    >
                        {isLoading ? "Đang xử lý..." : "Tiếp tục"}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CreateSavingStep;
