import { links, StaticRoute } from "common/router";
import CurrencyView from "../views";
import { currencyACs } from "../redux";

export const currencyRoute: StaticRoute = {
    path: links.currency(),
    component: CurrencyView,
    onEnter: async (store) => {
        store.dispatch(currencyACs.FetchCurrency.create("JPY"));
    }
};