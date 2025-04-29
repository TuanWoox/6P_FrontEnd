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

export const getInformationForSideBar = async () => {
  try {
    const response = await axiosAuth.get(
      `${API_URL}/customer/getSideBarInformation`
    );
    // console.log(response.data);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy thông tin cho SideBar";
    throw { message: errMsg };
  }
};
export const getCustomerID = async (data) => {
  try {
    const response = await axiosAuth.post(`${API_URL}/customer/getCustomerID`, data);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy ID người dùng";
    throw { message: errMsg };
  }
}
export const resetPassword = async (data) => {
  try {
    const response = await axiosAuth.post(`${API_URL}/customer/resetPassword`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const errMsg =
      error.response?.data?.message || "Không thể đặt lại mật khẩu";
    throw { message: errMsg };
  }
};
export const getPersonalInfo = async () => {
  try {
    const response = await axiosAuth.get(`${API_URL}/customer/getPersonalInfor`);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy thông tin cá nhân";
    throw { message: errMsg };
  }
}
export const updatePersonalInfo = async (data) => {
  try {
    const response = await axiosAuth.post(`${API_URL}/customer/updatePersonalInfor`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    const errMsg =
      error.response?.data?.message || "Không thể cập nhật thông tin cá nhân";
    throw { message: errMsg };
  }
}