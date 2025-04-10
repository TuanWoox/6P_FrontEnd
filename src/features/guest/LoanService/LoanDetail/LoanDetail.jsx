import SmallInfoCard from "../../../../components/SmallInfoCard";
import TabComponent from "../../../../components/Tab/TabComponent";

const tabsData = [
  {
    title: "Thông tin chung",
    sections: [
      {
        title: "Đối tượng khách hàng",
        type: "list",
        items: [
          "Từ 18 tuổi đến không quá 75 tuổi tại thời điểm kết thúc khoản vay",
          "Có nhu cầu vay vốn để thanh toán các chi phí tiêu dùng hàng ngày",
          "Có mức thu nhập bình quân từ 05 triệu đồng/tháng trở lên",
          "Có tài sản bảo đảm là bất động sản, ô tô, giấy tờ có giá",
        ],
      },
    ],
  },
  {
    title: "Hồ sơ chuẩn bị",
    sections: [
      {
        type: "keyValue",
        label: "Thời gian vay tối đa",
        value: "02 tỷ VND",
      },
      {
        type: "keyValue",
        label: "Số tiền vay tối đa",
        value: "120 tháng",
      },
    ],
  },
  {
    title: "Quy trình & Ngày trả nợ",
    sections: [
      {
        title: "Quy trình vay",
        type: "list",
        items: [
          "Bước 1: Nộp hồ sơ vay vốn",
          "Bước 2: Thẩm định và phê duyệt",
          "Bước 3: Giải ngân khoản vay",
        ],
      },
      {
        title: "Ngày trả nợ",
        type: "text",
        content:
          "Khách hàng có thể lựa chọn ngày trả nợ hàng tháng phù hợp với lịch nhận lương.",
      },
    ],
  },
  {
    title: "Biểu phí",
    sections: [
      {
        title: "Chi tiết biểu phí",
        type: "text",
        content:
          "Phí quản lý khoản vay: 1%/năm trên dư nợ vay. Phí trả nợ trước hạn: 2% số tiền trả trước hạn.",
      },
    ],
  },
];

function LoanDetail() {
  return (
    <div>
      <div className="p-8">
        <div
          className="w-full h-[440px] bg-cover bg-center relative p-24 rounded-2xl flex flex-col justify-start"
          style={{
            backgroundImage:
              "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Vay/SAN-PHAM-TIN-DUNG/HRB_Vay-tieu-dung-co-tai-san-dam-bao_PC.jpg?h=1500&iar=0&w=3936&ts=20230816033333&hash=654747DCD473C5532F2E37F58B61C90B')",
          }}
        >
          <h2 className="text-4xl uppercase font-bold text-green-800 mb-6">
            Vay Tiêu Dùng
          </h2>

          <div className="flex gap-4 justify-between w-100 mt-6">
            <div>
              <p className="text-green-800 text-lg">Mức vay</p>
              <p className="font-bold text-black">Linh Hoạt</p>
            </div>

            <div>
              <p className="text-green-800 text-lg">Thời hạn vay tối đa</p>
              <p className="font-bold text-black">60 tháng</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-32 my-8 border-1 border-black">
        <div>
          <h1 className="uppercase text-green-800 text-xl font-bold">
            Thông tin sản phẩm
          </h1>
          <div className="mt-4 flex flex-row gap-4  justify-center">
            <TabComponent tabs={tabsData} />
            {/* <TabContent /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanDetail;
