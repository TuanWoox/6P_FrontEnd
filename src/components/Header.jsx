import { UserCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import DropDownLink from "./DropDownLink";
import Logo from "./Logo";
import { useState } from "react";

const servicesAndProducts = [
  { name: "Cho vay", link: "/loan" },
  { name: "Tiết Kiệm", link: "/saving" },
];

const toolsAndUtilities = [
  { name: "Lãi suất", link: "/" },
  { name: "Tích lịch trả nợ", link: "/loancalculate" },
];

const connectAndSupport = [
  { name: "Liên hệ", link: "/" },
  { name: "Câu hỏi thường gặp", link: "/faq" },
];

function Header() {
  const [tabOpen, setTabOpen] = useState(null);

  return (
    <header className="w-full flex flex-row justify-between items-center p-4 bg-white border-b-2 border-[#F0F0F0] shadow-md relative z-20">
      <Logo />
      <DropDownLink
        title="Sản phẩm & Dịch vụ"
        items={servicesAndProducts}
        tabOpen={tabOpen}
        setTabOpen={setTabOpen}
      />
      <DropDownLink
        title="Công cụ & Tiện ích"
        items={toolsAndUtilities}
        tabOpen={tabOpen}
        setTabOpen={setTabOpen}
      />
      <DropDownLink
        title="Liên hệ & Hỗ trợ"
        items={connectAndSupport}
        tabOpen={tabOpen}
        setTabOpen={setTabOpen}
      />
      <a className="ms-auto">
        <UserCircleIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-all duration-300 ease-in-out" />
      </a>
      <input
        type="text"
        className="w-56 bg-slate-100 transition-transform duration-300 ease-in-out rounded-full p-2 border-2 border-[#F0F0F0] outline-none ms-auto text-gray-600 focus:scale-105"
        placeholder="Tìm kiếm"
      />
    </header>
  );
}

export default Header;
