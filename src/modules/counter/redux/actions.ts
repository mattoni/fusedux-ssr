import { ActionCreator } from "react-redux-typescript";

export const counterACs = {
    IncreaseCounter: new ActionCreator<"IncreaseCounter", number>("IncreaseCounter"),
    DecreaseCounter: new ActionCreator<"DecreaseCounter", number>("DecreaseCounter"),
    IncreaseCounterAsync: new ActionCreator<"IncreaseCounterAsync", number>("IncreaseCounterAsync"),
};

export type CounterAction = typeof counterACs[keyof typeof counterACs];