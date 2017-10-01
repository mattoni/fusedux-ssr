import { applyMiddleware } from "redux";
import { routerMiddleware } from "common/router";
import { sagaMiddleware } from "./sagas";

export const rootMiddleware = applyMiddleware(
    routerMiddleware,
    sagaMiddleware,
);
