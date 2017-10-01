import { createStore } from "redux";
import { rootReducer, RootState } from "./state";
import { rootMiddleware } from "./middleware";
import { runSagas } from "./sagas";

export const store = createStore<RootState>(
    rootReducer,
    rootMiddleware,
);

runSagas();