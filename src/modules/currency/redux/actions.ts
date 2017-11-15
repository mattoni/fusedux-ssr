export const FETCH_CURRENCY = "FETCH_CURRENCY";
export const SET_CURRENCY = "SET_CURRENCY";

export type CurrencyType = "JPY" | "USD";

export interface Actions {
    FETCH_CURRENCY: {
        type: typeof FETCH_CURRENCY;
        payload: CurrencyType;
    };
    SET_CURRENCY: {
        type: typeof SET_CURRENCY;
        payload: {
            type: CurrencyType;
            value: number;
        };
    };
}

interface Payloads {
    SET_CURRENCY: {
        type: CurrencyType;
        value: number;
    };
}

export type CurrencyAction = Actions[keyof Actions];

export function fetchCurrency(c: CurrencyType): Actions[typeof FETCH_CURRENCY] {
    return {
        type: FETCH_CURRENCY,
        payload: c,
    };
}

export function setCurrency(
    p: Payloads[typeof SET_CURRENCY],
): Actions[typeof SET_CURRENCY] {
    return {
        type: SET_CURRENCY,
        payload: p,
    };
}
