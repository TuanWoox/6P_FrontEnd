import { useForm, Controller } from "react-hook-form";
import Button from "../Button";
import { useFetchAllLoanInterestRates } from "../../../../../hooks/useFetchAllLoanInterestRates";
import { useLocation } from "react-router";
import { useFindLoanInterestRates } from "../../../../../hooks/useFindLoanInterestRates";
import useCheckingAccounts from "../../../../../hooks/useGetCheckingAccount";
import { formatCurrency } from "../../../../../utils/helpers";

function CreateLoanStep({ handleCreateLoanNext }) {
    const {
        accounts,
        loading: accountsLoading,
        error: accountsError,
    } = useCheckingAccounts();
    const { loanInterestRates, isLoading, error } =
        useFetchAllLoanInterestRates();
    const location = useLocation();
    const loanType = location.state?.product;

    const accountOptions = accounts.map((acc) => ({
        value: acc.accountNumber,
        label: `${acc.accountNumber}`,
    }));

    // Khởi tạo react-hook-form
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            loanType: loanType._id,
            loanTerm: "",
            loanAmount: "",
            destAccountNumber: "",
            Income: "",
        },
    });

    const {
        mutate: findLoanInterestRates,
        isLoading: isFinding,
        error: findError,
    } = useFindLoanInterestRates({
        onSuccess: (result, variables) => {
            console.log("Component onSuccess:", result);
            handleCreateLoanNext({ ...variables, findResult: result });
        },
        onError: (error) => {
            console.log("Component onError:", error);
        },
    });

    // Xử lý khi submit form
    const onSubmit = (data) => {
        console.log("Gửi dữ liệu đi");
        findLoanInterestRates(data);
    };

    // Lấy danh sách termMonths duy nhất và sắp xếp tăng dần
    const termMonthsOptions = loanInterestRates
        ? [...new Set(loanInterestRates.map((item) => item.termMonths))]
              .sort((a, b) => a - b)
              .map((term) => ({
                  value: term.toString(),
                  label: `${term} tháng`,
              }))
        : [];

    if (isLoading) return <div>Đang tải dữ liệu...</div>;
    if (error) return <div>Đã xảy ra lỗi: {error.message}</div>;

    if (isFinding) return <div>Đang tìm kiếm lãi suất...</div>;
    if (findError) return <div>Đã xảy ra lỗi: {findError.message}</div>;

    if (accountsLoading)
        return <div className="text-center py-8">Đang tải tài khoản...</div>;
    if (accountsError)
        return (
            <div className="text-center py-8 text-red-600">
                Lỗi tải tài khoản: {accountsError.message}
            </div>
        );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-2xl mx-auto p-4">
                {/* Sản phẩm cho vay */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <label className="block text-gray-700 mb-2">
                        Tài khoản nhận
                    </label>
                    <div className="relative">
                        <Controller
                            name="destAccountNumber"
                            control={control}
                            rules={{
                                required: "Vui lòng chọn tài khoản nhận",
                            }}
                            render={({ field }) => (
                                <select
                                    {...field}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white appearance-none"
                                >
                                    <option value="" disabled>
                                        Chọn tài khoản nhận
                                    </option>
                                    {accountOptions.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        {errors.loanTerm && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.destAccountNumber.message}
                            </p>
                        )}
                    </div>
                </div>
                {/* Thông tin khoản vay */}
                <h2 className="text-lg font-medium text-gray-800 mb-4">
                    Thông tin khoản vay
                </h2>

                {/* Sản phẩm cho vay */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-700">Sản phẩm cho vay</span>
                        <span className="text-gray-700">{loanType.name}</span>
                    </div>
                </div>

                {/* Form thông tin khoản vay */}
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <div className="space-y-6">
                        {/* Thời hạn vay */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Thời hạn vay
                            </label>
                            <div className="relative">
                                <Controller
                                    name="loanTerm"
                                    control={control}
                                    rules={{
                                        required: "Vui lòng chọn thời hạn vay",
                                    }}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white appearance-none"
                                        >
                                            <option value="" disabled>
                                                Chọn thời hạn vay
                                            </option>
                                            {termMonthsOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            {errors.loanTerm && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.loanTerm.message}
                                </p>
                            )}
                        </div>
                        {/* Số tiền đề nghị cấp */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Số tiền đề nghị cấp (VND)
                            </label>
                            <input
                                type="number"
                                {...register("loanAmount", {
                                    required: "Vui lòng nhập số tiền",
                                    min: {
                                        value: loanType.minLimit,
                                        message:
                                            "Tối thiểu " +
                                            formatCurrency(loanType.minLimit) +
                                            " VND",
                                    },
                                    max: {
                                        value: loanType.maxLimit,
                                        message:
                                            "Tối đa " +
                                            formatCurrency(loanType.maxLimit) +
                                            " VND",
                                    },
                                })}
                                className="w-full py-3 px-4 border-b border-gray-300 bg-transparent focus:outline-none"
                            />
                            {errors.loanAmount && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.loanAmount.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Mức Lương của bạn
                            </label>
                            <input
                                type="number"
                                {...register("Income", {
                                    required: "Vui lòng nhập mức lương của bạn",
                                    min: {
                                        value: loanType.minIncomeRequired,
                                        message:
                                            "Mức lương tối thiểu " +
                                            formatCurrency(
                                                loanType.minIncomeRequired,
                                            ) +
                                            " VND",
                                    },
                                    max: {
                                        value: loanType.maxIncomeRequired,
                                        message:
                                            "Mức lương tối đa " +
                                            formatCurrency(
                                                loanType.maxIncomeRequired,
                                            ) +
                                            " VND",
                                    },
                                })}
                                className="w-full py-3 px-4 border-b border-gray-300 bg-transparent focus:outline-none"
                            />
                            {errors.Income && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.Income.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <Button type="submit" fullWidth>
                    Tiếp tục
                </Button>
            </div>
        </form>
    );
}

export default CreateLoanStep;
