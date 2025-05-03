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
        onSuccess: (data) => {},
        onError: (error) => {
            console.error("Error sending OTP:", error.message);
            console.log(error);
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
