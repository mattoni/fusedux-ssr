import { ActionCreator } from "react-redux-typescript";

export const counterActions = {
    IncreaseCounter: new ActionCreator<"IncreaseCounter", number>("IncreaseCounter"),
    DecreaseCounter: new ActionCreator<"DecreaseCounter", number>("DecreaseCounter"),
    IncreaseCounterAsync: new ActionCreator<"IncreaseCounterAsync", number>("IncreaseCounterAsync"),
};

export type CounterAction = typeof counterActions[keyof typeof counterActions];