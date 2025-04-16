import { UserCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import DropDownLink from "./DropDownLink";
import Logo from "./Logo";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const servicesAndProducts = [
  { name: "Cho vay", link: "/loan" },
  { name: "Tiết Kiệm", link: "/saving" },
];

const toolsAndUtilities = [
  { name: "Lãi suất", link: "/" },
  { name: "Tính lịch trả nợ", link: "/loancalculate" },
];

const connectAndSupport = [
  { name: "Liên hệ", link: "/connect-faq/connect" },
  { name: "Câu hỏi thường gặp", link: "/connect-faq/faq" },
];

const User = [
  { name: "Đăng nhập", link: "/signin" },
  { name: "Đăng ký", link: "/signup" },
];

const listServices = [
  { name: "Lãi suất", link: "/" },
  { name: "Tính lịch trả nợ", link: "/loan/loancalculate" },
  { name: "Cho vay", link: "/loan" },
  { name: "Vay tiêu dùng", link: "/loan/loan-consumer" },
  { name: "Vay mua nhà", link: "/loan/loan-mortgage" },
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

function Header() {
  const [tabOpen, setTabOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const removeVietnameseAccents = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const normalizedSearchTerm = removeVietnameseAccents(
        newSearchTerm.toLowerCase()
      );
      const filtered = listServices.filter((service) => {
        const normalizedServiceName = removeVietnameseAccents(
          service.name.toLowerCase()
        );
        return normalizedServiceName.includes(normalizedSearchTerm);
      });
      setSearchResults(filtered);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleResultClick = (link) => {
    navigate(link);
    setSearchTerm("");
    setSearchResults([]);
    setIsSearchFocused(false);
    if (searchContainerRef.current) {
      const inputElement = searchContainerRef.current.querySelector("input");
      inputElement?.blur();
    }
  };

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
      <DropDownLink
        icon={
          <UserCircleIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-all duration-300 ease-in-out" />
        }
        title="Người dùng"
        items={User}
        tabOpen={tabOpen}
        setTabOpen={setTabOpen}
      />

      {/* <a className="ms-auto" href="/signin">
        <UserCircleIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-all duration-300 ease-in-out" />
      </a> */}

      {/* <input
        type="text"
        className="w-56 bg-slate-100 transition-transform duration-300 ease-in-out rounded-full p-2 border-2 border-[#F0F0F0] outline-none ms-auto text-gray-600 focus:scale-105"
        placeholder="Tìm kiếm"
      /> */}

      <div className="relative ms-auto" ref={searchContainerRef}>
        <input
          type="text"
          className="w-56 bg-slate-100 transition-transform duration-300 ease-in-out rounded-full p-2 px-4 border-2 border-[#F0F0F0] outline-none text-gray-600 focus:scale-105 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
        />
        {isSearchFocused && searchTerm && (
          <div className="absolute top-full left-0 right-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-30 max-h-60 overflow-y-auto">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result) => (
                  <li key={result.link + result.name}>
                    <button
                      type="button"
                      onClick={() => handleResultClick(result.link)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    >
                      {result.name}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">
                Không tìm thấy kết quả nào.
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
