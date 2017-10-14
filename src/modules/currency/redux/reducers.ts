import { currencyACs, CurrencyAction, Currency } from "./actions";

export type CurrencyState = Readonly<{
    type: Currency;
    value: number;
}>

const initialState: CurrencyState = {
    type: "JPY",
    value: 0
}

export function currencyReducer(state = initialState, action: CurrencyAction): CurrencyState {
    switch (action.type) {
        case currencyACs.SetCurrency.type:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}