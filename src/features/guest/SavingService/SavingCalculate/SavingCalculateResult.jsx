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
        <div className="flex-1 bg-gray-50 p-12 rounded-md space-y-3 flex flex-col">
            <div className="text-sm text-gray-600 space-y-2 flex flex-col items-end">
                <div className="text-4xl font-semibold text-gray-800 mb-6">
                    {totalAmount.toLocaleString()} VND
                </div>
                <div className="text-xl text-gray-800">
                    {amountValue.toLocaleString()} VND
                </div>
                <div className="text-2xl text-gray-800">
                    {displayInterestRate}% {isTerm ? "/tháng" : "/ngày"}
                </div>
            </div>
        </div>
    );
}

export default SavingCalculateResult;
