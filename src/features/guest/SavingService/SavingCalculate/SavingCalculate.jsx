import { useState } from "react";
import SavingCalculateInput from "./SavingCalculateInput";
import SavingCalculateResult from "./SavingCalculateResult";

const interestRates = {
  0: 0,
  1: 3.0,
  3: 3.3,
  6: 4.0,
  9: 4.3,
  12: 4.8,
  18: 6.0,
  24: 6.0,
};

function SavingCalculate() {
  const [amount, setAmount] = useState(0);
  const [period, setPeriod] = useState(0);
  const interestRate = interestRates[period] || 0;
  return (
    <div>
      <div className="bg-gradient-to-r from-[#f3ffe9] to-[#eaf6fe] border-[#e7e7e7] border w-full mx-auto mt-8 mb-8 rounded-md shadow-md flex flex-col md:flex-row gap-4">
        <SavingCalculateInput
          amount={amount}
          setAmount={setAmount}
          period={period}
          setPeriod={setPeriod}
        />
        <SavingCalculateResult amount={amount} interestRate={interestRate} />
      </div>
    </div>
  );
}

export default SavingCalculate;
