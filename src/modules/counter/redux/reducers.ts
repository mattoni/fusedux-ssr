import { counterACs, CounterAction } from "./actions";

export type CounterState = Readonly<{
    count: number;
}>

const initialState: CounterState = {
    count: 0,
}

export function counterReducer(state = initialState, action: CounterAction) {
    switch (action.type) {
        case counterACs.IncreaseCounter.type:
            return { ...state, count: state.count + 1 }
        case counterACs.DecreaseCounter.type:
            return { ...state, count: state.count - 1 }
        default:
            return state;
    }
}