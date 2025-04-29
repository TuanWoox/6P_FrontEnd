// Tiết kiệm có kỳ hạn
const dataForTermDeposit = {
    imgData: [
        {
            title: "Tiết kiệm có kỳ hạn",
            content1_title: "Loại tiền tệ",
            content1 :"Đa dạng",
            content2_title: "Kỳ hạn gửi tối đa",
            content2 :"24 tháng",
        }
    ],

    infoCard: [
        {
            title: "Loại tiền gửi đa dạng",
            content: "Gửi tiền bằng nhiều loại ngoại tệ khác nhau: USD, EUR, GBP, AUD, v.v.",
            imgSrc: "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Icon-USP/loai-tien-gui-da-dang.svg?iar=0&ts=20230428092907&hash=8DD49378B0B7FC6A367DA8F9B11B8195",
        },
        {
            title: "Kỳ hạn linh hoạt",
            content: "Từ tối thiểu 1 tháng đến tối đa 24 tháng",
            imgSrc: "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Icon-USP/ky-han-phong-phu.svg?iar=0&ts=20230428092907&hash=07CD354026FE95C6D7A82FD40D27AC30",
        },
        {
            title: "Thủ tục nhanh chóng",
            content: "Gửi và rút dễ dàng tại tất cả điểm giao dịch của 6PBank trên toàn quốc",
            imgSrc: "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/San-pham-Dich-vu/Tiet-kiem/Icon-USP/thu-tuc-nhanh-chong.svg?iar=0&ts=20230428092906&hash=8B3DBEECA1E19CCBDCAF32EF4EBE13E3",
        }
    ],

    listProductInfo: [
        {
            title: "LOẠI TIỀN TỆ",
            content: "VND, USD, EUR, GBP, AUD và các loại ngoại tệ khác theo quy định của 6PBank",
        },
        {
            title: "SỐ TIỀN GỬI",
            content: "Tối đa: không giới hạn số tiền gửi\nTối thiểu: 500.000 VNĐ",
        },
        {
            title: "KỲ HẠN",
            content: "Linh hoạt: theo tháng, theo năm\nCác kỳ hạn gửi: 07 ngày, 14 ngày, từ 01 tháng - 60 tháng",
        },
        {
            title: "LÃI SUẤT",
            content: `Lãi suất cố định trong suốt kỳ hạn gửi. Trong trường hợp rút trước hạn:
                    - Lãi suất rút trước hạn VND: Bằng lãi suất không kỳ hạn thấp nhất tại Vietcombank
                    - Lãi suất rút trước hạn ngoại tệ: 0%/năm`,
        },
        {
            title: "PHƯƠNG THỨC TRẢ LÃI",
            content: "Trả lãi cuối kỳ",
        },
    ],

    listDemandInfo: [
        {
            title: "TIỀN GỬI CÓ KỲ HẠN",
            content: "Khách hàng từ 18 tuổi trở lên, có tài khoản thanh toán tại 6PBank",
        },
    ],
};


// Tiết kiệm không kỳ hạn
const dataForDemandDeposit = {
    imgData: [
        {
            title: "Tiết kiệm không kỳ hạn",
            content1_title: "Tiền gửi tối thiểu",
            content1 :"500.000 VND",
            content2_title: "Số lần rút gốc",
            content2 :"Không giới hạn",
        }
    ],

    infoCard: [
        {
            title: "Tối ưu lợi ích",
            content: "Giữ nguyên lãi suất khoản tiền còn lại, hưởng lãi suất không kỳ hạn khoản tiền rút trước hạn",
            imgSrc: "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/Lien-he-va-Ho-tro/HDSD/Icon-update-2105/Tiet-kiem/patch-check.svg?iar=0&ts=20230331094739&hash=ECFEAAF648C99437C53826442DBCBE57",
        },
        {
            title: "Rút gốc linh hoạt",
            content: "Rút một phần tiền gửi mà không phải tất toán toàn bộ",
            imgSrc: "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/Lien-he-va-Ho-tro/HDSD/Icon-update-2105/Tiet-kiem/money-recive.svg?iar=0&ts=20230331094730&hash=0614BF7E187DBE33B78C812FAB8DAD16",
        },
        {
            title: "Giao dịch thuận tiện",
            content: "Gửi và rút dễ dàng qua Ngân hàng số 6P Bank hoặc điểm giao dịch của 6P Bank",
            imgSrc: "https://www.vietcombank.com.vn/-/media/Project/VCB-Sites/VCB/KHCN/Icon-update-1307/calendar-tick.svg?iar=0&ts=20230713025834&hash=CA4E59856C8DD5D0CC486DD9BCDCB61A",
        }
    ],

    listProductInfo: [
        {
            title: "LOẠI TIỀN TỆ",
            content: "VND, USD, EUR, GBP, AUD và các loại ngoại tệ khác theo quy định của 6PBank",
        },
        {
            title: "SỐ TIỀN GỬI",
            content: "Tối đa: không giới hạn số tiền gửi\nTối thiểu: 50.000 VNĐ",
        },
        {
            title: "LÃI SUẤT",
            content: "Lãi suất tính theo số dư cuối ngày: (1%/năm)",
        },
        {
            title: "PHƯƠNG THỨC TRẢ LÃI",
            content: "Theo từng ngày hoặc theo tháng",
        },
    ],

    listDemandInfo: [
        {
            title: "TIỀN GỬI KHÔNG KỲ HẠN",
            content: "Khách hàng từ 18 tuổi trở lên, có tài khoản thanh toán tại 6PBank",
        },
    ],
};

export function getSavingDetailDataByType(type) {
    switch (type) {
        case 1:
            return dataForTermDeposit;
        case 2:
            return dataForDemandDeposit;
        default:
            return null;
    }
}