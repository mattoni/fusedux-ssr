import { delay, effects } from "redux-saga";
import { INCREMENT_COUNTER_ASYNC, incrementCounter } from "./actions";
const { put, takeEvery } = effects;

function* increase() {
    yield delay(1000);
    yield put(incrementCounter());
}

export function* watchIncreaseAsync() {
    yield takeEvery(INCREMENT_COUNTER_ASYNC, increase);
}
