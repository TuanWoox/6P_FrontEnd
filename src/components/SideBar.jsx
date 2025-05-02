import {
    ArrowLeftEndOnRectangleIcon,
    ArrowsRightLeftIcon,
    BuildingLibraryIcon,
    CreditCardIcon,
    DocumentDuplicateIcon,
    WalletIcon,
} from "@heroicons/react/16/solid";

import Logo from "../components/Logo";
import ButtonSidebar from "./ButtonSidebar";
import useAuth from "../hooks/useAuth";
import { useFetchSideBar } from "../hooks/useFetchSideBar";
export default function SideBar() {
    const { logout, loading: authLoading } = useAuth();
    const { sidebarData, isLoading, error } = useFetchSideBar();

    const customerName = sidebarData?.fullName;
    const checkingAccount = sidebarData?.checkingAccount;

    function myFunction() {
        const textToCopy = checkingAccount?.accountNumber; // Get the string value

        // Check if there is something to copy
        if (textToCopy) {
            navigator.clipboard
                .writeText(textToCopy)
                .then(() => {
                    // Success! Optionally provide feedback to the user
                    alert("Copied the account number: " + textToCopy);
                })
                .catch((err) => {
                    // Handle errors (e.g., permission denied)
                    console.error("Failed to copy text: ", err);
                    alert("Failed to copy account number."); // Inform the user
                });
        } else {
            // Optional: Handle the case where there's no account number
            alert("No account number available to copy.");
        }
    }

    return (
        <div className="w-90 p-3 m-3 h-screen flex items-center">
            <div className="inner-homepage fixed min-w-fit transition-all duration-500 hover:scale-105">
                <div className="bg-[#B7DC9D] p-4 rounded-xl w-full flex flex-col items-center h-full shadow-gray-400/50 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <div className="w-full rounded-xl py-3 mb-3 flex flex-col items-center gap-2">
                        <h1 className="text-white text-5xl font-bold animate-fadeIn">
                            6P Bank
                        </h1>
                        <div className="animate-spin-slow">
                            <Logo />
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

                                <p className="font-semibold text-white text-4xl mb-1">
                                    {error || !customerName
                                        ? "Lỗi tải tên"
                                        : customerName}
                                </p>

                                <div className="text-white text-xl flex items-center gap-2">
                                    STK:{" "}
                                    {error || !checkingAccount?.accountNumber
                                        ? "Lỗi tải tài khoản"
                                        : checkingAccount.accountNumber}
                                    <DocumentDuplicateIcon
                                        onClick={myFunction}
                                        className="w-5 cursor-pointer hover:text-gray-300"
                                    />
                                </div>

                                <p className="text-white text-xl">
                                    Số dư: {/* This part stays white */}
                                    {error || !checkingAccount?.balance ? (
                                        <span className="text-red-400 animate-pulse">
                                            {" "}
                                            Lỗi tải số dư
                                        </span>
                                    ) : (
                                        <span className="text-gray-900 font-semibold transition-colors duration-300 hover:text-green-600">
                                            {" "}
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
                    <div className="mt-2 w-full pt-4">
                        <ButtonSidebar
                            icon={
                                <ArrowLeftEndOnRectangleIcon className="w-8 transition-transform duration-300 group-hover:rotate-12" />
                            }
                            label={authLoading ? "Đang đăng xuất" : "Đăng xuất"}
                            link="signout"
                            type="logout"
                            onClick={logout}
                            className="group transition-all duration-300 hover:bg-red-400 transform hover:-translate-y-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
