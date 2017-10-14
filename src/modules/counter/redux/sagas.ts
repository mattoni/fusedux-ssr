import { delay, effects } from "redux-saga";
import { counterACs } from "./actions";
const { put, takeEvery, } = effects;

function* increaseAsync() {
    yield delay(1000);
    yield put(counterACs.IncreaseCounter.create(1));
}

export function* watchIncreaseAsync() {
    yield takeEvery(
        counterACs.IncreaseCounterAsync.type,
        increaseAsync
    );
}

