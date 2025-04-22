import axiosAuth from "../axios/axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;
export async function getCheckingAccount() {
  try {
    const response = await axiosAuth.post(
      `${API_URL}/checkingAccount/getCheckingAccount`
    );
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy tài khoản ghi nợ";
    throw { message: errMsg };
  }
}
