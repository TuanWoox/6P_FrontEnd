import SectionContent from "./SectionContent";

function TabContent({ sections }) {
  return (
    <div className=" ">
      {sections.map((section, index) => (
        <SectionContent
          key={index}
          section={section}
          isLast={index === sections.length - 1}
        />
      ))}
    </div>
  );
}

export default TabContent;
