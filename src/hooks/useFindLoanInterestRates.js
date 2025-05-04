import { useMutation } from "@tanstack/react-query";
import { findLoanInterestRates } from "../services/loanService";

// Trong file useFindLoanInterestRates.js
export function useFindLoanInterestRates(options = {}) {
    // Thêm tham số options
    const mutation = useMutation({
        mutationFn: (data) => findLoanInterestRates(data),
        ...options, // Merge options từ component vào
        onError: (error, variables, context) => {
            console.error("Error finding loan interest rates:", error.message);
            if (options.onError) {
                options.onError(error, variables, context);
            }
        },
        onSuccess: (data, variables, context) => {
            if (options.onSuccess) {
                options.onSuccess(data, variables, context);
            }
        },
    });

    return mutation;
}
