import axiosAuth from "../axios/axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;
export const getName = async () => {
  try {
    const response = await axiosAuth.post(`${API_URL}/customer/getname`);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy tên ngươi dùng";
    throw { message: errMsg };
  }
};

export const getEmail = async () => {
  try {
    const response = await axiosAuth.post(`${API_URL}/customer/getEmail`);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy email ngươi dùng";
    throw { message: errMsg };
  }
};
