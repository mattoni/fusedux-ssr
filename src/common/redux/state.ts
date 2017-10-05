import { combineReducers } from "redux";
import { routerReducer as router, RouterState } from "common/router";
import { counterReducer as counter, CounterState } from "modules/counter/redux";
import { currencyReducer as currency, CurrencyState } from "modules/currency/redux";

export interface RootState {
    counter: CounterState;
    router: RouterState;
    currency: CurrencyState;
}

export const rootReducer = combineReducers<RootState>({
    counter,
    router,
    currency,
})