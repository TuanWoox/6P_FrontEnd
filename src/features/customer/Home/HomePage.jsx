import {
    MagnifyingGlassIcon,
    BanknotesIcon,
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
        <div className="homepage w-full p-4 md:p-6 lg:p-8">
            {/* Search Form */}
            <form action="" className="mb-5 md:mb-7">
                <div className="relative w-full max-w-xl mx-auto">
                    <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm trong 6P Bank"
                        className="
                            w-full
                            text-base md:text-lg
                            h-10 md:h-12
                            pl-10 pr-4 py-2
                            bg-gray-100
                            rounded-full
                            placeholder-gray-500
                            hover:bg-gray-200
                            focus:outline-none focus:ring-2 focus:ring-[#96C576]
                            transition duration-200
                        "
                    />
                </div>
            </form>

            {/* Hero Banner */}
            <div
                className="
                    w-full 
                    max-w-5xl 
                    h-[200px] sm:h-[250px] md:h-[320px] 
                    mx-auto 
                    bg-cover bg-center 
                    relative 
                    p-4 sm:p-6 md:p-8 
                    rounded-xl md:rounded-2xl 
                    drop-shadow-lg 
                    flex flex-col justify-center
                    mb-6 md:mb-8
                "
                style={{ backgroundImage: "url('/images/innerhomepage.png')" }}
            >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-green-800 text-center">
                    Ngân hàng 6P Bank
                </p>
            </div>

            {/* Banking Services Section */}
            <div className="w-full max-w-5xl mx-auto mt-2 md:mt-4 mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left px-4">
                    Dịch vụ ngân hàng
                </h1>
                <div className="flex flex-wrap justify-center sm:justify-start mt-4 md:mt-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4">
                    <HomeButton
                        link="customer/saving"
                        label={
                            <>
                                Tiền gửi <br /> Tiết kiệm
                            </>
                        }
                        icon={
                            <BanknotesIcon className="text-emerald-500 w-8 sm:w-10" />
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
                            <DocumentTextIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                    <HomeButton
                        link="customer/transfer"
                        label={<>Chuyển tiền</>}
                        icon={
                            <ArrowsRightLeftIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                    <HomeButton
                        link="customer/transaction"
                        label={
                            <>
                                Lịch sử <br /> giao dịch
                            </>
                        }
                        icon={
                            <WalletIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                </div>
            </div>

            {/* Utilities Section */}
            <div className="w-full max-w-5xl mx-auto mt-2 md:mt-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left px-4">
                    Tiện ích cài đặt
                </h1>
                <div className="flex flex-wrap justify-center sm:justify-start mt-4 md:mt-8 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4">
                    <HomeButton
                        link="customer/personal-infor"
                        label={
                            <>
                                Thông tin <br /> Cá nhân
                            </>
                        }
                        icon={
                            <IdentificationIcon className="text-emerald-500 w-8 sm:w-10" />
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
                            <Cog6ToothIcon className="text-emerald-500 w-8 sm:w-10" />
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
                            <AdjustmentsHorizontalIcon className="text-emerald-500 w-8 sm:w-10" />
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
