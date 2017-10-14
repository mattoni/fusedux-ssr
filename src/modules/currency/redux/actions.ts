import { ActionCreator } from "react-redux-typescript";

export type Currency = "JPY" | "USD";

interface SetCurrencyPayload {
    type: Currency;
    value: number;
}

export const currencyACs = {
    FetchCurrency: new ActionCreator<"FETCH_CURRENCY", Currency>("FETCH_CURRENCY"),
    SetCurrency: new ActionCreator<"SET_CURRENCY", SetCurrencyPayload>("SET_CURRENCY"),
};

export type CurrencyAction = typeof currencyACs[keyof typeof currencyACs];