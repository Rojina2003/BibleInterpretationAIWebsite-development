import axios from "axios";
import { getHeaders, getFormHeaders } from "../helpers/commonUtils";
import store from "../redux/store";
import { onLogout } from "../redux/auth/actions";
import { useNavigate } from "react-router-dom";
// import store from "../redux/store"; // Remove if not used
// import { useSelector } from "react-redux"; // Remove if not used

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: getHeaders(),
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = store?.getState().auth?.userData?.token || localStorage.getItem('token') || ''
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401 && error?.response?.data?.message !== 'Invalid email or password.') {
      store.dispatch(onLogout());
    }
    return Promise.reject(error);
  }
);

export const formAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: getFormHeaders(),
});

formAxios.interceptors.request.use(
  (config) => {
    const token = store?.getState().auth?.userData?.token || localStorage.getItem('token') || ''
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default apiInstance;