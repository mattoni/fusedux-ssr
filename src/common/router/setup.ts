import { createBrowserHistory, createMemoryHistory } from "history";
import { routerReducer, routerMiddleware, RouterState } from "react-router-redux";

declare var FuseBox: any;

const history = FuseBox.isServer
    ? createMemoryHistory()
    : createBrowserHistory()

const middleware = routerMiddleware(history);

export {
    routerReducer,
    middleware as routerMiddleware,
    RouterState,
    history,
}