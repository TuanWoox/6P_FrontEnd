import { useQuery } from "@tanstack/react-query";
import { getAllLoanInterestRates } from "../services/loanService";

export function useFetchAllLoanInterestRates() {
    const {
        data: loanInterestRates,
        isLoading,
        error,
    } = useQuery({
        queryFn: getAllLoanInterestRates,
        queryKey: ["loanInterestRates"], // Đảm bảo cache theo từng customer
    });

    return {
        loanInterestRates,
        isLoading,
        error,
    };
}
