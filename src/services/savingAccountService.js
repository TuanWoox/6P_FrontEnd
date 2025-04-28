import axiosAuth from "../axios/axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getSavingAccount = async (accountId) => {
  try {
    const response = await axiosAuth.get(`${API_URL}/savingAccount/getSavingAccountById/${accountId}`);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy thông tin tài khoản tiết kiệm";
    throw { message: errMsg };
  }
};

export const getAllSavingAccounts = async () => {
  try {
    const response = await axiosAuth.get(`${API_URL}/savingAccount/getSavingAccounts`);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy danh sách tài khoản tiết kiệm";
    throw { message: errMsg };
  }
};
