import { useMutation } from "@tanstack/react-query";
import { createNewLoan } from "../services/loanService";

export function useCreateNewLoan(options = {}) {
    // Thêm tham số options
    const mutation = useMutation({
        mutationFn: (data) => createNewLoan(data),
        ...options, // Merge options từ component vào
        onError: (error, variables, context) => {
            console.error("Error creating new loan:", error.message);
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
