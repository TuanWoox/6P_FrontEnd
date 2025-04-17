function SavingCalculateInput({ amount, setAmount, period, setPeriod }) {
  return (
    <div className="flex-1 p-12  rounded-md space-y-4">
      <div className="flex items-center mb-8">
        <input
          className="flex-1 h-[56px] border bg-white border-[#e7e7e7] rounded-md p-4 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex items-center  mb-8">
        <select
          className="w-full border rounded-md border-[#e7e7e7] bg-white p-4 cursor-pointer appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="1">1 months</option>
          <option value="3">3 months</option>
          <option value="6">6 months</option>
          <option value="9">9 months</option>
          <option value="12">12 months</option>
          <option value="18">18 months</option>
          <option value="24">24 months</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2  mb-8">
        <button
          className="px-4 py-2 rounded-full border cursor-pointer bg-white border-[#e7e7e7] focus:ring-green-500 focus:border-green-500"
          onClick={() => setPeriod(1)}
        >
          1 month
        </button>
        <button
          className="px-4 py-2 rounded-full border cursor-pointer bg-white border-[#e7e7e7] focus:ring-green-500 focus:border-green-500"
          onClick={() => setPeriod(3)}
        >
          3 months
        </button>
        <button
          className="px-4 py-2 rounded-full border cursor-pointer bg-white border-[#e7e7e7] focus:ring-green-500 focus:border-green-500"
          onClick={() => setPeriod(6)}
        >
          6 months
        </button>
        <button
          className="px-4 py-2 rounded-full border cursor-pointer bg-white border-[#e7e7e7] focus:ring-green-500 focus:border-green-500"
          onClick={() => setPeriod(9)}
        >
          9 months
        </button>
      </div>
    </div>
  );
}

export default SavingCalculateInput;
