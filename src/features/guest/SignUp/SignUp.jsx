import { useState } from "react";
import { useForm } from "react-hook-form";
import useSignUp from "../../../hooks/useSignUp";
import useResetForm from "../../../hooks/useResetForm";
import OtpModal from "../../../components/OTPModal";
import PersonalInfoSection from "./PersonalInformation";
import AccountInfoSection from "./AccountInformation";
import ContactInfoSection from "./ContactInformation";
import { useAuthContext } from "../../../context/AuthContext";
import { Link, Navigate } from "react-router";
import Spinner from "../../../components/Spinner";
function SignUp() {
    const { isAuthenticated, loading: isAuthenticating } = useAuthContext();

    const { registerUser, isCreatingUser, isSuccess } = useSignUp();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        control,
        reset,
        getValues,
    } = useForm();
    useResetForm(isSuccess, reset);
    const [otpModal, setOtpModal] = useState(false);

    const onSubmit = () => {
        // Get current form values
        const data = getValues();
        // Submit directly without re-validation
        registerUser(data);
    };
    const handleRegisterClick = () => {
        // Validate form first
        handleSubmit(() => {
            // Only open OTP modal if validation passes
            setOtpModal(true);
        })();
    };

    if (isAuthenticating) return <Spinner />;
    if (isAuthenticated) {
        return <Navigate to="/customer" replace />;
    }
    const isAgree = watch("isAgree", false);

    return (
        <section className="flex flex-col items-center justify-center px-2 mx-2 my-4 sm:mx-4 md:mx-6 md:my-6 sm:px-4">
            <div className="w-full max-w-4xl p-4 bg-white shadow-lg sm:p-6 md:p-8 rounded-xl shadow-gray-300/60">
                {/* Header */}
                <div className="mb-4 text-center md:mb-8">
                    <h1 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
                        Mở tài khoản 6PBank trực tuyến chỉ trong 1 phút
                    </h1>
                    <p className="text-xs text-gray-700 sm:text-sm">
                        Nếu đã có tài khoản tại 6PBank, vui lòng{" "}
                        <Link
                            to="/signin"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            đăng nhập
                        </Link>
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6 md:space-y-8"
                >
                    {/* Account Information */}
                    <AccountInfoSection
                        register={register}
                        errors={errors}
                        watch={watch}
                    />

                    {/* Personal Information */}
                    <PersonalInfoSection
                        register={register}
                        errors={errors}
                        control={control}
                    />

                    {/* Contact Information */}
                    <ContactInfoSection
                        register={register}
                        errors={errors}
                        control={control}
                    />

                    {/* Terms and Conditions */}
                    <div className="pt-1 md:pt-2">
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="isAgree"
                                className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-0.5"
                                {...register("isAgree", {
                                    required:
                                        "Vui lòng đồng ý với điều khoản sử dụng",
                                })}
                            />
                            <label
                                htmlFor="isAgree"
                                className="ml-2 text-xs text-gray-700 sm:ml-3 sm:text-sm"
                            >
                                Bằng cách tạo tài khoản, tôi đồng ý với{" "}
                                <span className="text-blue-600 underline cursor-pointer">
                                    Điều khoản sử dụng
                                </span>{" "}
                                và{" "}
                                <span className="text-blue-600 underline cursor-pointer">
                                    Chính sách bảo mật
                                </span>
                                .
                            </label>
                        </div>
                        {errors.isAgree && (
                            <p className="mt-1 text-xs text-red-500 sm:text-sm">
                                {errors.isAgree.message}
                            </p>
                        )}
                    </div>

                    {/* Submit button */}
                    <div className="pt-2 md:pt-4">
                        <button
                            type="button"
                            className={`w-full border-2 font-semibold py-2.5 sm:py-3 md:py-3.5 rounded-lg transition duration-200 
                ${
                    isAgree
                        ? "bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700"
                        : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
                }`}
                            disabled={!isAgree}
                            onClick={handleRegisterClick}
                        >
                            {isCreatingUser ? "Đang tạo tài khoản" : "Đăng ký"}
                        </button>
                    </div>
                </form>

                <OtpModal
                    isOpen={otpModal}
                    setIsOpen={setOtpModal}
                    action="register"
                    email={watch("customer.email")}
                    phoneNumber={watch("customer.phoneNumber")}
                    onNextStep={onSubmit}
                />
            </div>
        </section>
    );
}

export default SignUp;
