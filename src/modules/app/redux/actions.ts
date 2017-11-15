export const UPDATE_ALLOW_ROUTE_LOAD = "UPDATE_ALLOW_ROUTE_LOAD";

export interface Actions {
    UPDATE_ALLOW_ROUTE_LOAD: {
        type: typeof UPDATE_ALLOW_ROUTE_LOAD;
    };
}

export type AppAction = Actions[keyof Actions];

export function updateAllowRouteLoad(): Actions[typeof UPDATE_ALLOW_ROUTE_LOAD] {
    return {
        type: "UPDATE_ALLOW_ROUTE_LOAD",
    };
}
