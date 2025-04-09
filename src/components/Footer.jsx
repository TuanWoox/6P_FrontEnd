import FooterLink from "./FooterLink";
import Logo from "./Logo";

const servicesAndProducts = [
  { name: "Cho vay", link: "/cho-vay" },
  { name: "Tiết Kiệm", link: "/tiet-kiem" },
];

const toolsAndUtilities = [
  { name: "Lãi suất", link: "/lai-suat" },
  { name: "Tích lịch trả nợ", link: "/lich-tra-no" },
];

const connectAndSupport = [
  { name: "Liên hệ", link: "/lien-he" },
  { name: "Câu hỏi thường gặp", link: "/faq" },
];
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 md:px-16 text-gray-600">
      <div className="w-full mx-auto flex justify-around items-center gap-8 text-center md:text-left">
        <div>
          <Logo />
        </div>
        <FooterLink items={servicesAndProducts} title="Sản phẩm và dịch vụ" />
        <FooterLink items={toolsAndUtilities} title="Công cụ & Tiện ích" />
        <FooterLink items={connectAndSupport} title="Công cụ & Tiện ích" />
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Ngân hàng 6P BANK. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
