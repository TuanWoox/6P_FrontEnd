import { useForm } from "react-hook-form";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import useChangePassword from "../../../hooks/useChangePassword";
import OtpModal from "../../../components/OTPModal";
import { useState, useEffect } from "react";
import { getEmail } from "../../../services/customerService";
import ChangePasswordInput from "./ChangePasswordInput";
import InnerHeader from "../../../components/InnerHeader";

function ChangePassword() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset,
    } = useForm();

    const [otpModal, setOtpModal] = useState(false);
    const [formData, setFormData] = useState(null);
    const [userEmail, setUserEmail] = useState("");

    const { changePassword, isSubmitting } = useChangePassword();

    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const emailData = await getEmail();
                setUserEmail(emailData.email);
            } catch (error) {
                // console.error("Lỗi truy xuất Email:", error);
            }
        };
        fetchEmail();
    }, []);

    const handleChangePasswordClick = () => {
        handleSubmit((data) => {
            setFormData(data);
            setOtpModal(true);
        })();
    };

    const onNextStep = async () => {
        if (formData) {
            const success = await changePassword(
                formData.oldPassword,
                formData.newPassword,
            );
            if (success) {
                reset();
            } else {
                reset({ oldPassword: "" });
            }
            setFormData(null);
            setOtpModal(false);
        }
    };
    const title = "Cài đặt mật khẩu";
    const breadcrumbs = [
        { label: "Trang chủ", path: "/customer", icon: true },
        { label: "Cài đặt mật khẩu", isCurrent: true },
    ];
    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <InnerHeader title={title} breadcrumbs={breadcrumbs} />

            <div className="bg-gray-100 p-4 mb-6 rounded-md text-sm">
                <p>
                    Mật khẩu truy cập phải đủ từ 6 kí tự và không được trùng với
                    mật khẩu cũ. Vui lòng không sử dụng các thông tin cá nhân
                    như tên, ngày sinh, số điện thoại làm mật khẩu.
                </p>
            </div>

            <div className="bg-gray-100 p-4 mb-6 rounded-md text-sm">
                <form className="space-y-4">
                    <ChangePasswordInput
                        register={register}
                        errors={errors}
                        placeholder="Mật khẩu hiện tại"
                        required="Vui lòng nhập mật khẩu hiện tại"
                        name="oldPassword"
                        validation={{
                            minLength: {
                                value: 6,
                                message: "Mật khẩu phải có ít nhất 6 ký tự",
                            },
                        }}
                    />

                    <ChangePasswordInput
                        register={register}
                        errors={errors}
                        placeholder="Mật khẩu mới"
                        required="Vui lòng nhập mật khẩu mới"
                        name="newPassword"
                        validation={{
                            minLength: {
                                value: 6,
                                message: "Mật khẩu phải có ít nhất 6 ký tự",
                            },
                            validate: (value) =>
                                value !== watch("oldPassword") ||
                                "Mật khẩu mới không được trùng với mật khẩu hiện tại",
                        }}
                    />

                    <ChangePasswordInput
                        register={register}
                        errors={errors}
                        placeholder="Xác nhận mật khẩu mới"
                        required="Vui lòng xác nhận mật khẩu mới"
                        name="confirmNewPassword"
                        validation={{
                            validate: (value) =>
                                value === watch("newPassword") ||
                                "Mật khẩu mới không khớp",
                        }}
                    />

                    <div className="mb-4 flex justify-between items-center">
                        <button
                            disabled={isSubmitting}
                            type="button"
                            className="text-white bg-[#95C475] border-2 px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-white hover:text-[#95C475] hover:border-[#95C475]-2 transition duration-300"
                            onClick={handleChangePasswordClick}
                        >
                            <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
                            {isSubmitting
                                ? "Đang xử lý..."
                                : "Thay đổi mật khẩu"}
                        </button>
                    </div>
                </form>
            </div>

            <OtpModal
                isOpen={otpModal}
                setIsOpen={setOtpModal}
                action="change-password"
                email={userEmail}
                onNextStep={onNextStep}
            />
        </div>
    );
}

export default ChangePassword;
