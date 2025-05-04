import { useMutation } from "@tanstack/react-query";
import { transferMoney } from "../services/checkingAccountService.js";
import queryClient from "../config/reactQuery.js";
export function useTransferMoney() {
    const mutation = useMutation({
        mutationFn: (data) => transferMoney(data),
        onError: (error) => {
            console.error("Error transferring money:", error.message);
            queryClient.invalidateQueries({
                queryKey: ["sidebarInfo"],
            });
            queryClient.invalidateQueries({
                queryKey: ["checkingAccounts"],
            });
        },
        onSuccess: (data) => {
            console.log("Transfer successful:", data);
        },
    });

    // return the full mutation object, including mutate/mutateAsync
    return mutation;
}
