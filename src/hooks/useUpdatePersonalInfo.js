import { updatePersonalInfo } from "../services/customerService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import queryClient from "../config/reactQuery";
export default function useUpdatePersonalInfo() {
    const navigate = useNavigate();
    const {
        mutate: updateInfo,
        isLoading: isUpdating,
        isError,
        isSuccess,
        error,
        data,
    } = useMutation({
        mutationFn: (data) => updatePersonalInfo(data),
        onSuccess: (data) => {
            toast.success("Cập nhật thông tin thành công.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            queryClient.invalidateQueries({
                queryKey: ["personalInfo"],
            });
            queryClient.invalidateQueries({
                queryKey: ["sidebarInfo"],
            });

            // navigate("/customer/personal-infor");
        },
        onError: (error) => {
            toast.error(`Cập nhật thông tin thất bại: ${error.message}`, {
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
        updateInfo,
        isUpdating,
        isSuccess,
        isError,
        error,
        data,
    };
}
