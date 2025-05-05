function ConnectCardInfo({ header, content }) {
    return (
        <div className="bg-[#E9E9E9] rounded-xl shadow p-6 w-full md:w-[48%]">
            <h3 className="mb-3 text-lg font-semibold">{header}</h3>
            {Array.isArray(content) ? (
                <ul className="space-y-1 text-sm">
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-sm">{content}</p>
            )}
        </div>
    );
}

export default ConnectCardInfo;
