import { CounterAction, INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actions";

export type CounterState = Readonly<{
    count: number;
}>;

const initialState: CounterState = {
    count: 0,
};

export function counterReducer(state = initialState, action: CounterAction) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + 1 };
        case DECREMENT_COUNTER:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}
