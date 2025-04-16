import FaqQuestion from "./FaqQuestion";
function FaqList({ listFaq, setFaqTab, faqTab }) {
  return (
    <div>
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
