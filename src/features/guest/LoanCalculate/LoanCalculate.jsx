import LoanCalculateInput from "./LoanCalculateInput";
import LoanCalculateResult from "./LoanCalculateResult";

function LoanCalculate() {
  return (
    <div className="LoanCalculatePage">
      <div
        className="w-7/8 mt-8 h-[30px] bg-cover bg-center rounded-lg mx-auto relative p-24 items-center"
        style={{
          backgroundImage:
            "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/Cong-cu-tien-ich/Desktop_Tinh-lich-tra-no.jpg?h=750&iar=0&w=3936&ts=20230806112657&hash=F7F89ECE8B04B224D9CA4E3010F80D7A')",
        }}
      >
        <p className="uppercase text-green-800 font-semibold text-4xl">
          Tính lịch trả nợ
        </p>
      </div>
      <div className="bg-gradient-to-r from-[#f3ffe9] to-[#eaf6fe] w-7/8 mx-auto mt-8 mb-8 rounded-md shadow-md p-4 flex flex-col md:flex-row gap-4">
        <LoanCalculateInput />
        <LoanCalculateResult />
      </div>
    </div>
  );
}

export default LoanCalculate;
