import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

export const history = createHistory({ basename: process.env.PUBLIC_URL });

//const initialState = rootReducer.INITIAL_STATE;

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState, //initialState,
  composedEnhancers
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
