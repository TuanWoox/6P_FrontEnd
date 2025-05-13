import axiosAuth from "../axios/axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;
export async function getCheckingAccount() {
    try {
        const response = await axiosAuth.post(
            `${API_URL}/checkingAccount/getCheckingAccount`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message || "Không thể lấy tài khoản ghi nợ";
        throw { message: errMsg };
    }
}

export async function getAllCheckingAccount() {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/checkingAccount/getAllCheckingAccount`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message || "Không thể lấy tài khoản ghi nợ";
        throw { message: errMsg };
    }
}

export const checkAvailableTargetAccount = async (targetAccount) => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/checkingAccount/checkAvilableTargetAccount/${targetAccount}`,
        );

        return response.data;
    } catch (err) {
        const msg =
            err.response?.data?.message || "Không thể kiểm tra tài khoản";
        throw new Error(msg);
    }
};

export const getLimitTransaction = async () => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/checkingAccount/setLimitTransaction`,
        );

        return response.data;
    } catch (err) {
        const msg = err.response?.data?.message || "Không thể lấy hạn mức";
        throw new Error(msg);
    }
};

export const updateLimitTransaction = async (data) => {
    try {
        const response = await axiosAuth.post(
            `${API_URL}/checkingAccount/setLimitTransaction`,
            data,
        );
        return response.data;
    } catch (err) {
        const msg = err.response?.data?.message || "Không thể cập nhật hạn mức";
        throw new Error(msg);
    }
};

export const transferMoney = async (data) => {
    try {
        const response = await axiosAuth.post(
            `${API_URL}/checkingAccount/transferMoney`,
            data,
        );
        return response.data;
    } catch (err) {
        const msg = err.response?.data?.message || "Không thể chuyển tiền";
        throw new Error(msg);
    }
};
