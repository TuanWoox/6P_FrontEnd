import axiosAuth from "../axios/axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;
export const getAllTransaction = async () => {
  try {
    const response = await axiosAuth.get(`${API_URL}/transaction/history`);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy lịch sử giao dịch";
    throw { message: errMsg };
  }
};
