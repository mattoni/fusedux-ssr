import { links, StaticRoute } from "common/router";
import CounterView from "../views";
import { counterActionCreators } from "../redux";

export const counterRoute: StaticRoute = {
    path: links.counter(),
    component: CounterView,
    onEnter: async (store) => {
        console.log("entered counter route");
        store.dispatch(counterActionCreators.IncreaseCounterAsync.create(1));
    }
};