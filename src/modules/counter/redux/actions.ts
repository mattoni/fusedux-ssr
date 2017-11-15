export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const INCREMENT_COUNTER_ASYNC = "INCREMENT_COUNTER_ASYNC";

export interface Actions {
    INCREMENT_COUNTER: {
        type: typeof INCREMENT_COUNTER;
    };
    DECREMENT_COUNTER: {
        type: typeof DECREMENT_COUNTER;
    };
    INCREMENT_COUNTER_ASYNC: {
        type: typeof INCREMENT_COUNTER_ASYNC;
    };
}

// Type to be passed into reducer
export type CounterAction = Actions[keyof Actions];

export function incrementCounter(): Actions[typeof INCREMENT_COUNTER] {
    return {
        type: INCREMENT_COUNTER,
    };
}

export function decrementCounter(): Actions[typeof DECREMENT_COUNTER] {
    return {
        type: DECREMENT_COUNTER,
    };
}

export function incrementCounterAsync(): Actions[typeof INCREMENT_COUNTER_ASYNC] {
    return {
        type: INCREMENT_COUNTER_ASYNC,
    };
}
