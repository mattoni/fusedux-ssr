import { ActionCreator } from "react-redux-typescript";

export const counterActionCreators = {
    IncreaseCounter: new ActionCreator<"IncreaseCounter", number>("IncreaseCounter"),
    DecreaseCounter: new ActionCreator<"DecreaseCounter", number>("DecreaseCounter"),
    IncreaseCounterAsync: new ActionCreator<"IncreaseCounterAsync", number>("IncreaseCounterAsync"),
};

export type CounterAction = typeof counterActionCreators[keyof typeof counterActionCreators];