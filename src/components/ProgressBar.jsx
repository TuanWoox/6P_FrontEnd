function ProgressBar({ percentage }) {
    return (
        <div className="flex items-center space-x-3 w-full">
            <span className="text-right font-medium text-gray-700">
                {percentage}%
            </span>
            <div className="flex-1 bg-gray-300 rounded-full h-8">
                <div
                    className="bg-[#95C475] h-8 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}

export default ProgressBar;
