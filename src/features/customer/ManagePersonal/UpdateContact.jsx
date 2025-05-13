import InnerHeader from "../../../components/InnerHeader";
import { LuCreditCard, LuUsers, LuFlag } from "react-icons/lu";
import { useState } from "react";
import InfoItem from "../../../components/InfoItem";
import InputField from "../../../components/InputField";
import { useForm } from "react-hook-form";
import OtpModal from "../../../components/OTPModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import Spinner from "../../../components/Spinner";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { isEmailAvailable } from "../../../services/authService";
import { useFetchPersonalInfo } from "../../../hooks/useFetchPersonalInfo";
import useUpdatePersonalInfo from "../../../hooks/useUpdatePersonalInfo";
const title = "Thông tin cá nhân";
const PersonalInforBreadcrumbs = [
    { label: "Trang chủ", path: "/customer", icon: true },
    { label: "Thông tin cá nhân", path: "/customer/personal-infor" },
    {
        label: "Cập nhật thông tin cá nhân",
        path: "/customer/personal-infor/update-contact",
        isCurrent: true,
    }, // Mark the last item as current
];

function UpdateContact() {
    const { personalInfo, isLoading, isError, error } = useFetchPersonalInfo();
    if (isLoading) return <Spinner />;
    if (isError)
        return (
            <p className="text-red-500">{error?.message || "Đã xảy ra lỗi"}</p>
        );
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        watch,
        control,
    } = useForm();
    const [otpModal, setOtpModal] = useState(false);
    const { updateInfo, isUpdating } = useUpdatePersonalInfo();
    const onSubmit = async () => {
        const data = getValues();
        updateInfo(data);
        setOtpModal(false);
    };
    const parsedNumber = parsePhoneNumberFromString(
        personalInfo?.customerProfile?.phoneNumber,
    ).country;
    const handleUpdateContact = () => {
        handleSubmit(async (data) => {
            setOtpModal(true);
        })();
    };
    const dateOfBirth = personalInfo?.customerProfile?.dateOfBirth
        ? new Date(personalInfo.customerProfile.dateOfBirth)
        : null;
    const status = personalInfo?.checkingAccount?.status || "ACTIVE";
    const statusLabel =
        status === "ACTIVE"
            ? "Hoạt động"
            : status === "INACTIVE"
              ? "Không hoạt động"
              : status === "SUSPENDED"
                ? "Bị đình chỉ"
                : status === "CLOSED"
                  ? "Đã đóng"
                  : "Chưa xác định";
    const statusColor =
        status === "ACTIVE"
            ? "bg-green-500"
            : status === "INACTIVE"
              ? "bg-gray-400"
              : status === "SUSPENDED"
                ? "bg-yellow-500"
                : status === "CLOSED"
                  ? "bg-red-500"
                  : "bg-gray-200";
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-4">
                <InnerHeader
                    title={title}
                    breadcrumbs={PersonalInforBreadcrumbs}
                />
                <div className="max-w-6xl mx-auto p-4 md:p-6 border-3 border-[#96C576] rounded-lg flex flex-col md:flex-row gap-4">
                    {/* Left Section */}
                    <div className="md:w-1/2 flex flex-col gap-4 p-4 border-b-2 md:border-b-0 md:border-r-2 border-gray-300">
                        <InfoItem
                            icon={LuCreditCard}
                            label="CCCD"
                            value={personalInfo?.customerProfile?.nationalID}
                        />
                        <InfoItem
                            icon={LuUsers}
                            label="Giới tính"
                            value={
                                personalInfo?.customerProfile?.gender === "male"
                                    ? "Nam"
                                    : "Nữ"
                            }
                        />
                        <InfoItem
                            icon={LuFlag}
                            label="Quốc tịch"
                            value={parsedNumber}
                        />
                        <InputField
                            label="Họ và tên"
                            name="customer.fullName"
                            defaultValue={
                                personalInfo?.customerProfile?.fullName
                            }
                            rules={{ required: "Vui lòng nhập họ và tên" }}
                            control={control}
                            error={errors.customer?.fullName}
                        />
                        <InputField
                            label="Ngày sinh"
                            name="customer.dateOfBirth"
                            type="date"
                            defaultValue={dateOfBirth}
                            rules={{ required: "Vui lòng chọn ngày sinh" }}
                            control={control}
                            error={errors.customer?.dateOfBirth}
                        />
                        <InputField
                            label="Số điện thoại di động"
                            name="customer.phoneNumber"
                            defaultValue={
                                personalInfo.customerProfile?.phoneNumber
                            }
                            rules={{
                                required: "Vui lòng nhập số điện thoại",
                                pattern: {
                                    value: /^(0|\+84)[3|5|7|8|9][0-9]{8}$/,
                                    message: "Số điện thoại không hợp lệ",
                                },
                            }}
                            control={control}
                            error={errors.customer?.phoneNumber}
                            type="phone"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col gap-4 p-4">
                        <div className="flex flex-col items-center">
                            <div className="rounded-full w-24 h-24 flex items-center justify-center mb-3 overflow-hidden">
                                <img
                                    src="/avatar_default.png"
                                    alt="avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-3 h-3 rounded-full ${statusColor}`}
                                ></div>
                                <span className="text-sm">{statusLabel}</span>
                            </div>
                        </div>
                        <InputField
                            label="Địa chỉ thường trú"
                            name="customer.address"
                            defaultValue={
                                personalInfo?.customerProfile?.address
                            }
                            rules={{ required: "Vui lòng nhập địa chỉ" }}
                            control={control}
                            error={errors.customer?.address}
                        />
                        <InputField
                            label="Email"
                            name="customer.email"
                            defaultValue={personalInfo?.customerProfile?.email}
                            rules={{
                                required: "Vui lòng nhập email",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Email không hợp lệ",
                                },
                                validate: async (value) => {
                                    if (
                                        value ===
                                        personalInfo?.customerProfile?.email
                                    )
                                        return true;
                                    if (!value) return true;
                                    try {
                                        await isEmailAvailable(value);
                                        return true;
                                    } catch (error) {
                                        return (
                                            error.message ||
                                            "Không thể kiểm tra email"
                                        );
                                    }
                                },
                            }}
                            control={control}
                            error={errors.customer?.email}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-4">
                    <button
                        type="button"
                        className="bg-[#95C475] hover:bg-white hover:text-[#95C475] hover:border-[#95C475] border-2 text-white py-2 px-6 rounded-2xl w-full md:w-1/2 transition"
                        onClick={handleUpdateContact}
                    >
                        Chấp nhận thay đổi
                    </button>
                </div>
            </form>

            <OtpModal
                isOpen={otpModal}
                setIsOpen={setOtpModal}
                action="updateInfo"
                email={watch("customer.email")}
                onNextStep={onSubmit}
            />
        </>
    );
}

export default UpdateContact;
