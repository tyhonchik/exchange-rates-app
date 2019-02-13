import thunk from "redux-thunk";
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";

export const history = createBrowserHistory(); //{ basename: process.env.PUBLIC_URL }

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
  rootReducer(history),
  persistedState, //initialState,
  composedEnhancers
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
