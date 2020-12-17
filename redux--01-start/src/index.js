import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware , compose} from "redux";
import cr from "./store/reducers/counter";
import rsr from "./store/reducers/resultStore";
import { Provider } from "react-redux";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[middleware]:dispatching ", action);
      const result = next(action);
      console.log("[middleware] next state", store.getState());
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ ctr: cr, res: rsr }),
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
