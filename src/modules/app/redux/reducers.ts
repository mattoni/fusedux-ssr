import { UPDATE_ALLOW_ROUTE_LOAD, Actions } from "./actions";

export type AppState = Readonly<{
    /**
     * Used to block the first route.onEnter on the client side, 
     * since the server just rendered it.
     */
    allowRouteLoad: boolean;
}>;

const initialState: AppState = {
    allowRouteLoad: false,
};

export function appReducer(
    state = initialState,
    action: Actions[keyof Actions],
) {
    switch (action.type) {
        case UPDATE_ALLOW_ROUTE_LOAD:
            return { ...state, allowRouteLoad: true };
        default:
            return state;
    }
}
