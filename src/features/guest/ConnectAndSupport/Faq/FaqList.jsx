import FaqQuestion from "./FaqQuestion";

function FaqList({ listFaq, setFaqTab, faqTab }) {
    return (
        <div className="w-full mb-4 space-y-2 md:w-1/2 lg:w-2/5 md:mb-0">
            {listFaq.map((item, index) => (
                <FaqQuestion
                    question={item.question}
                    onClick={() => {
                        setFaqTab(index);
                    }}
                    isOpen={faqTab === index}
                    key={index}
                />
            ))}
        </div>
    );
}

export default FaqList;
