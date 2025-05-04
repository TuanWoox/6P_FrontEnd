import { useMutation } from "@tanstack/react-query";
import axiosAuth from "../axios/axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export function useLoanPayment() {
    const loanPayment = async (paymentData) => {
        try {
            const response = await axiosAuth.post(
                `${API_URL}/loanAccount/loanPayment/confirm`,
                paymentData,
            );
            return response.data;
        } catch (error) {
            const errMsg =
                error.response?.data?.message ||
                "Không thể thực hiện thanh toán khoản vay";
            throw new Error(errMsg);
        }
    };

    return useMutation(loanPayment);
}

export default function useCheckingAccounts() {
    return null;
}
