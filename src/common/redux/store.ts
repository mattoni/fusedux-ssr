import { createStore, compose } from "redux";
import { rootReducer, RootState } from "./state";
import { rootMiddleware } from "./middleware";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

export function initStore(state?: RootState) {
    const composeEnhancers =
        (typeof window !== "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;

    if (!state) {
        return createStore<RootState>(rootReducer, rootMiddleware);
    }

    return createStore<RootState>(
        rootReducer,
        state,
        composeEnhancers(rootMiddleware),
    );
}
