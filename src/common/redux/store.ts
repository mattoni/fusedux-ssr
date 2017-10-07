import { createStore } from "redux";
import { rootReducer, RootState } from "./state";
import { rootMiddleware } from "./middleware";

export function initStore(state?: RootState) {
    if (!state) {
        return createStore<RootState>(
            rootReducer,
            rootMiddleware,
        );
    }

    return createStore<RootState>(
        rootReducer,
        state,
        rootMiddleware
    )
}
