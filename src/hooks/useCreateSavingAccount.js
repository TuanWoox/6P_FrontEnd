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
            console.log("Mutation success, invalidating...");
            queryClient.invalidateQueries({
                queryKey: ["sidebarInfo"],
            });
            queryClient.invalidateQueries({
                queryKey: ["checkingAccounts"],
            });
        },
        onError: (err) => {
            console.log(err);
        },
    });
    return {
        createSavingAccountFn,
        newSavingAccount,
        isCreating,
        isCreatingSuccess,
        createError,
    };
}
