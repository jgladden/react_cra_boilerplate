import axios from "axios";
import store from "../store";
import { BASE_URI } from "../constants";

const api = axios.create({
  baseURL: BASE_URI
});

api.interceptors.request.use(config => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
