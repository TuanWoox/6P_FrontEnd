import { useMutation } from "@tanstack/react-query";
import { withdrawSavingAccount } from "../services/savingAccountService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import queryClient from "../config/reactQuery";

export function useWithdrawSavingAccount() {
    const navigate = useNavigate();
    const {
        mutate: withdrawSavingFn,
        isLoading,
        error,
    } = useMutation({
        mutationFn: withdrawSavingAccount,
        onSuccess: (data) => {
            toast.success("Tất toán thành công.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            queryClient.invalidateQueries({
                queryKey: ["sidebarInfo"],
            });
            queryClient.invalidateQueries({
                queryKey: ["checkingAccounts"],
            });

            navigate("/customer/saving");
        },
        onError: (err) => {
            toast.error("Tất toán thất bại, vui lòng thử lại sau.", {
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
        withdrawSavingFn,
        isLoading,
        error,
    };
}
