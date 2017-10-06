import { effects } from "redux-saga";
import { currencyActionCreators, Currency } from "./actions";
const { put, takeEvery, call } = effects;

export interface FetchCurrencyResp {
    base: Currency;
    date: string;
    rates: { [key: string]: number };
}

function* fetchCurrency() {
    console.log("fetching");
    const resp = yield call(fetchCurrencyFromApi)
    console.log(resp);
    yield put(currencyActionCreators.SetCurrency.create(1));
}

async function fetchCurrencyFromApi() {
    const resp = await fetch("http://api.fixer.io/latest?base=USD&symbols=JPY");
    if (!resp.ok) { console.error("failed to fetch currency") }
    return await resp.json();
}

export function* watchFetchCurrency() {
    yield takeEvery(
        currencyActionCreators.FetchCurrency.type,
        fetchCurrency
    );
}