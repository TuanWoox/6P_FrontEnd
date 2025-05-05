import { Link } from "react-router";

function LoanCard({ loanData }) {
    if (!loanData) return null; // Chống crash nếu undefined

    const {
        isReverse = true,
        title = "Vay Tiêu dùng",
        description = "...",
        loanInfo = "Linh Hoạt",
        loanTerm = "60 tháng",
        imageSrc = "...",
        imageAlt = "Woman shopping online",
        link,
    } = loanData;
    return (
        <div
            className={`flex flex-col ${
                isReverse ? "md:flex-row-reverse" : "md:flex-row"
            } bg-white rounded-lg overflow-hidden max-w-full mb-10 md:mb-20 mt-6 md:mt-10 shadow-lg`}
        >
            <div className="w-full border-gray-400 md:w-1/3 border-1 rounded-xl">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover w-full h-64 md:h-full rounded-xl"
                />
            </div>

            <div className="flex flex-col justify-between w-full p-4 md:w-2/3 md:p-6">
                <div>
                    <h2 className="mb-2 text-xl font-bold md:text-2xl">
                        {title}
                    </h2>
                    <p className="mb-3 text-xs text-gray-500 md:text-sm md:mb-4">
                        {description}
                    </p>

                    <div className="mb-4 md:mb-6">
                        <p className="text-sm font-medium text-gray-700 md:text-base">
                            MỨC VAY:{" "}
                            <span className="font-bold">{loanInfo}</span>
                        </p>
                        <p className="py-2 text-sm font-medium text-gray-700 md:text-base md:py-4">
                            THỜI HẠN VAY TỐI ĐA:
                            <span className="font-bold"> {loanTerm}</span>
                        </p>
                    </div>
                </div>

                <div
                    className={`flex gap-2 md:gap-3 ${
                        isReverse
                            ? "md:flex-row-reverse justify-start md:justify-end"
                            : "justify-start md:justify-end"
                    }`}
                >
                    <Link
                        to="/customer/loan/new/"
                        className="bg-green-400 hover:bg-green-500 text-white py-1.5 md:py-2 px-4 md:px-6 rounded-md text-sm md:text-base"
                    >
                        Đăng ký
                    </Link>
                    <Link
                        className="border border-green-400 text-green-500 py-1.5 md:py-2 px-4 md:px-6 rounded-md hover:bg-green-50 text-sm md:text-base"
                        to={link}
                    >
                        Tìm hiểu thêm
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoanCard;
