import { combineReducers } from "redux";
import { counterReducer as counter, CounterState } from "modules/counter/redux";
import { routerReducer as router, RouterState} from "common/router";

export interface RootState {
    counter: CounterState;
    router: RouterState;
}

export const rootReducer = combineReducers<RootState>({
    counter,
    router,
})