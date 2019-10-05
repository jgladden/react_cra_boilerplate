import * as ats from "../_actions/_actionTypes";

const initialState = {};

const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case `${ats.GET_PORTFOLIO}${ats.PENDING}`:
      return {
        ...state,
        loading: true
      };
    case `${ats.GET_PORTFOLIO}${ats.FULFILLED}`:
      return {
        ...state,
        loading: false,
        portfolio: action.payload.data
      };
    case `${ats.GET_PORTFOLIO}${ats.REJECTED}`:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default portfolio;
