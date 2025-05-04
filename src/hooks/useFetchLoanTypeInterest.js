import { useQuery } from "@tanstack/react-query";
import { getLoanTypeInterest } from "../services/loanService";

export function useFetchLoanTypeInterest(id) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["loanTypeInterest", id],
        queryFn: () => getLoanTypeInterest(id),
        enabled: !!id, // Chỉ fetch khi ID tồn tại
    });

    return {
        loanTypeInterest: data,
        isLoading,
        error,
    };
}
