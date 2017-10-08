import { delay, effects } from "redux-saga";
import { counterActions } from "./actions";
const { put, takeEvery, } = effects;

function* increaseAsync() {
    yield delay(1000);
    yield put(counterActions.IncreaseCounter.create(1));
}

export function* watchIncreaseAsync() {
    yield takeEvery(
        counterActions.IncreaseCounterAsync.type,
        increaseAsync
    );
}

