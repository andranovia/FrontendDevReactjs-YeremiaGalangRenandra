import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restaurant.tun06.tech/public/",
});

export default axiosInstance;
