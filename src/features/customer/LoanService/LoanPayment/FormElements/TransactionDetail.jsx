export default function TransactionDetail({ label, value, highlight = false }) {
    return (
      <div className="flex justify-between py-1">
        <span className="text-gray-600">{label}</span>
        <span className={`font-medium ${highlight ? 'text-red-600' : 'text-gray-800'}`}>{value}</span>
      </div>
    );
  }
  