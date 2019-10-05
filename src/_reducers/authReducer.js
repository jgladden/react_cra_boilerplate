import * as ats from "../_actions/_actionTypes";
import {
  getAuthTokenCookie,
  setAuthTokenCookie,
  deleteAuthTokenCookie
} from "../_utils/authUtils";

const initialState = {
  token: getAuthTokenCookie()
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case `${ats.SUBMIT_LOGIN}${ats.PENDING}`: {
      return {
        posting: true
      };
    }
    case `${ats.SUBMIT_LOGIN}${ats.FULFILLED}`: {
      const token = action.payload.data.token;
      if (token) {
        setAuthTokenCookie(token);
        return {
          posting: false,
          token
        };
      } else {
        return {
          posting: false,
          error: action.payload.data.error
        };
      }
    }
    case `${ats.SUBMIT_LOGIN}${ats.REJECTED}`: {
      return {
        posting: false,
        error: action.payload
      };
    }
    case ats.SUBMIT_LOGOUT: {
      deleteAuthTokenCookie();
      return {
        token: null
      };
    }
    default:
      return state;
  }
};

export default auth;
