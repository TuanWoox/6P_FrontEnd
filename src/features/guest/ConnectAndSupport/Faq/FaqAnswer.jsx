function FaqAnswer({ answer }) {
    return (
        <div className="w-full md:w-1/2 lg:w-3/5 mt-1 md:mt-3 px-4 sm:px-5 py-3 bg-[#FAFBFF] font-medium sm:font-semibold rounded-xl border border-gray-200 text-sm sm:text-base md:text-lg leading-relaxed shadow-sm">
            {answer}
        </div>
    );
}

export default FaqAnswer;
