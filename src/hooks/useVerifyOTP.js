import { useMutation } from "@tanstack/react-query";
import { verifyOTP } from "../services/otpService";

export default function useVerifyOTP() {
  const {
    mutate: verifyingOTP,
    isLoading: isVerifyingLoading,
    isError: isVerifyingError,
    isSuccess: isVerifyingSuccess,
    error: verifyError,
    data: verifyData,
  } = useMutation({
    mutationFn: (data) => verifyOTP(data),
    onSuccess: (data) => {
      console.log("OTP verified successfully:", data);
    },
    onError: (error) => {
      console.error("Error verifying OTP:", error.message);
    },
  });

  // Return the mutation functions and states
  return {
    verifyingOTP,
    isVerifyingLoading,
    isVerifyingSuccess,
    isVerifyingError,
    verifyError,
    verifyData,
  };
}
