import { useState } from "react";
import { toast } from "react-toastify";
import axiosAuth from "../axios/axios";

export default function useChangePassword() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changePassword = async (oldPassword, newPassword) => {
    setIsSubmitting(true);
    try {
      await axiosAuth.post("/customer/changePassword", {
        oldPassword,
        newPassword,
      });
      toast.success("Thay đổi mật khẩu thành công");
      return true;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Thay đổi mật khẩu thất bại";
      toast.error(errorMessage);
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
