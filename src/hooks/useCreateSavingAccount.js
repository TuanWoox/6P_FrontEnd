import { useMutation } from "@tanstack/react-query";
import { createSavingAccount } from "../services/savingAccountService";
import queryClient from "../config/reactQuery";

export default function useCreateSavingAccount() {
    const {
        mutateAsync: createSavingAccountFn,
        data: newSavingAccount,
        isLoading: isCreating,
        isSuccess: isCreatingSuccess,
        error: createError,
    } = useMutation({
        mutationFn: (data) => {
            return createSavingAccount(data);
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["sidebarInfo"],
            });
            queryClient.invalidateQueries({
                queryKey: ["checkingAccounts"],
            });
        },
        onError: (err) => {},
    });
    return {
        createSavingAccountFn,
        newSavingAccount,
        isCreating,
        isCreatingSuccess,
        createError,
    };
}
