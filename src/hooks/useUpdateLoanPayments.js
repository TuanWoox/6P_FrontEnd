import { updateLoanPayments } from "../services/loanService";
import { useQuery } from "@tanstack/react-query";

export function useUpdateLoanPaymentsQuery(loanId) {
    return useQuery({
        queryKey: ["updateLoanPayments", loanId],
        queryFn: () => updateLoanPayments(loanId),
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!loanId,
    });
}
