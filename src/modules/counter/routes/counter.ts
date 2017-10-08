import { links, StaticRoute } from "common/router";
import CounterView from "../views";
import { counterActions } from "../redux";

export const counterRoute: StaticRoute = {
    path: links.counter(),
    component: CounterView,
    onEnter: async (store) => {
        console.log("entered counter route");
        store.dispatch(counterActions.IncreaseCounterAsync.create(1));
    }
};