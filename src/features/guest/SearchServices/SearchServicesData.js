const listServices = [
  { name: "Lãi suất", link: "/" },
  { name: "Tích lịch trả nợ", link: "/loancalculate" },
  { name: "Cho vay", link: "/loan" },
  { name: "Vay tiêu dùng", link: "/loan/loan-consumer" },
  { name: "Vay mua nhà", link: "/loan/mortgage" },
  { name: "Vay kinh doanh", link: "/loan/loan-business" },
  { name: "Tiết Kiệm", link: "/saving" },
  { name: "Tiết kiệm có kỳ hạn", link: "/saving/term-deposit" },
  { name: "Tiết kiệm không kỳ hạn", link: "/saving/demand-deposit" },
  { name: "Liên hệ", link: "/connect-faq/connect" },
  { name: "Câu hỏi thường gặp", link: "/connect-faq/faq" },
  { name: "Đăng nhập", link: "/signin" },
  { name: "Quên mật khẩu", link: "/signin" },
  { name: "Đăng ký", link: "/signup" },
];

function SearchServicesData() {
  return listServices;
}

export default SearchServicesData;
