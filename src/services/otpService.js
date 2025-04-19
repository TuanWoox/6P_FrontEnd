// services/signupService.js
import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

export const createSignUpOTP = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/otp/registerOTP`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    const errMsg =
      error.response?.data?.message || "Không thể đăng kí tài khoản";
    const field = error.response?.data?.field;
    throw { message: errMsg, field };
  }
};
export const verifyOTP = async (data) => {
  try {
    const response = await axios.get(`${API_URL}/otp/verifyOTP`, {
      params: { otp: data.otp }, // Send OTP as query parameter
    });
    return response.data;
  } catch (error) {
    console.log(error);
    const errMsg =
      error.response?.data?.message || "Không thể đăng kí tài khoản";
    const field = error.response?.data?.field;
    throw { message: errMsg, field };
  }
};
