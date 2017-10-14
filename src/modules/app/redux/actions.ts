import { ActionCreator } from "react-redux-typescript";

export const appACs = {
    UpdateAllowRouteLoad: new ActionCreator("UPDATE_ALLOW_ROUTE_LOAD"),
};

export type AppAction = typeof appACs[keyof typeof appACs];