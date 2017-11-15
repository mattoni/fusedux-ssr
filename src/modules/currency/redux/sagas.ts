import { effects } from "redux-saga";
import {
    CurrencyType,
    CurrencyAction,
    FETCH_CURRENCY,
    setCurrency,
} from "./actions";
const { put, takeEvery, call } = effects;

export function* watchFetchCurrency() {
    yield takeEvery(FETCH_CURRENCY, fetchCurrency);
}

export interface FetchCurrencyResp {
    base: CurrencyType;
    date: string;
    rates: { [key: string]: number };
}

function* fetchCurrency(action: CurrencyAction) {
    if (action.type !== FETCH_CURRENCY) {
        return;
    }

    const resp: FetchCurrencyResp = yield call(() =>
        fetchCurrencyFromApi(action.payload),
    );

    yield put(
        setCurrency({
            value: resp.rates[action.payload],
            type: action.payload,
        }),
    );
}

async function fetchCurrencyFromApi(
    type: CurrencyType,
    base: CurrencyType = "USD",
) {
    const resp = await fetch(
        `http://api.fixer.io/latest?base=${base}&symbols=${type}`,
    );
    if (!resp.ok) {
        console.error("failed to fetch currency");
    }
    return await resp.json();
}
