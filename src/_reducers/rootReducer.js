import { combineReducers } from "redux";
import modal from "./modalReducer";
import auth from "./authReducer";
import portfolio from "./portfolioReducer";

const rootReducer = combineReducers({
  modal,
  auth,
  portfolio
});

export default rootReducer;
