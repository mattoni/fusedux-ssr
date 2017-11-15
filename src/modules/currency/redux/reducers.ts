import { CurrencyAction, SET_CURRENCY, CurrencyType } from "./actions";

export type CurrencyState = Readonly<{
    type: CurrencyType;
    value: number;
}>;

const initialState: CurrencyState = {
    type: "JPY",
    value: 0,
};

export function currencyReducer(
    state = initialState,
    action: CurrencyAction,
): CurrencyState {
    switch (action.type) {
        case SET_CURRENCY:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
