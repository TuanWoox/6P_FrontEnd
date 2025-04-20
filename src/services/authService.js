import axios from "axios";
import axiosAuth from "../axios/axios";
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
export const logIn = async (data) => {
  try {
    const response = await axiosAuth.post(`${API_URL}/auth/logIn`, data);
    return response.data;
  } catch (error) {
    const errMsg =
      error.response?.data?.message || "Không thể đăng nhập tài khoản";
    throw { message: errMsg };
  }
};
export const logOut = async () => {
  try {
    const response = await axiosAuth.post(`${API_URL}/auth/logOut`);
    return response.data;
  } catch (error) {
    const errMsg =
      error.response?.data?.message || "Không thể đăng xuất tài khoản";
    throw { message: errMsg };
  }
};
export const validateJWT = async () => {
  try {
    const response = await axiosAuth.post(`${API_URL}/auth/validateJWT`);
    return response.data;
  } catch (error) {
    const errMsg = error.response?.data?.message || "Token không hợp lệ";
    throw { message: errMsg };
  }
};
