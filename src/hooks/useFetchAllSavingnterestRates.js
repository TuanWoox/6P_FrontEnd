import { useQuery } from "@tanstack/react-query";
import { getAllSavingInterestRates } from "../services/savingAccountService";

export function useFetchAllSavingnterestRates() {
    const {
        data: interestRates,
        isLoading: isInterestRatesLoading,
        error: interestRatesError,
    } = useQuery({
        queryFn: getAllSavingInterestRates,
        queryKey: ["savingInterestRates"],
    });
    return {
        interestRates,
        isInterestRatesLoading,
        interestRatesError,
    };
}
