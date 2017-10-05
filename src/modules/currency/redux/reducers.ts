import { currencyActionCreators, CurrencyAction, Currency } from "./actions";

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
        case currencyActionCreators.SetCurrency.type:
            return { ...state, value: action.payload }
        default:
            return state;
    }
}