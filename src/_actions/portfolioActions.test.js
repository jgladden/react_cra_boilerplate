import api from "../_utils/apiUtil";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import moxios from "moxios";
import * as actions from "./";

describe("async actions", () => {
  const mockStore = configureMockStore([thunkMiddleware, promiseMiddleware]);
  beforeEach(() => {
    moxios.install(api);
  });
  afterEach(() => {
    moxios.uninstall(api);
  });
  it("it dispatches GET_PORTFOLIO_PENDING and GET_PORTFOLIO_FULFILLED on get portfolio", () => {
    const payload = {
      portfolio: []
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = [
      "GET_PORTFOLIO_PENDING",
      "GET_PORTFOLIO_FULFILLED"
    ];

    const store = mockStore({});

    return store.dispatch(actions.getPortfolio()).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
