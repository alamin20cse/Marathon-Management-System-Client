import axios from "axios";

export const AxiosSecure = axios.create({
  baseURL: 'https://marathon-management-system-server-theta.vercel.app/marathonsreg',
  credentials: 'include',
});
