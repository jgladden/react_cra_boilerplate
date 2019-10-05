import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./_reducers/rootReducer";

const initialState = {};
const middleware = [thunkMiddleware, promiseMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);
export default createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middlewareEnhancer)
);
