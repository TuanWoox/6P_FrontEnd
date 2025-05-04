import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    getLimitTransaction,
    updateLimitTransaction,
} from "../services/checkingAccountService";

export const useGetLimitTransaction = () => {
    return useQuery(["limitTransaction"], getLimitTransaction, {
        staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
        onError: (error) => {
            console.error("Error fetching limit transaction:", error.message);
        },
    });
};

export const useUpdateLimitTransaction = () => {
    const queryClient = useQueryClient();

    return useMutation(updateLimitTransaction, {
        onSuccess: () => {
            queryClient.invalidateQueries(["limitTransaction"]); // Refresh data after mutation
            queryClient.invalidateQueries({
                queryKey: ["sidebarInfo"],
            });
            queryClient.invalidateQueries({
                queryKey: ["checkingAccounts"],
            });
        },
        onError: (error) => {
            console.error("Error updating limit transaction:", error.message);
        },
    });
};
