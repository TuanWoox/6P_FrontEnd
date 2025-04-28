import { useForm } from "react-hook-form";
import OtpModal from "../../../components/OTPModal";
import { useState } from "react";
import { identityVerification } from "../../../services/authService";
import  { getCustomerID } from "../../../services/customerService";
function IdentityVerification({ onStepChange }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
  } = useForm();
  const [otpModal, setOtpModal] = useState(false);
  const [isError, setIsError] = useState(false); // Quản lý lỗi
  const [errorMessage, setErrorMessage] = useState(""); // Lưu thông báo lỗi

  const onSubmit = async () => {
    const data = getValues();
    const email = data.customer.email;
    const nationalID = data.customer.nationalID;
    try{
      const customerId = await getCustomerID({ email, nationalID });
      setIsError(false);
      onStepChange(1, customerId); 
      setOtpModal(false);
    } catch (error) {
      setErrorMessage(error.message || "Không tìm thấy người dùng");
      setIsError(true);
    }
  };

  const handleIVerification = () => {
    handleSubmit(async (data) => {
      const email = data.customer.email;
      const nationalID = data.customer.nationalID;
      const fullName = data.customer.fullName;
      try {
        await identityVerification({ fullName, nationalID, email });
        setOtpModal(true);
        setIsError(false); 
      } catch (error) {
        setErrorMessage(error.message || "Không tìm thấy người dùng");
        setIsError(true); 
      }
    })();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-4 max-w-md">
        <div className="mt-4 mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="fullName">
            Họ và tên
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full h-10 bg-gray-200 rounded-xl px-4"
            {...register("customer.fullName", {
              required: "Vui lòng nhập họ và tên",
            })}
          />
          {errors.customer?.fullName && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.customer.fullName.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="nationalID">
            CCCD / CMND
          </label>
          <input
            id="nationalID"
            type="text"
            className="w-full h-10 bg-gray-200 rounded-xl px-4"
            {...register("customer.nationalID", {
              required: "Vui lòng nhập CCCD/CMND",
              pattern: {
                value: /^\d{9}$|^\d{12}$/,
                message: "CCCD/CMND phải có 9 hoặc 12 số",
              },
            })}
          />
          {errors.customer?.nationalID && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.customer.nationalID.message}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email đăng ký
          </label>
          <input
            id="email"
            type="text"
            className="w-full h-10 bg-gray-200 rounded-xl px-4"
            {...register("customer.email", {
              required: "Vui lòng nhập email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email không hợp lệ",
              },
            })}
          />
          {errors.customer?.email && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.customer.email.message}
            </p>
          )}
        </div>
        {isError && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 border border-red-500 rounded-lg mt-4">
            <div className="flex items-start align-middle">
              <div>
                <p className="font-mono">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-[#95C475] hover:bg-white hover:text-[#95C475] hover:border-[#95C475] border-2 text-white py-2 px-6 rounded-full w-1/2"
            onClick={handleIVerification}
          >
            Tiếp tục
          </button>
        </div>
      </form>

      <OtpModal
        isOpen={otpModal}
        setIsOpen={setOtpModal}
        action="resetPassword"
        email={watch("customer.email")}
        onNextStep={onSubmit}
      />
    </>
  );
}

export default IdentityVerification;
