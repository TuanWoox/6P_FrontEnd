import { ChevronUpIcon } from "@heroicons/react/16/solid";

function FaqQuestion({ question, onClick, isOpen }) {
  return (
    <div
      className="bg-white p-5 shadow-md hover:shadow-lg transition duration-300 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-between transition-colors duration-300 ${
          isOpen ? "text-green-600" : "text-gray-800"
        }`}
      >
        <p className="text-xl font-bold hover:text-green-600 transition-colors duration-300">
          {question}
        </p>
        <ChevronUpIcon
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default FaqQuestion;
