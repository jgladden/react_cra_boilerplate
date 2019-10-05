import axios from "axios";
import * as ats from "./_actionTypes";
import * as uri from "../constants.js";

export const submitLogin = credentials => ({
  type: ats.SUBMIT_LOGIN,
  payload: axios.post(uri.LOGIN_URI, credentials)
});

export const submitLogout = () => ({
  type: ats.SUBMIT_LOGOUT
});
