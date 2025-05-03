import { useMutation, useQuery } from "@tanstack/react-query";
import axiosAuth from "../axios/axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

async function updateLoanPayments(loanId) {
    const response = await axiosAuth.post(
        `${API_URL}/loanAccount/loanPayment/update`,
        { loan: loanId },
    );
    return response.data;
}

export function useUpdateLoanPaymentsQuery(loanId) {
    return useQuery({
        queryKey: ["updateLoanPayments", loanId],
        queryFn: () => updateLoanPayments(loanId),
        // Only run once when component mounts
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!loanId,
    });
}

// Keep the mutation for manual updates if needed
export function useUpdateLoanPayments() {
    return useMutation({
        mutationFn: updateLoanPayments,
        onError: (error) => {
            console.error("Error updating loan payments:", error);
        },
    });
}
