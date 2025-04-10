function LoanCard({
  // Boolean state
  isReverse = true,

  // Text content
  title = "Vay Tiêu dùng",
  description = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
  loanInfo = "Linh Hoạt",
  loanTerm = "60 tháng",
  // Image
  imageSrc = "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Vay/SAN-PHAM-TIN-DUNG/Ava_Vay-cam-co-giay-to-co-gia_195-x-343_.jpg?h=32&w=32&ts=20230815090526",
  imageAlt = "Woman shopping online",
}) {
  return (
    <div
      className={`flex bg-white rounded-lg overflow-hidden max-w-full mb-20 mt-10 ${
        isReverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/3 border-1 border-gray-800 rounded-xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-500 text-sm mb-4">{description}</p>

          <div className="mb-6">
            <p className="font-medium text-gray-700">
              MỨC VAY: <span className="font-bold">{loanInfo}</span>
            </p>
            <p className="font-medium text-gray-700 py-4">
              THỜI HẠN VAY TỐI ĐA:
              <span className="font-bold"> {loanTerm}</span>
            </p>
          </div>
        </div>

        <div
          className={`flex gap-3 justify-end ${
            isReverse ? "flex-row-reverse" : ""
          }`}
        >
          <button className="bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded-md">
            Đăng ký
          </button>
          <button className="border border-green-400 text-green-500 py-2 px-6 rounded-md hover:bg-green-50">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoanCard;
