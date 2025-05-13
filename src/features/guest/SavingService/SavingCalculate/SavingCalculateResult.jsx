// SavingCalculateResult.jsx
function SavingCalculateResult({
    amount,
    monthlyInterestRate,
    dailyInterestRate,
    maturityPeriod,
    isTerm,
}) {
    // Default values if inputs are not provided
    const amountValue = amount || 0;
    let totalAmount = 0;
    let displayInterestRate = 0;

    if (amountValue > 0) {
        if (isTerm && monthlyInterestRate > 0) {
            // Có kỳ hạn: calculate for the entire maturity period using monthly interest
            totalAmount =
                amountValue +
                (amountValue * monthlyInterestRate * maturityPeriod) / 100;
            displayInterestRate = monthlyInterestRate;
        } else if (!isTerm && dailyInterestRate > 0) {
            totalAmount = amountValue + (amountValue * dailyInterestRate) / 100;
            displayInterestRate = dailyInterestRate;
        }
    }

    return (
        <div className="flex flex-col flex-1 p-4 space-y-2 rounded-md bg-gray-50 sm:p-6 md:p-8 lg:p-12 sm:space-y-3">
            <div className="flex flex-col items-end space-y-1 text-sm text-gray-600 sm:space-y-2">
                <div className="mb-2 text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl sm:mb-4 md:mb-6">
                    {totalAmount.toLocaleString()} VND
                </div>
                <div className="text-base text-gray-800 sm:text-lg md:text-xl">
                    {amountValue.toLocaleString()} VND
                </div>
                <div className="text-lg text-gray-800 sm:text-xl md:text-2xl">
                    {displayInterestRate}% {isTerm ? "/tháng" : "/ngày"}
                </div>
            </div>
        </div>
    );
}

export default SavingCalculateResult;
