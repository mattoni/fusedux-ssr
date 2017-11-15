import { links, StaticRoute } from "common/router";
import CounterView from "../containers";

export const counterRoute: StaticRoute = {
    path: links.counter(),
    component: CounterView,
    onEnter: async () => {
        console.log("entered counter route");
    },
};
