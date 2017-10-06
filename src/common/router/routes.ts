import { counterRoute } from "modules/counter/routes";
import { RouteComponentProps } from "react-router";

export interface StaticRoute {
    path: string;
    component: React.ComponentType<RouteComponentProps<any> | {}>;
    onEnter?: () => Promise<any>;
}

export const routes = [
    counterRoute
]