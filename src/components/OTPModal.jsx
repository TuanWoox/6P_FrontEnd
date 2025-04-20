import React, { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import useOTPService from "../hooks/useOTPService";
import useVerifyOTP from "../hooks/useVerifyOTP";

const OtpModal = ({ isOpen, setIsOpen, action, email, onNextStep }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const {
    triggerOTPService,
    isLoading: isSendingOTP,
    isSuccess,
    error,
  } = useOTPService(action);
  const { verifyingOTP, isVerifyingLoading, isVerifyingSuccess, verifyError } =
    useVerifyOTP();

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (isOpen) {
      triggerOTPService({ email });
    }
  }, [isOpen]); // Add isOpen to the dependency array

  useEffect(() => {
    if (isVerifyingSuccess) {
      onNextStep();
    }
  }, [isVerifyingSuccess]);

  const handleVerifyOTP = () => {
    const otpString = otp.join("");
    verifyingOTP({ otp: otpString });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl animate-fade-in-down">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Xác minh mã OTP
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Nhập mã gồm 4 chữ số vừa được gửi đến email của bạn
        </p>

        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="flex justify-center gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                maxLength="1"
                className="w-14 h-14 text-center text-2xl text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96C576] focus:border-[#96C576] transition duration-150"
              />
            ))}
          </div>

          {verifyError?.message || error?.message ? (
            <p className="text-sm text-red-500 mt-1">
              {verifyError?.message || error?.message}
            </p>
          ) : isSuccess ? (
            <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
              <CheckCircleIcon className="w-4 h-4 text-green-600" />
              OTP đã được gửi thành công!
            </p>
          ) : null}
        </div>

        <button
          disabled={isSendingOTP || isVerifyingLoading}
          className={`w-full flex justify-center items-center gap-2 bg-[#96C576] text-white font-semibold py-2 rounded-lg shadow-md transition hover:bg-[#7da650] disabled:opacity-50 disabled:cursor-not-allowed`}
          onClick={handleVerifyOTP}
        >
          {isSendingOTP || isVerifyingLoading ? (
            <ArrowPathIcon className="w-5 h-5 animate-spin text-white" />
          ) : (
            "Xác minh"
          )}
        </button>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Không nhận được mã?
          <span
            className={`ml-1 text-blue-600 cursor-pointer hover:underline ${
              isSendingOTP ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => !isSendingOTP && triggerOTPService({ email })}
          >
            Gửi lại
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtpModal;
