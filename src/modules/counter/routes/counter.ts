import { links, StaticRoute } from "common/router";
import CounterView from "../views";

export const counterRoute: StaticRoute = {
    path: links.home(),
    component: CounterView,
    onEnter: async () => {
        console.log("entered counter route");
    }
};