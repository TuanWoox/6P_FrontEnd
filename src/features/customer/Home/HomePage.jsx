import {
    MagnifyingGlassIcon,
    DevicePhoneMobileIcon,
    BanknotesIcon,
    CurrencyDollarIcon,
    DocumentTextIcon,
    Cog6ToothIcon,
    ArrowsRightLeftIcon,
    WalletIcon,
    AdjustmentsHorizontalIcon,
    IdentificationIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router";
import HomeButton from "./HomeButton/HomeButton";

function HomePage() {
    return (
        <div className="homepage">
            <form action="" className="mb-7">
                <div className="relative w-full max-w-2xl mx-auto">
                    <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm trong 6P Bank"
                        className="
    w-full
    text-lg
    h-12
    pl-10 pr-4 py-2
    bg-gray-100
    rounded-full
    placeholder-gray-500
    hover:bg-gray-200
    focus:outline-none focus:ring-3 focus:ring-[#96C576]
    transition duration-200
    "
                    />
                </div>
            </form>

            <div
                className="w-full max-w-5xl h-[320px] mx-auto bg-cover bg-center relative p-15 rounded-2xl drop-shadow-lg flex flex-col justify-center"
                style={{ backgroundImage: "url('/images/innerhomepage.png')" }}
            >
                <p className="text-5xl font-semibold text-green-800">
                    Ngân hàng 6P Bank
                </p>
            </div>

            <div className="w-full max-w-5xl p-4 mx-auto mt-4">
                <h1 className="text-3xl font-semibold">Dịch vụ ngân hàng</h1>
                <div className="flex mt-10 gap-35">
                    <HomeButton
                        link="customer/saving"
                        label={
                            <>
                                Tiền gửi <br /> Tiết kiệm
                            </>
                        }
                        icon={
                            <BanknotesIcon className="text-emerald-500 w-15" />
                        }
                    />
                    <HomeButton
                        link="customer/loan"
                        label={
                            <>
                                Danh sách <br /> vay
                            </>
                        }
                        icon={
                            <DocumentTextIcon className="text-emerald-500 w-15" />
                        }
                    />
                    <HomeButton
                        link="customer/transfer"
                        label={<>Chuyển tiền</>}
                        icon={
                            <ArrowsRightLeftIcon className="text-emerald-500 w-15" />
                        }
                    />
                    <HomeButton
                        link="customer/transaction"
                        label={
                            <>
                                Lịch sử <br /> giao dịch
                            </>
                        }
                        icon={<WalletIcon className="text-emerald-500 w-15" />}
                    />
                </div>
            </div>

            <div className="w-full max-w-5xl p-4 mx-auto mt-4">
                <h1 className="text-3xl font-semibold">Tiện ích cài đặt</h1>
                <div className="flex mt-10 gap-35">
                    <HomeButton
                        link="customer/personal-infor"
                        label={
                            <>
                                Thông tin <br /> Cá nhân
                            </>
                        }
                        icon={
                            <IdentificationIcon className="text-emerald-500 w-15" />
                        }
                    />
                    <HomeButton
                        link="customer/change-password"
                        label={
                            <>
                                Cài đặt <br /> mật khẩu
                            </>
                        }
                        icon={
                            <Cog6ToothIcon className="text-emerald-500 w-15" />
                        }
                    />
                    <HomeButton
                        link="customer/set-limit"
                        label={
                            <>
                                Cài đặt <br /> Hạn mức
                            </>
                        }
                        icon={
                            <AdjustmentsHorizontalIcon className="text-emerald-500 w-15" />
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
