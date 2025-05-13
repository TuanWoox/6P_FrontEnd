import { UserCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import DropDownLink from "./DropDownLink";
import Logo from "./Logo";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const servicesAndProducts = [
    { name: "Cho vay", link: "/loan" },
    { name: "Tiết Kiệm", link: "/saving" },
];

const toolsAndUtilities = [
    { name: "Lãi suất", link: "/saving/saving-interest" },
    { name: "Tính lịch trả nợ", link: "/loan/loancalculate" },
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const desktopSearchRef = useRef(null);
    const mobileSearchRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthContext();

    useEffect(() => {
        function handleClickOutside(event) {
            // Check if clicked outside of both search containers
            const clickedOutsideDesktopSearch =
                desktopSearchRef.current &&
                !desktopSearchRef.current.contains(event.target);
            const clickedOutsideMobileSearch =
                mobileSearchRef.current &&
                !mobileSearchRef.current.contains(event.target);

            if (clickedOutsideDesktopSearch && clickedOutsideMobileSearch) {
                setIsSearchFocused(false);
            }

            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                !event.target.closest(".mobile-menu-button")
            ) {
                setMobileMenuOpen(false);
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
                newSearchTerm.toLowerCase(),
            );
            const filtered = listServices.filter((service) => {
                const normalizedServiceName = removeVietnameseAccents(
                    service.name.toLowerCase(),
                );
                return normalizedServiceName.includes(normalizedSearchTerm);
            });
            setSearchResults(filtered);
        }
    };

    const handleSearchFocus = () => {
        setIsSearchFocused(true);
    };

    const handleSearchResultClick = (link) => {
        console.log("Clicked link:", link);
        navigate(link);
        setSearchTerm("");
        setSearchResults([]);
        setIsSearchFocused(false);
        setMobileMenuOpen(false);

        // Blur both search inputs
        const desktopInput = desktopSearchRef.current?.querySelector("input");
        const mobileInput = mobileSearchRef.current?.querySelector("input");
        desktopInput?.blur();
        mobileInput?.blur();
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="w-full flex flex-row justify-between items-center p-2 sm:p-4 bg-white border-b-2 border-[#F0F0F0] shadow-md relative z-20">
            <Logo to="/" className="z-30" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-4">
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
            </div>

            {/* Desktop User and Search */}
            <div className="hidden md:flex md:items-center md:space-x-2">
                {isAuthenticated ? (
                    <Link
                        to="/customer"
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white rounded-full border border-gray-200 shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
                    >
                        <UserCircleIcon className="w-5 h-5 text-gray-600" />
                        <span className="font-medium">Trang cá nhân</span>
                    </Link>
                ) : (
                    <DropDownLink
                        icon={
                            <UserCircleIcon className="w-6 h-6 text-gray-600 transition-all duration-300 ease-in-out hover:text-gray-800" />
                        }
                        title="Người dùng"
                        items={User}
                        tabOpen={tabOpen}
                        setTabOpen={setTabOpen}
                        className="px-4 py-2"
                    />
                )}

                <div className="relative" ref={desktopSearchRef}>
                    <input
                        type="text"
                        className="w-40 lg:w-56 bg-slate-100 transition-transform duration-300 ease-in-out rounded-full p-2 px-4 border-2 border-[#F0F0F0] outline-none text-gray-600 focus:scale-105 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tìm kiếm..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onFocus={handleSearchFocus}
                    />
                    {isSearchFocused && searchTerm && (
                        <div className="absolute left-0 right-0 z-30 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg top-full max-h-60">
                            {searchResults.length > 0 ? (
                                <ul>
                                    {searchResults.map((result) => (
                                        <li key={result.link + result.name}>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleSearchResultClick(
                                                        result.link,
                                                    )
                                                }
                                                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
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
            </div>

            {/* Mobile Menu Button */}
            <button
                className="z-30 flex items-center ml-auto text-gray-600 md:hidden mobile-menu-button focus:outline-none"
                onClick={toggleMobileMenu}
            >
                {mobileMenuOpen ? (
                    <XMarkIcon className="w-6 h-6" />
                ) : (
                    <Bars3Icon className="w-6 h-6" />
                )}
            </button>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`fixed inset-0 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden`}
            >
                <div className="flex flex-col h-full p-4 pt-16">
                    <div className="mb-4">
                        <div className="relative" ref={mobileSearchRef}>
                            <input
                                type="text"
                                className="w-full bg-slate-100 rounded-full p-2 px-4 border-2 border-[#F0F0F0] outline-none text-gray-600 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Tìm kiếm..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onFocus={handleSearchFocus}
                            />
                            {isSearchFocused && searchTerm && (
                                <div className="absolute left-0 right-0 z-30 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg top-full max-h-60">
                                    {searchResults.length > 0 ? (
                                        <ul>
                                            {searchResults.map((result) => (
                                                <li
                                                    key={
                                                        result.link +
                                                        result.name
                                                    }
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleSearchResultClick(
                                                                result.link,
                                                            )
                                                        }
                                                        className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
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
                    </div>

                    <div className="flex-grow space-y-4 overflow-y-auto">
                        <div className="pb-2 border-b">
                            <h3 className="mb-2 font-medium text-gray-800">
                                Sản phẩm & Dịch vụ
                            </h3>
                            <ul className="space-y-2">
                                {servicesAndProducts.map((item) => (
                                    <li key={item.link}>
                                        <Link
                                            to={item.link}
                                            className="block px-2 py-1 text-gray-600 rounded hover:text-gray-900 hover:bg-gray-100"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pb-2 border-b">
                            <h3 className="mb-2 font-medium text-gray-800">
                                Công cụ & Tiện ích
                            </h3>
                            <ul className="space-y-2">
                                {toolsAndUtilities.map((item) => (
                                    <li key={item.link}>
                                        <Link
                                            to={item.link}
                                            className="block px-2 py-1 text-gray-600 rounded hover:text-gray-900 hover:bg-gray-100"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pb-2 border-b">
                            <h3 className="mb-2 font-medium text-gray-800">
                                Liên hệ & Hỗ trợ
                            </h3>
                            <ul className="space-y-2">
                                {connectAndSupport.map((item) => (
                                    <li key={item.link}>
                                        <Link
                                            to={item.link}
                                            className="block px-2 py-1 text-gray-600 rounded hover:text-gray-900 hover:bg-gray-100"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-2 font-medium text-gray-800">
                                Tài khoản
                            </h3>
                            <ul className="space-y-2">
                                {isAuthenticated ? (
                                    <li>
                                        <Link
                                            to="/customer"
                                            className="block px-2 py-1 text-gray-600 rounded hover:text-gray-900 hover:bg-gray-100"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            Tài khoản của tôi
                                        </Link>
                                    </li>
                                ) : (
                                    User.map((item) => (
                                        <li key={item.link}>
                                            <Link
                                                to={item.link}
                                                className="block px-2 py-1 text-gray-600 rounded hover:text-gray-900 hover:bg-gray-100"
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
