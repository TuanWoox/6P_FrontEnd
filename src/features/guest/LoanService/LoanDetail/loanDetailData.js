const dataForConsumer = {
  imgData: [
    {
      title: "Vay tiêu dùng",
      loanAmountInfo: "02 tỷ VND",
      loanTermInfo: "120 tháng",
      backgroundImageURL:
        "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Vay/SAN-PHAM-TIN-DUNG/HRB_Vay-tieu-dung-co-tai-san-dam-bao_PC.jpg?h=1500&iar=0&w=3936&ts=20230816033333&hash=654747DCD473C5532F2E37F58B61C90B')",
    },
  ],
  tabsData: [
    {
      title: "Thông tin chung",
      sections: [
        {
          title: "Đối tượng khách hàng ",
          items: [
            "Từ 18 tuổi đến không quá 75 tuổi tại thời điểm kết thúc khoản vay",
            "Có nhu cầu vay vốn để thanh toán các chi phí tiêu dùng hàng ngày",
            "Có mức thu nhập bình quân từ 05 triệu đồng/tháng trở lên",
            "Có tài sản bảo đảm là bất động sản, ô tô, giấy tờ có giá",
          ],
        },
        {
          title: "Ngày trả nợ",
          items: ["02 tỷ VND"],
        },
        {
          title: "Thời hạn vay tối đa",
          items: ["120 tháng"],
        },
      ],
    },
    {
      title: "Hồ sơ chuẩn bị",
      sections: [
        {
          title: "Phương án sử dụng vốn",
          items: ["Theo mẫu biểu/biểu mẫu của Vietcombank"],
        },
        {
          title: "Hồ sơ nhân thân của khách hàng",
          type: "list",
          items: [
            "CMND/CCCD/Hộ chiếu",
            "Thông tin cư trú của khách hàng",
            "Giấy đăng ký kết hôn/Chứng nhận độc thân",
          ],
        },
        {
          title: "Hồ sơ nhân thân của bên bảo đảm",
          type: "list",
          items: [
            "CMND/Căn cước công dân/Hộ chiếu",
            "Giấy đăng ký kết hôn/Chứng nhận độc thân",
            "Giấy khai sinh/Giấy xác nhận quan hệ thân nhân của công an phường/xã trở lên về mối quan hệ giữa khách hàng vay và bên bảo đảm",
          ],
        },
      ],
    },
    {
      title: "Quy trình & Ngày trả nợ",
      sections: [
        {
          title: "Quy trình vay",
          items: [
            "Bước 1: Khách hàng được tư vấn về điều kiện và hồ sơ vay vốn",
            "Bước 2: Khách hàng chuẩn bị và nộp hồ sơ theo hướng dẫn",
            "Bước 3: Vietcombank thực hiện thẩm định và thông báo kết quả phê duyệt",
            "Bước 4: Khách hàng và Vietcombank ký kết Hợp đồng cho vay",
            "Bước 5: Giải ngân",
          ],
        },
        {
          title: "Ngày trả nợ",
          type: "text",
          items: [
            "Tiền gốc vay: Trả hàng tháng hoặc hàng quý",
            "Lãi vay: Trả hàng tháng theo dư nợ giảm dần",
          ],
        },
      ],
    },
  ],
  infoCards: [
    {
      icon: "🧑‍🤝‍🧑",
      title: "Mục đích vay đa dạng",
      description:
        "Đáp ứng nhiều nhu cầu: mua sắm, học tập, du lịch, khám chữa bệnh, v.v.",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Phương thức vay linh hoạt",
      description: "Thời hạn vay lên tới 120 tháng, tài sản bảo đảm đa dạng",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Xử lý hồ sơ nhanh chóng",
      description:
        "Thủ tục đơn giản, thời gian phê duyệt nhanh chóng, đội ngũ tư vấn sẵn sàng hỗ trợ 24/7",
    },
  ],
};

const dataForMortgage = {
  imgData: [
    {
      title: "Vay mua nhà",
      loanAmountInfo: "100% giá trị nhà đất",
      loanTermInfo: "30 năm",
      backgroundImageURL:
        "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Vay/SAN-PHAM-TIN-DUNG/HRB_Vay-mua-nha-dat_PC.jpg?h=1500&iar=0&w=3936&ts=20230815103826&hash=C1637A611DC9EC93D3252AF2C84E1AF3')",
    },
  ],
  tabsData: [
    {
      title: "Thông tin chung",
      sections: [
        {
          title: "Đối tượng khách hàng ",
          items: [
            "Từ 18 tuổi đến không quá 75 tuổi tại thời điểm kết thúc khoản vay",
            "Có nhu cầu vay vốn để thanh toán các chi phí tiêu dùng hàng ngày",
            "Có mức thu nhập bình quân từ 05 triệu đồng/tháng trở lên",
            "Có tài sản bảo đảm là bất động sản, ô tô, giấy tờ có giá",
          ],
        },
        {
          title: "Ngày trả nợ",
          items: ["02 tỷ VND"],
        },
        {
          title: "Thời hạn vay tối đa",
          items: ["120 tháng"],
        },
      ],
    },
    {
      title: "Hồ sơ chuẩn bị",
      sections: [
        {
          title: "Phương án sử dụng vốn",
          items: ["Theo mẫu biểu/biểu mẫu của Vietcombank"],
        },
        {
          title: "Hồ sơ nhân thân của khách hàng",
          items: [
            "CMND/CCCD/Hộ chiếu",
            "Thông tin cư trú của khách hàng",
            "Giấy đăng ký kết hôn/Chứng nhận độc thân",
            "Giấy khai sinh/Giấy xác nhận quan hệ thân nhân (trường hợp khách hàng vay vốn để mua nhà cho bố mẹ/con)",
          ],
        },
        {
          title: "Hồ sơ nhân thân của bên bảo đảm",
          items: [
            "CMND/Căn cước công dân/Hộ chiếu",
            "Giấy đăng ký kết hôn/Chứng nhận độc thân",
            "Giấy khai sinh/Giấy xác nhận quan hệ thân nhân của công an phường/xã trở lên về mối quan hệ giữa khách hàng vay và bên bảo đảm",
          ],
        },
        {
          title: "Hồ sơ chứng minh mục đích vay vốn",
          items: [
            "Hợp đồng mua bán nhà, Hợp đồng chuyển nhượng đất",
            "Giấy chứng nhận đứng tên Bên bán",
          ],
        },
        {
          title: "Hồ sơ chứng minh nguồn trả nợ",
          items: [
            "Hợp đồng lao động, bảng lương, sao kê tài khoản ngân hàng, v.v.",
          ],
        },
      ],
    },
    {
      title: "Quy trình & Ngày trả nợ",
      sections: [
        {
          title: "Quy trình vay",
          items: [
            "Bước 1: Khách hàng được tư vấn về điều kiện và hồ sơ vay vốn",
            "Bước 2: Khách hàng chuẩn bị và nộp hồ sơ theo hướng dẫn",
            "Bước 3: Vietcombank thực hiện thẩm định và thông báo kết quả phê duyệt",
            "Bước 4: Khách hàng và Vietcombank ký kết Hợp đồng cho vay",
            "Bước 5: Giải ngân",
          ],
        },
        {
          title: "Ngày trả nợ",
          items: [
            "Tiền gốc vay: Trả hàng tháng hoặc hàng quý",
            "Lãi vay: Trả hàng tháng theo dư nợ giảm dần",
          ],
        },
      ],
    },
  ],
  infoCards: [
    {
      icon: "🧑‍🤝‍🧑",
      title: "Mức vay cạnh tranh",
      description:
        "Số tiền vay lên tới 100% giá trị nhà đất, tối đa 50 tỷ VND/khoản vay",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Thời hạn vay, kỳ trả nợ linh hoạt",
      description:
        "Kỳ trả nợ gốc linh hoạt theo thu nhập thực tế nhưng chu kỳ trả nợ gốc không quá 03 tháng",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Xử lý hồ sơ nhanh chóng",
      description:
        "Thủ tục đơn giản, thời gian phê duyệt nhanh chóng, đội ngũ tư vấn sẵn sàng hỗ trợ 24/7",
    },
  ],
};

const dataForBusiness = {
  imgData: [
    {
      title: "Vay Kinh doanh",
      loanAmountInfo: "70% phương án vay",
      loanTermInfo: "84 tháng",
      backgroundImageURL:
        "url('https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Vay/SAN-PHAM-TIN-DUNG/HRB_An-tam-kinh-doanh_PC.jpg?h=1500&iar=0&w=3936&ts=20230815090542&hash=9F7B6D67B413AACE054D6BADA8C4B0B7')",
    },
  ],
  tabsData: [
    {
      title: "Thông tin chung",
      sections: [
        {
          title: "Đối tượng khách hàng ",
          items: [
            "Công dân Việt Nam từ 18 đến 65 tuổi",
            "Có nhu cầu vay vốn trung dài hạn đầu tư tài sản cố định, mở rộng sản xuất kinh doanh",
            "Có tài sản bảo đảm là bất động sản, ô tô, giấy tờ có giá",
          ],
        },
        {
          title: "Số tiền vay tối đa",
          items: ["70% phương án vay"],
        },
        {
          title: "Thời hạn vay tối đa",
          items: ["84 tháng"],
        },
      ],
    },
    {
      title: "Hồ sơ chuẩn bị",
      sections: [
        {
          title: "Phương án sử dụng vốn",
          items: ["Theo mẫu biểu/biểu mẫu của Vietcombank"],
        },
        {
          title: "Hồ sơ nhân thân của khách hàng",
          items: [
            "CMND/CCCD/Hộ chiếu",
            "Thông tin cư trú của khách hàng",
            "Giấy đăng ký kết hôn/Chứng nhận độc thân",
          ],
        },
        {
          title: "Hồ sơ chứng minh mục đích vay vốn",
          items: [
            "Hồ sơ pháp lý hoạt động kinh doanh",
            "Hồ sơ, chứng từ của phương án kinh doanh",
          ],
        },
        {
          title: "Hồ sơ chứng minh nguồn trả nợ",
          items: [
            "Hồ sơ chứng minh thu nhập từ hoạt động kinh doanh của khách hàng và/hoặc doanh nghiệp tư nhân do khách hàng là chủ sở hữu",
          ],
        },
        {
          title: "Hồ sơ tài sản bảo đảm",
          items: [
            "Giấy chứng nhận sở hữu tài sản của khách hàng và/hoặc bên thứ ba theo quy định của Vietcombank",
          ],
        },
      ],
    },
    {
      title: "Quy trình & Ngày trả nợ",
      sections: [
        {
          title: "Quy trình vay",
          items: [
            "Bước 1: Khách hàng được tư vấn về điều kiện và hồ sơ vay vốn",
            "Bước 2: Khách hàng chuẩn bị và nộp hồ sơ theo hướng dẫn",
            "Bước 3: Vietcombank thực hiện thẩm định và thông báo kết quả phê duyệt",
            "Bước 4: Khách hàng và Vietcombank ký kết Hợp đồng cho vay",
            "Bước 5: Giải ngân",
          ],
        },
        {
          title: "Ngày trả nợ",
          items: [
            "Tiền gốc vay: Trả hàng tháng hoặc hàng quý",
            "Lãi vay: Trả hàng tháng theo dư nợ giảm dần",
          ],
        },
      ],
    },
  ],
  infoCards: [
    {
      icon: "🧑‍🤝‍🧑",
      title: "Bổ sung vốn đầu tư sản xuất kinh doanh",
      description: "Bổ sung nhanh chóng và kịp thời vốn đầu tư tài sản cố định",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Lãi suất ưu đãi, đa dạng đối tượng khách hàng",
      description:
        "Đối tượng vay là cá nhân tự kinh doanh, chủ hộ kinh doanh, chủ sở hữu doanh nghiệp tư nhân",
    },
    {
      icon: "🧑‍🤝‍🧑",
      title: "Phương thức trả nợ linh hoạt",
      description: "Phù hợp với thu nhập từ hoạt động kinh doanh",
    },
  ],
};

export function getLoanDetailDataByType(loanType) {
  switch (loanType) {
    case 1:
      return dataForConsumer;
    case 2:
      return dataForMortgage;
    case 3:
      return dataForBusiness;
    default:
      return { tabsData: [], infoCards: [] };
  }
}
