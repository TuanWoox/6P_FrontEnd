import { useMutation } from "@tanstack/react-query";
import { createLogInOTP, createSignUpOTP } from "../services/otpService";

function otpActionService(action) {
  switch (action) {
    case "signUp":
      return createSignUpOTP;
    // You can add more cases here for other actions, e.g. login
    case "logIn":
      return createLogInOTP;
    default:
      throw new Error("Unsupported action");
  }
}
export default function useCreateSignUpOTP(action) {
  const otpServiceFunction = otpActionService(action);
  const {
    mutate: triggerOTPService,
    isLoading,
    isError,
    isSuccess,
    error,
    data,
  } = useMutation({
    mutationFn: otpServiceFunction,
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
