import { ArrowLeftEndOnRectangleIcon, ArrowsRightLeftIcon, BuildingLibraryIcon, CreditCardIcon, DocumentDuplicateIcon, WalletIcon } from "@heroicons/react/16/solid";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import ButtonSidebar from "./ButtonSidebar";

function SideBar() {
    return ( 
        <div className=" w-90 p-3 m-3 ">
            <div className="inner-homepage">
                {/* Green sidebar container */}
                <div className="bg-[#B7DC9D] p-4 rounded-xl w-full flex flex-col items-center h-full">
                {/* VFB Logo */}
                <div className=" w-full rounded-xl py-3 mb-3 flex flex-col items-center gap-2">
                    <h1 className="text-white text-5xl font-bold">6P Bank</h1>
                    <Logo />
                </div>
                
                {/* User Info */}
                <div className="bg-[#96C576] rounded-xl p-3 w-full flex flex-col items-center gap-1 mb-6">
                    <div className="rounded-full w-20 h-20 flex items-center justify-center mb-3">
                    <img
                        src="/avatar_default.png"
                        alt="avatar"
                        className="w-20"
                    />
                    </div>
                    <p className="font-semibold text-white text-4xl mb-1">Tran Trung Tin</p>
                    <div className="text-white text-xl flex items-center gap-2">
                    STK: 01234567
                    <DocumentDuplicateIcon className="w-5" />
                    </div>
                </div>

                {/* Navigation */}
                <div className="w-full flex flex-col gap-3">
                    <ButtonSidebar icon={<ArrowsRightLeftIcon className="w-8" />} label="Chuyển tiền" link="transfer" />
                    <ButtonSidebar icon={<BuildingLibraryIcon className="w-8" />} label="Tài khoản" link="account" />
                    <ButtonSidebar icon={<CreditCardIcon className="w-8" />} label="Dịch vụ thẻ" link="card-services" />
                    <ButtonSidebar icon={<WalletIcon className="w-8" />} label="Lịch sử giao dịch" link="transaction-history" />
                    
                </div>

                {/* Logout button */}
                <div className="mt-2 w-full pt-4">
                    <ButtonSidebar icon={<ArrowLeftEndOnRectangleIcon className="w-8" />} label="Đăng xuất" link="signout" type="logout" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;