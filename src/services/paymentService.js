import axiosAuth from "../axios/axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const createPayments = async (payments) => {
    try {
        const response = await axiosAuth.post(
            `${API_URL}/loanAccount/payments/create`,
            { payments },
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message || "Không thể tạo lịch thanh toán";
        throw new Error(errMsg);
    }
};
