import { delay, effects } from "redux-saga";
import { counterActionCreators } from "./actions";
const { put, takeEvery, } = effects;

function* increaseAsync() {
    yield delay(1000);
    yield put(counterActionCreators.IncreaseCounter.create(1));
}

export function* watchIncreaseAsync() {
    yield takeEvery(
        counterActionCreators.IncreaseCounterAsync.type,
        increaseAsync
    );
}