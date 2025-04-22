import { useMutation } from "@tanstack/react-query";
import { createOTP } from "../services/otpService";

export default function useCreateSignUpOTP() {
  const {
    mutate: triggerOTPService,
    isLoading,
    isError,
    isSuccess,
    error,
    data,
  } = useMutation({
    mutationFn: createOTP,
    onSuccess: (data) => {
      console.log("OTP sent successfully:", data);
    },
    onError: (error) => {
      console.error("Error sending OTP:", error.message);
    },
  });

  // Return the mutation functions and states
  return {
    triggerOTPService,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
}
