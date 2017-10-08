import { links, StaticRoute } from "common/router";
import CurrencyView from "../views";
import { currencyActions } from "../redux";

export const currencyRoute: StaticRoute = {
    path: links.currency(),
    component: CurrencyView,
    onEnter: async (store) => {
        store.dispatch(currencyActions.FetchCurrency.create("JPY"));
    }
};