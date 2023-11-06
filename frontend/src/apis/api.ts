import axiosInstance from "../utils/request";

export const dashboardCount = async () => {
  return await axiosInstance.get("/api");
};