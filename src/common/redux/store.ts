import { createStore } from "redux";
import { rootReducer, RootState } from "./state";
import { rootMiddleware } from "./middleware";

export const store = createStore<RootState>(
    rootReducer,
    rootMiddleware,
);
