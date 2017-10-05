import { effects } from "redux-saga";
import { currencyActionCreators, Currency } from "./actions";
const { put, takeEvery, } = effects;

export interface FetchCurrencyResp {
    base: Currency;
    date: string;
    rates: { [key: string]: number };
}

function* fetchCurrency() {
    const resp = yield fetch("http://api.fixer.io/latest?base=USD&symbols=JPY");
    console.log("Fetch resp", resp);
    yield put(currencyActionCreators.SetCurrency.create(1));
}

export function* watchFetchCurrency() {
    yield takeEvery(
        currencyActionCreators.FetchCurrency.type,
        fetchCurrency
    );
}