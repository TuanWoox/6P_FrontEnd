import FooterLink from "./FooterLink";
import Logo from "./Logo";

const servicesAndProducts = [
    { name: "Cho vay", link: "/loan" },
    { name: "Tiết Kiệm", link: "/saving" },
];

const toolsAndUtilities = [
    { name: "Lãi suất", link: "/" },
    { name: "Tích lịch trả nợ", link: "/" },
];

const connectAndSupport = [
    { name: "Liên hệ", link: "/" },
    { name: "Câu hỏi thường gặp", link: "/faq" },
];
function Footer() {
    return (
        <footer className="bg-white shadow-[0_-2px_6px_rgba(0,0,0,0.06)] py-8 px-4 md:px-16 text-gray-600">
            <div className="w-full mx-auto flex justify-around items-center gap-8 text-center md:text-left">
                <div>
                    <Logo to="/" />
                </div>
                <FooterLink
                    items={servicesAndProducts}
                    title="Sản phẩm và dịch vụ"
                />
                <FooterLink
                    items={toolsAndUtilities}
                    title="Công cụ & Tiện ích"
                />
                <FooterLink
                    items={connectAndSupport}
                    title="Liên hệ & Hỗ trợ"
                />
            </div>

            <div className="mt-10 text-center text-xs text-gray-400">
                &copy; {new Date().getFullYear()} Ngân hàng 6P BANK. All rights
                reserved.
            </div>
        </footer>
    );
}

export default Footer;
