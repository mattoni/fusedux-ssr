import { appACs, AppAction } from "./actions";

export type AppState = Readonly<{
    /**
     * Used to block the first route.onEnter on the client side, 
     * since the server just rendered it.
     */
    allowRouteLoad: boolean;
}>

const initialState: AppState = {
    allowRouteLoad: false,
}

export function appReducer(state = initialState, action: AppAction) {
    switch (action.type) {
        case appACs.UpdateAllowRouteLoad.type:
            return { ...state, allowRouteLoad: true }
        default:
            return state;
    }
}