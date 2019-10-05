import api from "../_utils/apiUtil";
import * as ats from "./_actionTypes";
import * as uri from "../constants.js";

export const getPortfolio = () => ({
  type: ats.GET_PORTFOLIO,
  payload: api.get(uri.PORTFOLIO_URI)
});
