import { useQuery } from "@tanstack/react-query";
import { getAllSavingDepositTypes } from "../services/savingAccountService";

export function useFetchDepositSavingTypes() {
    const {
        data: savingDeposits,
        isLoading: isDepositLoading,
        error: depositError,
    } = useQuery({
        queryFn: getAllSavingDepositTypes,
        queryKey: ["savingDeposits"],
    });
    return {
        savingDeposits,
        isDepositLoading,
        depositError,
    };
}
