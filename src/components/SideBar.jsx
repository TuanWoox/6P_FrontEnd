import {
    ArrowLeftEndOnRectangleIcon,
    DocumentDuplicateIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import ButtonSidebar from "./ButtonSidebar";
import useAuth from "../hooks/useAuth";
import { useFetchSideBar } from "../hooks/useFetchSideBar";

export default function SideBar() {
    const { logout, loading: authLoading } = useAuth();
    const { sidebarData, isLoading, error } = useFetchSideBar();
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const customerName = sidebarData?.fullName;
    const checkingAccount = sidebarData?.checkingAccount;

    // Check if the device is mobile or tablet
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width <= 1024);

            // Auto-close sidebar on tablet when resizing
            if (width >= 768 && width <= 1024) {
                setIsOpen(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Close sidebar when clicking outside
    useEffect(() => {
        if (!isMobile && !isTablet) return;

        const handleClickOutside = (event) => {
            if (
                isOpen &&
                !event.target.closest(".sidebar-container") &&
                !event.target.closest(".menu-toggle")
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, isMobile, isTablet]);

    function copyAccountNumber() {
        const textToCopy = checkingAccount?.accountNumber;
        if (textToCopy) {
            navigator.clipboard
                .writeText(textToCopy)
                .then(() => {
                    setCopySuccess(true);
                    setTimeout(() => setCopySuccess(false), 2000);
                })
                .catch(() => alert("Failed to copy account number."));
        } else {
            alert("No account number available to copy.");
        }
    }

    // Determine if we should show the toggle button (for both mobile and tablet)
    const showToggleButton = isMobile || isTablet;

    return (
        <>
            {/* Menu Toggle Button for both Mobile and Tablet */}
            {showToggleButton && (
                <button
                    className="fixed top-4 left-4 z-50 p-2 bg-[#96C576] rounded-lg shadow-md menu-toggle flex items-center justify-center"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6 text-white" />
                    ) : (
                        <Bars3Icon className="w-6 h-6 text-white" />
                    )}
                </button>
            )}

            {/* Backdrop overlay for both Mobile and Tablet */}
            {(isMobile || isTablet) && (
                <div
                    className={`fixed inset-0 bg-opacity-50 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300 ease-in-out ${
                        isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    }`}
                />
            )}

            {/* Sidebar */}
            <div
                className={`sidebar-container fixed top-0 left-0 h-screen z-40 transform transition-transform duration-300 ease-in-out
                ${
                    isMobile || isTablet
                        ? isOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                        : "translate-x-0"
                }`}
            >
                <div className="w-90 p-3 m-3 h-screen flex items-center">
                    <div className="inner-homepage min-w-full transition-all duration-500">
                        <div className="bg-[#B7DC9D] p-4 rounded-xl w-full flex flex-col items-center h-full shadow-lg transition-shadow duration-300 hover:shadow-xl">
                            {/* Header */}
                            <div className="w-full rounded-xl py-3 mb-3 flex flex-col items-center gap-2">
                                <h1 className="text-white text-5xl font-bold animate-fadeIn">
                                    6P Bank
                                </h1>
                                <div className="animate-spin-slow">
                                    <Logo to="customer" />
                                </div>
                            </div>

                            {/* User Info */}
                            <div className="bg-[#96C576] rounded-xl p-3 w-full flex flex-col items-center gap-1 mb-6 transition-all duration-300 hover:bg-[#8ABF6A]">
                                {isLoading ? (
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="rounded-full w-20 h-20 bg-gray-300 animate-pulse" />
                                        <div className="w-40 h-8 bg-gray-300 rounded animate-pulse" />
                                        <div className="w-24 h-5 bg-gray-300 rounded animate-pulse" />
                                    </div>
                                ) : (
                                    <>
                                        <div className="rounded-full w-20 h-20 flex items-center justify-center mb-3 transform transition-transform duration-500 hover:scale-110">
                                            <img
                                                src="/avatar_default.png"
                                                alt="avatar"
                                                className="w-20"
                                            />
                                        </div>

                                        <p className="font-semibold text-white text-3xl mb-1 text-center">
                                            {error || !customerName
                                                ? "Lỗi tải tên"
                                                : customerName}
                                        </p>

                                        <div className="text-white text-xl flex items-center gap-2 relative">
                                            STK:{" "}
                                            <span className="max-w-36 truncate">
                                                {error ||
                                                !checkingAccount?.accountNumber
                                                    ? "Lỗi tải tài khoản"
                                                    : checkingAccount.accountNumber}
                                            </span>
                                            <div className="relative">
                                                <DocumentDuplicateIcon
                                                    onClick={copyAccountNumber}
                                                    className="w-5 cursor-pointer hover:text-gray-300"
                                                />
                                                {copySuccess && (
                                                    <div className="absolute -top-8 -right-2 bg-green-800 text-white text-xs px-2 py-1 rounded shadow">
                                                        Copied!
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-white text-lg">
                                            Số dư:{" "}
                                            {error ||
                                            !checkingAccount?.balance ? (
                                                <span className="text-red-400 animate-pulse">
                                                    Lỗi tải số dư
                                                </span>
                                            ) : (
                                                <span className="text-gray-900 font-semibold transition-colors duration-300 hover:text-green-600">
                                                    {checkingAccount.balance.toLocaleString(
                                                        "vi-VN",
                                                    )}{" "}
                                                    VND
                                                </span>
                                            )}
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Logout */}
                            <div className="mt-auto w-full pt-4">
                                <ButtonSidebar
                                    icon={
                                        <ArrowLeftEndOnRectangleIcon className="w-8 transition-transform duration-300 group-hover:rotate-12" />
                                    }
                                    label={
                                        authLoading
                                            ? "Đang đăng xuất"
                                            : "Đăng xuất"
                                    }
                                    link="signout"
                                    type="logout"
                                    onClick={() => {
                                        setIsOpen(false);
                                        logout();
                                    }}
                                    className="group transition-all duration-300 hover:bg-red-400 transform hover:-translate-y-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content spacer - only show on desktop */}
            {!isMobile && !isTablet && (
                <div className="w-96" /> // Space only for desktop view
            )}
        </>
    );
}
