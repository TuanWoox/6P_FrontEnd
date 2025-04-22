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
  const { isAuthenticated, loading: isAuthenticating } = useAuthContext();
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
    setOtpModal(false);
  };

  const handleLogInClick = () => {
    handleSubmit(() => {
      setOtpModal(true);
    })();
  };
  if (isAuthenticating) return <Spinner />;
  if (isAuthenticated) {
    return <Navigate to="/customer" replace />;
  }
  return (
    <div className="flex items-center justify-center p-4 mt-4 mb-4 ">
      <div className="w-full max-w-5xl flex bg-white h-100">
        {/* left */}
        <div className="w-1/2 flex items-center justify-center p-4">
          <DotLottieReact
            src="https://lottie.host/8f909684-69fe-494c-8889-530849977796/c3tqofKscj.lottie"
            loop
            autoplay
          />
        </div>
        {/* right */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-2">Đăng nhập</h2>
          <p className="text-gray-600 mb-6">
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
              <p className="text-red-500 text-sm mt-1">
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
                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                  },
                  validate: async () => {
                    const email = watch("email");
                    const password = watch("password");
                    try {
                      await checkAccount({ email, password });
                      return true;
                    } catch (error) {
                      return error.message || "Không thể kiểm tra tài khoản"; // Default error message if
                    }
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            <div className="mb-4 flex justify-between items-center">
              <button
                disabled={loading}
                type="button"
                className="text-white bg-[#95C475] border-2 px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-white hover:text-[#95C475] hover:border-[#95C475]-2"
                onClick={handleLogInClick}
              >
                <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
                {loading ? "Đang Đăng nhập" : "Đăng nhập"}
              </button>
              <Link
                href="#"
                className="hover:underline text-sm text-[#95C475] "
              >
                Quên mật khẩu?
              </Link>
            </div>
          </form>
          <p className="text-gray-600 text-sm">
            Chưa có tài khoản?{"  "}
            <Link href="/signup" className="text-[#95C475] hover:underline">
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
