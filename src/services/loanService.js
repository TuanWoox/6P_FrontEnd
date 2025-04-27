import axiosAuth from "../axios/axios";
const API_URL = import.meta.env.VITE_BACKEND_URL;

// Lấy tất cả loan account của một customer
export const getAllLoanAccounts = async () => {
  try {
    const response = await axiosAuth.post(
      `${API_URL}/loanAccount/getAllLoanAccount`
    );
    console.log(response.data);
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
      `${API_URL}/loanAccount/details/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    const errMsg =
      err.response?.data?.message || "Không thể lấy thông tin khoản vay";
    throw { message: errMsg };
  }
};
