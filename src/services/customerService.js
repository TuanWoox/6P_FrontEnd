import axiosAuth from "../axios/axios";
export const getUserProfile = async () => {
  try {
    const response = await axiosAuth.get("/user/profile");
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Unauthorized");
    }
    throw new Error(
      error.response?.data?.message || "Failed to fetch user profile"
    );
  }
};
