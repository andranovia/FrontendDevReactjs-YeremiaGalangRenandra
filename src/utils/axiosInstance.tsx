import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restaurant.tun06.tech/",
});

export default axiosInstance;
