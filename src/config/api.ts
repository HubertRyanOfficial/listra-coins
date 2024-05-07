import axios from "axios";
import * as Device from "expo-device";

const api = axios.create({
  baseURL: !Device.isDevice
    ? "http://localhost:3000"
    : "http://192.168.0.104:3000",
});

export default api;
