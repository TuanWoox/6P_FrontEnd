import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import OtpModal from "../../../components/OTPModal";
import { useAuthContext } from "../../../context/AuthContext";
import Spinner from "../../../components/Spinner";
import { checkAccount } from "../../../services/authService";
function SignIn() {
    const { login, loading } = useAuth();
    const { isAuthenticated } = useAuthContext();
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        watch,
    } = useForm();
    const [otpModal, setOtpModal] = useState(false);

    const onNextStep = () => {
        const data = getValues();
        login(data);
    };

    const handleLogInClick = () => {
        handleSubmit(() => {
            setOtpModal(true);
        })();
    };

    if (isAuthenticated) {
        return <Navigate to="/customer" replace />;
    }
    return (
        <div className="flex items-center justify-center p-4 mt-4 mb-4">
            <div className="flex flex-col w-full max-w-5xl overflow-hidden bg-white rounded-lg md:flex-row">
                {/* left */}
                <div className="flex items-center justify-center hidden w-full p-4 md:w-1/2 md:p-6 lg:p-8 md:flex">
                    <DotLottieReact
                        src="https://lottie.host/8f909684-69fe-494c-8889-530849977796/c3tqofKscj.lottie"
                        loop
                        autoplay
                        className="w-full h-auto"
                    />
                </div>
                {/* right */}
                <div className="w-full p-6 md:w-1/2 md:p-8">
                    <h2 className="mb-2 text-xl font-bold md:text-2xl">
                        Đăng nhập
                    </h2>
                    <p className="mb-6 text-sm text-gray-600 md:text-base">
                        Vui lòng nhập email và mật khẩu để đăng nhập
                    </p>
                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Email or Phone Number"
                                className="w-full border-0 border-b-2 border-gray-300 focus:border-[#95C475] focus:outline-none py-2 placeholder-gray-400"
                                {...register("email", {
                                    required: "Vui lòng nhập email",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Email không hợp lệ",
                                    },
                                })}
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                        <div className="mb-6">
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                className="w-full border-0 border-b-2 border-gray-300 focus:border-[#95C475] focus:outline-none py-2 placeholder-gray-400"
                                {...register("password", {
                                    required: "Vui lòng nhập mật khẩu",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Mật khẩu phải có ít nhất 6 ký tự",
                                    },
                                    validate: async () => {
                                        const email = watch("email");
                                        const password = watch("password");
                                        try {
                                            await checkAccount({
                                                email,
                                                password,
                                            });
                                            return true;
                                        } catch (error) {
                                            return (
                                                error.message ||
                                                "Không thể kiểm tra tài khoản"
                                            ); // Default error message if
                                        }
                                    },
                                })}
                            />
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.password.message}
                            </p>
                        )}

                        <div className="flex flex-col items-center justify-between gap-4 mb-4 sm:flex-row sm:gap-0">
                            <button
                                disabled={loading}
                                type="button"
                                className="text-white bg-[#95C475] border-2 border-[#95C475] px-4 sm:px-6 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-[#95C475] transition-colors duration-300 w-full sm:w-auto"
                                onClick={handleLogInClick}
                            >
                                <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
                                <span>
                                    {loading ? "Đang Đăng nhập" : "Đăng nhập"}
                                </span>
                            </button>
                            <Link
                                to="/forget-password"
                                className="hover:underline text-sm text-[#95C475] w-full sm:w-auto text-center sm:text-right"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600 sm:text-left">
                        Chưa có tài khoản?{"  "}
                        <Link
                            to="/signup"
                            className="text-[#95C475] hover:underline font-medium"
                        >
                            Đăng ký ngay
                        </Link>
                    </p>
                </div>
            </div>
            <OtpModal
                isOpen={otpModal}
                setIsOpen={setOtpModal}
                action="logIn"
                email={watch("email")}
                onNextStep={onNextStep}
            />
        </div>
    );
}

export default SignIn;
