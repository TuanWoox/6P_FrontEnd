function SectionContent({ section, isLast }) {
  if (!section || !Array.isArray(section.items)) {
    return null; // or return some fallback UI
  }
  return (
    <div className={`${isLast ? "" : "mb-3"} bg-gray-100 px-8 py-4 rounded-xl`}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6 ">
        {section.title && (
          <h3 className="text-lg font-bold mb-2 md:w-1/3  md:text-xl text-gray-900 ">
            {section.title}
          </h3>
        )}
        <div className="md:w-2/3">
          <ul className="list-disc pl-6 space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx} className="text-gray-700 ">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionContent;
