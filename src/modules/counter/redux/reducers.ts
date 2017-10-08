import { counterActions, CounterAction } from "./actions";

export type CounterState = Readonly<{
    count: number;
}>

const initialState: CounterState = {
    count: 0,
}

export function counterReducer(state = initialState, action: CounterAction) {
    switch (action.type) {
        case counterActions.IncreaseCounter.type:
            return { ...state, count: state.count + 1 }
        case counterActions.DecreaseCounter.type:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}