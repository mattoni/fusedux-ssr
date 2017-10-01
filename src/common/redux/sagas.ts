import { sagas as counterSagas } from "common/counter/redux";
import createSagaMiddleware, { effects } from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield effects.all([
        counterSagas.watchIncreaseAsync(),
    ])
}

export function runSagas() {
    sagaMiddleware.run(rootSaga);
}