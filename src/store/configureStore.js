import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./localStorage";
import usersReducer from "./reducers/users";
import clientsReducer from "./reducers/clients";
import bankDetalisReduser from "./reducers/bankDetalis";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  users: usersReducer,
  clients: clientsReducer,
  bankDetalis: bankDetalisReduser,
  router: connectRouter(history),
});

const middleware = [thunkMiddleware, routerMiddleware(history)];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadStateFromLocalStorage();

export const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveStateToLocalStorage({
    users: {
      user: store.getState().users.user,
    },
  });
});
