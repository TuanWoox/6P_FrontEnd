import LoanCard from "./LoanCard";
import loanCardData from "./loanCardData";

function LoanHomepage() {
  return (
    <div>
      <div className="p-8">
        <div
          className="w-full h-[440px] bg-cover bg-center relative p-24 rounded-2xl "
          style={{
            backgroundImage:
              "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Vay/Danh-sach-vay/Vietcombank-vay-tiu-dng.jpg?h=732&iar=0&w=1920&ts=20230329032521&hash=C746121161DD373CB820AA44187F1C5D')",
          }}
        >
          <p className="uppercase text-green-600 font-semibold text-4xl">
            Vay Tiêu dùng
          </p>
          <p className="text-xl  mt-4">
            Lãi suất cạnh tranh, thời hạn linh hoạt
          </p>
          <ul className="mt-4 text-xl">
            <li className=" py-2 w-fit">Vay tiêu dùng</li>
            <li className=" py-2 w-fit">Vay mua nhà</li>
            <li className=" py-2 w-fit">Vay mua kinh doanh</li>
            <li className=" py-2 w-fit"> Vay sinh viên</li>
          </ul>
        </div>
      </div>
      <div className="mx-32 my-8">
        <div>
          <h3 className="font-bold text-3xl ">Các sản phẩm cho vay</h3>
          <p className="my-4 text-stone-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <LoanCard loanData={loanCardData[0]} />
        <LoanCard loanData={loanCardData[1]} />
        <LoanCard loanData={loanCardData[2]} />
      </div>
    </div>
  );
}

export default LoanHomepage;
