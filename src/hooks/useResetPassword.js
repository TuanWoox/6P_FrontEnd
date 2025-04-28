import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { resetPassword } from "../services/customerService"; // Đường dẫn đến file chứa hàm resetPassword
export default function useResetPassword() {
    const {
     mutate: resetPassw,
     isLoading: isResettingPassword,
        isError,
        isSuccess,
        error,
        data,   
    } = useMutation({
        mutationFn: (data) => resetPassword(data),
        onSuccess: (data) => {
            toast.success("Đặt lại mật khẩu thành công.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        },
        onError: (error) => {
            toast.error(`Đặt lại mật khẩu thất bại: ${error.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        },
    });
    return {
        resetPassw,
        isResettingPassword,
        isSuccess,
        isError,
        error,
        data,
    }
}