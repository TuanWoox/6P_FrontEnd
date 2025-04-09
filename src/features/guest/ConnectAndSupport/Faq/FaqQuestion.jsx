function FaqQuestion({ question, onClick }) {
  return (
    <div
      className="bg-white p-5  shadow-md hover:shadow-lg transition duration-300 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <p className="text-xl  font-bold text-gray-800 hover:text-green-600 transition-colors duration-300">
        {question}
      </p>
    </div>
  );
}

export default FaqQuestion;
