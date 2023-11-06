import axios from "axios";

export const baseURL = "http://localhost:4000/";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";

    return config;
  },
  async function (error) {
    return await Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    return await Promise.reject(error.response.data);
  }
);

export default axiosInstance;
