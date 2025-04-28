
export default function SelectField({ label, value, onChange, options, placeholder }) {
    return (
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">{label}</label>
        <div className="relative">
          <select 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 bg-white appearance-none"
          >
            <option value="">{placeholder || "Select an option"}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  