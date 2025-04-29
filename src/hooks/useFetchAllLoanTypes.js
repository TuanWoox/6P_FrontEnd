import { useQuery } from "@tanstack/react-query";
import { getAllLoanTypes } from "../services/loanService";

export function useFetchAllLoanTypes() {
    const {
        data: loanTypes,
        isLoading,
        error,
    } = useQuery({
        queryFn: getAllLoanTypes,
        queryKey: ["loanTypes"],
    });

    return {
        loanTypes,
        isLoading,
        error,
    };
}
