import FaqQuestion from "./FaqQuestion";
function FaqList({ listFaq, setFaqTab }) {
  return (
    <div>
      {listFaq.map((item, index) => (
        <FaqQuestion
          question={item.question}
          onClick={() => {
            setFaqTab(index);
          }}
        />
      ))}
    </div>
  );
}

export default FaqList;
