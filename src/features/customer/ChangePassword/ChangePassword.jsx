import { useForm } from "react-hook-form";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import useChangePassword from "../../../hooks/useChangePassword";
import OtpModal from "../../../components/OTPModal";
import { useState, useEffect } from "react";
import { getEmail } from "../../../services/customerService";

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
        console.error("Lỗi truy xuất Email:", error);
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
        formData.newPassword
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

  return (
    <div className="max-w mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Cài đặt mật khẩu</h1>

      <nav className="flex text-sm mb-6">
        <a href="/customer" className="text-gray-600 hover:text-gray-800">
          Trang chủ
        </a>
        <span className="mx-2 text-gray-500">&gt;</span>
        <span className="text-gray-800 font-medium">Đặt mật khẩu</span>
      </nav>

      <div className="bg-gray-100 p-4 mb-6 rounded-md text-sm">
        <p>
          Mật khẩu truy cập phải đủ từ 8 đến 20 kí tự và không có dấu cách
          (khoảng trống) bao gồm ít nhất 1 kí tự hoa (A, B, C, ... Z), 1 kí tự
          thường (a, b, c, ... z), 1 kí tự số (0,1,2 ... 9), 1 kí tự đặc biệt
          (@, #, $, % ...)
        </p>
      </div>

      <div className="bg-gray-100 p-4 mb-6 rounded-md text-sm">
        <form className="space-y-4">
          <div className="ralative">
            <input
              type="password"
              placeholder="Mật khẩu hiện tại"
              className="w-full border-0 border-b-2 border-gray-300 focus:border-[#95C475] focus:outline-none py-2 placeholder-gray-400"
              {...register("oldPassword", {
                required: "Vui lòng nhập mật khẩu hiện tại",
                minLength: {
                  value: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự",
                },
              })}
            />
            {errors.oldPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Mật khẩu mới"
              className="w-full border-0 border-b-2 border-gray-300 focus:border-[#95C475] focus:outline-none py-2 placeholder-gray-400"
              {...register("newPassword", {
                required: "Vui lòng nhập mật khẩu mới",
                minLength: {
                  value: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự",
                },
              })}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Xác nhận mật khẩu mới"
              className="w-full border-0 border-b-2 border-gray-300 focus:border-[#95C475] focus:outline-none py-2 placeholder-gray-400"
              {...register("confirmNewPassword", {
                required: "Vui lòng xác nhận mật khẩu mới",
                validate: (value) =>
                  value === watch("newPassword") || "Mật khẩu không khớp",
              })}
            />
            {errors.confirmNewPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmNewPassword.message}
              </p>
            )}
          </div>

          <div className="mb-4 flex justify-between items-center">
            <button
              disabled={isSubmitting}
              type="button"
              className="text-white bg-[#95C475] border-2 px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-white hover:text-[#95C475] hover:border-[#95C475]-2 transition duration-300"
              onClick={handleChangePasswordClick}
            >
              <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
              {isSubmitting ? "Đang xử lý..." : "Thay đổi mật khẩu"}
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
