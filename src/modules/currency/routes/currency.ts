import { links, StaticRoute } from "common/router";
import CurrencyView from "../views";
import { fetchCurrency } from "../redux";

export const currencyRoute: StaticRoute = {
    path: links.currency(),
    component: CurrencyView,
    onEnter: async store => {
        store.dispatch(fetchCurrency("JPY"));
    },
};
