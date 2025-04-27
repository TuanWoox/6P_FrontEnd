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

    return (
        <div className="w-90 p-3 m-3">
            <div className="inner-homepage fixed min-w-fit ">
                <div className="bg-[#B7DC9D] p-4 rounded-xl w-full flex flex-col items-center h-full shadow-gray-400/50 shadow-lg">
                    <div className="w-full rounded-xl py-3 mb-3 flex flex-col items-center gap-2">
                        <h1 className="text-white text-5xl font-bold">
                            6P Bank
                        </h1>
                        <Logo />
                    </div>

                    {/* User Info */}
                    <div className="bg-[#96C576] rounded-xl p-3 w-full flex flex-col items-center gap-1 mb-6">
                        {isLoading ? (
                            <div className="flex flex-col items-center gap-2">
                                <div className="rounded-full w-20 h-20 bg-gray-300 animate-pulse" />
                                <div className="w-40 h-8 bg-gray-300 rounded animate-pulse" />
                                <div className="w-24 h-5 bg-gray-300 rounded animate-pulse" />
                            </div>
                        ) : (
                            <>
                                <div className="rounded-full w-20 h-20 flex items-center justify-center mb-3">
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
                                    <DocumentDuplicateIcon className="w-5" />
                                </div>
                            </>
                        )}
                    </div>

                    {/* Navigation */}
                    <div className="w-full flex flex-col gap-3">
                        <ButtonSidebar
                            icon={<ArrowsRightLeftIcon className="w-8" />}
                            label="Chuyển tiền"
                            link="customer/transfer"
                        />
                        <ButtonSidebar
                            icon={<BuildingLibraryIcon className="w-8" />}
                            label="Tài khoản"
                            link="account"
                        />
                        <ButtonSidebar
                            icon={<CreditCardIcon className="w-8" />}
                            label="Dịch vụ thẻ"
                            link="card-services"
                        />
                        <ButtonSidebar
                            icon={<WalletIcon className="w-8" />}
                            label="Lịch sử giao dịch"
                            link="customer/transaction"
                        />
                    </div>

                    {/* Logout */}
                    <div className="mt-2 w-full pt-4">
                        <ButtonSidebar
                            icon={
                                <ArrowLeftEndOnRectangleIcon className="w-8" />
                            }
                            label={authLoading ? "Đang đăng xuất" : "Đăng xuất"}
                            link="signout"
                            type="logout"
                            onClick={logout}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
