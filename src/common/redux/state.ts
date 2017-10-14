import { combineReducers } from "redux";
import { routerReducer as router, RouterState } from "common/router";
import { counterReducer as counter, CounterState } from "modules/counter/redux";
import { currencyReducer as currency, CurrencyState } from "modules/currency/redux";
import { appReducer as app, AppState } from "modules/app/redux";

export interface RootState {
    counter: CounterState;
    router: RouterState;
    currency: CurrencyState;
    app: AppState;
}

export const rootReducer = combineReducers<RootState>({
    app,
    counter,
    router,
    currency,
} as any) // TODO FIX HACK