import { effects } from "redux-saga";
import { currencyActions, Currency, CurrencyAction } from "./actions";
const { put, takeEvery, call } = effects;

export interface FetchCurrencyResp {
    base: Currency;
    date: string;
    rates: { [key: string]: number };
}

function* fetchCurrency(action: CurrencyAction) {
    if (action.type !== currencyActions.FetchCurrency.type) {
        return;
    }

    const resp: FetchCurrencyResp = yield call(() => fetchCurrencyFromApi(action.payload))
    console.log(resp);

    yield put(currencyActions.SetCurrency.create({
        value: resp.rates[action.payload],
        type: action.payload
    }));
}

async function fetchCurrencyFromApi(type: Currency, base: Currency = "USD") {
    const resp = await fetch(`http://api.fixer.io/latest?base=${base}&symbols=${type}`);
    if (!resp.ok) { console.error("failed to fetch currency") }
    return await resp.json();
}

export function* watchFetchCurrency() {
    yield takeEvery(
        currencyActions.FetchCurrency.type,
        fetchCurrency
    );
}