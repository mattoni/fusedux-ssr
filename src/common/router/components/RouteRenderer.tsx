import * as React from "react";
import { Route } from "react-router";
import { StaticRoute } from "../routes";
import { SFC } from "react";
import { RootState } from "common/redux";
import { Store } from "react-redux";

interface RouteRendererProps {
    route: StaticRoute;
    store: Store<RootState>;
}

export const RouteRenderer: SFC<RouteRendererProps> = (props) => {
    const { route: { onEnter, component: Component, ...originalRouteProps }, store } = props;
    if (!Component) { return null; }
    return (
        <Route
            {...originalRouteProps}
            render={() => {
                if (
                    onEnter &&
                    store.getState().app.allowRouteLoad
                ) {
                    onEnter(props.store);
                }
                return <Component />;
            }} />
    )
}