import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
