import { useQuery } from "@tanstack/react-query";
import { getAllSavingInterestRates } from "../services/savingAccountService";

export function useFetchAllSavingnterestRates() {
    const {
        data: interestRate,
        isLoading: isInterestRateLoading,
        error: interestRateError,
    } = useQuery({
        queryFn: getAllSavingInterestRates,
        queryKey: ["savingInterestRates"],
    });
    return {
        interestRate,
        isInterestRateLoading,
        interestRateError,
    };
}
