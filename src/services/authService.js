// services/signupService.js
import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const signupUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signUp`, data);
    return response.data;
  } catch (error) {
    const errMsg =
      error.response?.data?.message || "Không thể đăng kí tài khoản";
    throw { message: errMsg };
  }
};
export const isEmailAvailable = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/auth/isEmailAvailable`, {
      params: { email: data },
    });
    return response.data;
  } catch (error) {
    const errMsg = error.response?.data?.message || "Không thể kiểm tra email";
    throw { message: errMsg };
  }
};
