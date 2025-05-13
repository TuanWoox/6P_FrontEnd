import axiosAuth from "../axios/axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

// Lấy tất cả loan account của một customer
export const getAllLoanAccounts = async () => {
    try {
        const response = await axiosAuth.post(
            `${API_URL}/loanAccount/getAllLoanAccount`,
        );

        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message || "Không thể lấy danh sách khoản vay";
        throw { message: errMsg };
    }
};

// Lấy 1 loan account dựa trên id
export const getLoanAccount = async (id) => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/loanAccount/details/${id}`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message || "Không thể lấy thông tin khoản vay";
        throw { message: errMsg };
    }
};

export const getAllLoanInterestRates = async () => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/loanAccount/getAllLoanInterestRates`,
        );

        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể lấy danh sách lãi suất khoản vay";
        throw { message: errMsg };
    }
};

export const findLoanInterestRates = async (data) => {
    try {
        const response = await axiosAuth.post(
            `${API_URL}/loanAccount/findLoanInterestRates`,
            data,
        );

        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể tìm kiếm lãi suất khoản vay";
        throw { message: errMsg };
    }
};

export const createNewLoan = async (data) => {
    try {
        const response = await axiosAuth.post(
            `${API_URL}/loanAccount/createNewLoan`,
            data,
        );

        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message || "Không thể tạo khoản vay mới";
        throw { message: errMsg };
    }
};

export const getAllLoanTypes = async () => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/loanAccount/getAllLoanTypes`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể lấy danh sách loại khoản vay";
        throw { message: errMsg };
    }
};

export const getLoanTypeInterest = async (id) => {
    try {
        const response = await axiosAuth.get(
            `${API_URL}/loanAccount/loanTypeInterest/${id}`,
        );
        return response.data;
    } catch (err) {
        const errMsg =
            err.response?.data?.message ||
            "Không thể lấy thông tin loại lãi suất khoản vay";
        throw { message: errMsg };
    }
};
