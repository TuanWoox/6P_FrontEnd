
function SavingDetail_ProductInfo({
    title = "Thông tin sản phẩm",
    content = "Thông tin chi tiết về sản phẩm",
}) {
    const renderContent = () => {
        if (typeof content !== "string") return content;

        const lines = content.trim().split("\n");

        const items = [];
        let currentList = [];

        for (let line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith("-")) {
                currentList.push(trimmed.substring(1).trim());
            } else {
                if (currentList.length) {
                    items.push(
                        <ul className="list-disc pl-6 space-y-2 mb-2" key={`list-${items.length}`}>
                            {currentList.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    );
                    currentList = [];
                }
                items.push(<p className="mb-2" key={`p-${items.length}`}>{trimmed}</p>);
            }
        }

        if (currentList.length) {
            items.push(
                <ul className="list-disc pl-6 space-y-2 mb-2" key={`list-${items.length}`}>
                    {currentList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            );
        }

        return items;
    };

    return (
        <div className="flex p-2.5 bg-gray-200 rounded-lg">
            <div className="w-1/3 p-4 font-semibold text-xl my-auto">
                {title}
            </div>
            <div className="w-2/3 p-4 text-lg my-auto">
                {renderContent()}
            </div>
        </div>
    );
}
export default SavingDetail_ProductInfo;