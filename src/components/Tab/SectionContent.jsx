function SectionContent({ section, isLast }) {
    if (!section || !Array.isArray(section.items)) {
        return null; // or return some fallback UI
    }
    return (
        <div
            className={`${isLast ? "" : "mb-2 sm:mb-3"} bg-gray-100 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl`}
        >
            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start sm:gap-4 md:gap-6">
                {section.title && (
                    <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg sm:mb-2 md:w-1/3 md:text-xl">
                        {section.title}
                    </h3>
                )}
                <div className="md:w-2/3">
                    <ul className="pl-4 space-y-1 list-disc sm:pl-6 sm:space-y-2">
                        {section.items.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-sm text-gray-700 sm:text-base"
                            >
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
