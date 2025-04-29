import InnerHeader from "../../../components/InnerHeader";
import { LuUser, LuPhone, LuMail, LuCreditCard, LuCalendar, LuUsers, LuFlag, LuHouse, LuWallet} from "react-icons/lu";
import { useState } from "react";
import InfoItem from "../../../components/InfoItem";
import { Link } from "react-router";
import { useFetchPersonalInfo } from "../../../hooks/useFetchPersonalInfo";
import Spinner from "../../../components/Spinner";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { formatCurrency, getTodayFormatted } from "../../../utils/helpers";
const title = "Thông tin cá nhân";
const PersonalInforBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Thông tin cá nhân", isCurrent: true },
];
function PersonalInfor() {
    const { personalInfo, isLoading, isError, error } = useFetchPersonalInfo();
    if (isLoading) return <Spinner />;
    if (isError) return <p className="text-red-500">{error?.message || "Đã xảy ra lỗi"}</p>;

    const parsedNumber = parsePhoneNumberFromString(personalInfo?.customerProfile?.phoneNumber).country;
    const status = personalInfo?.checkingAccount?.status || "ACTIVE";
    const dateOfBirth = personalInfo?.customerProfile?.dateOfBirth 
        ? new Date(personalInfo.customerProfile.dateOfBirth) 
        : null;
    const statusLabel = 
        status === 'ACTIVE' ? 'Hoạt động' : 
        status === 'INACTIVE' ? 'Không hoạt động' : 
        status === 'SUSPENDED' ? 'Bị đình chỉ' : 
        status === 'CLOSED' ? 'Đã đóng' : 'Chưa xác định';
    const statusColor = 
        status === 'ACTIVE' ? 'bg-green-500' : 
        status === 'INACTIVE' ? 'bg-gray-400' : 
        status === 'SUSPENDED' ? 'bg-yellow-500' : 
        status === 'CLOSED' ? 'bg-red-500' : 'bg-gray-200';
    return (
        <div className="mx-auto p-4">
            <InnerHeader title={title} breadcrumbs={PersonalInforBreadcrumbs} />
            <div className="max-w-6xl mx-auto p-6 border-3 border-[#96C576] rounded-lg flex">
                {/* Left Section */}
                <div className="flex-3/5 flex flex-col justify-start gap-4 mb-6 p-4 border-r-2 border-gray-300">
                    <InfoItem icon={LuUser} label="Họ và tên" value={personalInfo?.customerProfile?.fullName} />
                    <InfoItem icon={LuPhone} label="Số điện thoại" value={personalInfo?.customerProfile?.phoneNumber} />
                    <InfoItem icon={LuMail} label="Email" value={personalInfo?.customerProfile?.email} />
                    <InfoItem icon={LuCreditCard} label="CCCD" value={personalInfo?.customerProfile?.nationalID} />
                    <InfoItem icon={LuCalendar} label="Ngày tháng năm sinh" value={dateOfBirth.toLocaleDateString("en-GB")} />
                    <InfoItem icon={LuUsers} label="Giới tính" value={personalInfo?.customerProfile?.gender === 'male' ? 'Nam' : 'Nữ'} />
                    <InfoItem icon={LuFlag} label="Quốc tịch" value={parsedNumber} />
                    <InfoItem icon={LuHouse} label="Địa chỉ thường trú" value={personalInfo?.customerProfile?.address} />
                </div>

                {/* Right Section */}
                <div className="flex-2/5 flex flex-col justify-start gap-4 mb-6 p-4">
                    <div className="flex flex-col justify-between items-center mb-22">
                        <div className="rounded-full w-30 h-30 flex items-center justify-center mb-3">
                            <img
                                src="/avatar_default.png"
                                alt="avatar"
                                className="w-30"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${statusColor}`}></div>
                            <span className="text-sm">{statusLabel}</span>
                        </div>
                    </div>
                    <InfoItem icon={LuCreditCard} label="Số tài khoản" value={personalInfo?.checkingAccount?.accountNumber} />
                    <InfoItem icon={LuWallet} label="Số dư" value={formatCurrency(personalInfo?.checkingAccount?.balance) + " VND"} />
                    <InfoItem icon={LuCalendar} label="Ngày mở tài khoản" value={getTodayFormatted(personalInfo?.checkingAccount?.dateOpened)} />
                </div>
            </div>
            <div className="w-full bg-[#96C576] hover:bg-white hover:text-[#95C475] text-white font-medium py-3 rounded-md mt-8 transition-colors border-2 flex items-center justify-center">
                <Link
                    to="/customer/personal-infor/update-contact"
                    className="w-full h-full flex items-center justify-center"
                >
                    Thay đổi thông tin cá nhân
                </Link>
            </div>
        </div>
    )
}
export default PersonalInfor;
