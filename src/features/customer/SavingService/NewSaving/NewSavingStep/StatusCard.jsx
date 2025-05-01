const StatusCard = ({ data, error }) => {
    if (!data && !error) return null;

    const isSuccess = Boolean(data);
    const isError = Boolean(error);

    const cardStyle = isSuccess
        ? "bg-green-50 text-green-700"
        : "bg-red-50 text-red-700";

    const title = isSuccess ? "✅ Thành công" : "❌ Thất bại";
    const message = isSuccess
        ? data?.message || "Gửi tiết kiệm thành công."
        : error?.message || "Đã xảy ra lỗi.";

    return (
        <div className={`rounded-xl p-5 mb-4 shadow text-center ${cardStyle}`}>
            <div className="text-lg font-semibold mb-2">{title}</div>
            <div className="text-sm">{message}</div>
        </div>
    );
};
export default StatusCard;
