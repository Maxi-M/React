import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

// import {routerMiddleware} from "connected-react-router";
// import {createBrowserHistory} from 'history'

import {rootReducer} from "reducers/index";

import {botMiddleware} from "middlewares/bot";

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
        botMiddleware
    )
))