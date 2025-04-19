// services/signupService.js
import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const signupUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signUp`, data);
    return response.data;
  } catch (error) {
    const errMsg = error.response?.data?.error || "Không thể đăng kí tài khoản";
    const field = error.response?.data?.field;
    throw { message: errMsg, field };
  }
};
