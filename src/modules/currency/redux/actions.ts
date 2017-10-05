import { ActionCreator } from "react-redux-typescript";

export type Currency = "JPY" | "USD";
export const currencyActionCreators = {
    FetchCurrency: new ActionCreator<"FetchCurrency", Currency>("FetchCurrency"),
    SetCurrency: new ActionCreator<"SetCurrency", number>("SetCurrency"),
};

export type CurrencyAction = typeof currencyActionCreators[keyof typeof currencyActionCreators];