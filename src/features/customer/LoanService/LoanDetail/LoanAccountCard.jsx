function LoanAccountCard({ id, loanTypeName }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
      <div className="mb-4">
        <h3 className="text-[#95C475] text-2xl font-semibold">
          {loanTypeName}
        </h3>
      </div>
      <div>
        <p className="text-gray-500 text-sm mb-1">TÀI KHOẢN VAY</p>
        <p className="text-gray-800 font-bold text-lg">{id}</p>
      </div>
    </div>
  );
}

export default LoanAccountCard;
