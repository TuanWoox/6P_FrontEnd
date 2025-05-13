import { ChevronUpIcon } from "@heroicons/react/16/solid";

function FaqQuestion({ question, onClick, isOpen }) {
    return (
        <div
            className="p-3 transition duration-300 bg-white border border-gray-200 rounded-md shadow-md cursor-pointer sm:p-4 md:p-5 hover:shadow-lg"
            onClick={onClick}
        >
            <div
                className={`flex items-center justify-between transition-colors duration-300 ${
                    isOpen ? "text-green-600" : "text-gray-800"
                }`}
            >
                <p className="pr-2 text-sm font-bold transition-colors duration-300 sm:text-base md:text-lg lg:text-xl hover:text-green-600">
                    {question}
                </p>
                <ChevronUpIcon
                    className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                    }`}
                />
            </div>
        </div>
    );
}

export default FaqQuestion;
