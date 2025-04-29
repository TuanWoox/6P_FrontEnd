import { useForm } from "react-hook-form";
import { useState } from "react";
import useResetPassword from "../../../hooks/useResetPassword";
function ResetPassword({ onStepChange, formData, setResetStatus  }) {
  const { resetPassw, isResettingPassword } = useResetPassword();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
  } = useForm();
  const handleResetPassword = () => {
    const { customerId } = formData;
    handleSubmit(async (data) => {
      try {
        await resetPassw({
          customerId,
          newPassword: data.customer.newPassword,
        });
        setResetStatus("success"); 
        onStepChange(2); 
      } catch (error) {
        setResetStatus("error"); 
      }
    })();
  };
  return (
    <>
      <form  className="w-full p-4 max-w-md">
        <div className="mt-4 mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="newPassword">
            Mật khẩu mới
          </label>
          <input
            id="newPassword"
            type="password"
            className="w-full h-10 bg-gray-200 rounded-xl px-4"
            {...register("customer.newPassword", {
              required: "Vui lòng nhập mật khẩu mới",
              validate: (value) =>
                value !== watch("customer.oldPassword") ||
                "Mật khẩu mới không được giống mật khẩu cũ",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự",
              },
            })}
          />
          {errors.customer?.newPassword && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.customer.newPassword.message}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
            Nhập lại mật khẩu mới
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full h-10 bg-gray-200 rounded-xl px-4"
            {...register("customer.confirmPassword", {
              required: "Vui lòng xác nhận mật khẩu",
              validate: (value) =>
                value === watch("customer.newPassword") || "Mật khẩu không khớp",
            })}
          />
          {errors.customer?.confirmPassword && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.customer.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-[#95C475] hover:bg-white hover:text-[#95C475] hover:border-[#95C475] border-2 text-white py-2 px-6 rounded-full w-1/2"
            onClick={handleResetPassword}
          >
            Tiếp tục
          </button>
        </div>

      </form>
    </>
  )
}
export default ResetPassword