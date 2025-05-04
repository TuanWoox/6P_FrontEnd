import { useState } from "react";
import { toast } from "react-toastify";
import { changePassword as changePasswordService } from "../services/customerService";

export default function useChangePassword() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const changePassword = async (oldPassword, newPassword) => {
        setIsSubmitting(true);
        try {
            await changePasswordService(oldPassword, newPassword);
            toast.success("Thay đổi mật khẩu thành công");
            return true;
        } catch (error) {
            toast.error(error.message);
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        changePassword,
        isSubmitting,
    };
}
