import { RouteComponentProps } from "react-router";
import { Store } from "react-redux";
import { RootState } from "common/redux"

import { counterRoute } from "modules/counter/routes";
import { currencyRoute } from "modules/currency/routes";

export interface StaticRoute {
    path: string;
    component: React.ComponentType<RouteComponentProps<any> | {}>;
    onEnter?: (s: Store<RootState>) => Promise<any>;
}

export const routes = [
    counterRoute,
    currencyRoute,
]