import { useMutation, useQuery } from "@tanstack/react-query";
import axiosAuth from "../axios/axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

async function updateLoanPayments(loanId) {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/loanAccount/loanPayment/update?loan=${loanId}`,
        );
        return response.data;
    } catch (error) {
        const errMsg =
            error.response?.data?.message ||
            "Không thể cập nhật trạng thái khoản thanh toán";
        throw new Error(errMsg);
    }
}

export function useUpdateLoanPaymentsQuery(loanId) {
    return useQuery({
        queryKey: ["updateLoanPayments", loanId],
        queryFn: () => updateLoanPayments(loanId),
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!loanId,
    });
}

export function useUpdateLoanPayments() {
    return useMutation({
        mutationFn: updateLoanPayments,
        onError: (error) => {
            console.error("Error updating loan payments:", error);
        },
    });
}
