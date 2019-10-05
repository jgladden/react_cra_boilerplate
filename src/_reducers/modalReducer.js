import * as ats from "../_actions/_actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ats.SET_MODAL:
      return {
        ...state,
        display: action.payload
      };
    default:
      return state;
  }
};
