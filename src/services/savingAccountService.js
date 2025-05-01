import axiosAuth from "../axios/axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getSavingAccount = async (accountId) => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/savingAccount/getSavingAccountById/${accountId}`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể lấy thông tin tài khoản tiết kiệm";
        throw { message: errMsg };
    }
};

export const getAllSavingAccounts = async () => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/savingAccount/getSavingAccounts`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể lấy danh sách tài khoản tiết kiệm";
        throw { message: errMsg };
    }
};
export const getAllSavingTypes = async () => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/savingAccount/getAllSavingTypes`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể lấy danh sách loại khoản tiết kiệm";
        throw { message: errMsg };
    }
};
export const getAllSavingInterestRates = async () => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/savingAccount/getAllSavingInterestRates`,
        );

        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể lấy danh sách lãi suất tiết kiệm";
        throw { message: errMsg };
    }
};

export const getAllSavingDepositTypes = async () => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/savingAccount/getAllSavingDepositTypes`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể lấy danh sách giới hạn tiền gửi";
        throw { message: errMsg };
    }
};
export const createSavingAccount = async (data) => {
    try {
        const response = await axiosAuth.post(
            `${API_URL}/savingAccount/createSavingAccount`,
            data,
        );
        return response.data;
    } catch (err) {
        const errMsg = err.response?.data?.message || "Không thể tạo tài khoản";
        throw { message: errMsg };
    }
};
