function SavingInterest() {
  return (
    <div>
      <div
        className="w-7/8 mt-8 h-[30px] bg-cover bg-center rounded-lg mx-auto relative p-24 flex items-center justify-start"
        style={{
          backgroundImage:
            "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHTC/Giai-Phap/Banner-ty-gia---lai-suat/banner-lai-suat-update-1406.jpg?h=500&iar=0&w=2624&ts=20230615080859&hash=4C7B77D96BD6F4D43EA817F892B4EE5F')",
        }}
      >
        <div>
          <p className="uppercase text-green-800 font-semibold text-4xl bg-opacity-70 p-2 rounded">
            Lãi suất tiền gửi
          </p>
        </div>
      </div>
      <div className="mx-32 my-8 mb-36">
        <div>
          <h1 className="uppercase text-green-800 text-xl font-bold mb-6">
            Thông tin sản phẩm
          </h1>
          <div className={` max-h-[450px]`}>
            <table className="w-full table-auto border-collapse border border-gray-300 text-xl">
              <thead className="top-0 z-10 bg-[#96C576] bg-opacity-80 text-gray-800 font-semibold">
                <tr>
                  <th className="border border-gray-300 p-4 text-center w-1/2">
                    Kỳ hạn
                  </th>
                  <th className="border border-gray-300 p-4 text-center w-1/2">
                    VND
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white h-12">
                  <td className="border border-gray-300 p-4 text-center">
                    Không kỳ hạn
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    0.25%
                  </td>
                </tr>
                <tr className="bg-gray-50 h-12">
                  <td className="border border-gray-300 p-4 text-center">
                    1 tháng
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    3.00%
                  </td>
                </tr>
                <tr className="bg-white h-12">
                  <td className="border border-gray-300 p-4 text-center">
                    3 tháng
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    3.30%
                  </td>
                </tr>
                <tr className="bg-gray-50 h-12">
                  <td className="border border-gray-300 p-4 text-center">
                    6 tháng
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    4.00%
                  </td>
                </tr>
                <tr className="bg-white h-12">
                  <td className="border border-gray-300 p-4 text-center">
                    9 tháng
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    4.30%
                  </td>
                </tr>
                <tr className="bg-gray-50 h-12">
                  <td className="border border-gray-300 p-4 text-center">
                    12 tháng
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    4.80%
                  </td>
                </tr>
                <tr className="bg-white h-12">
                  <td className="border border-gray-300 p-4 text-center">
                    18 tháng
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    6.00%
                  </td>
                </tr>
                <tr className="bg-gray-50 h-12">
                  <td className="border border-gray-300 p-4 text-center">
                    24 tháng
                  </td>
                  <td className="border border-gray-300 p-4 text-center">
                    6.00%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingInterest;
