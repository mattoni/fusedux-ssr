import createSagaMiddleware, { effects } from "redux-saga";
import { sagas as counterSagas } from "modules/counter/redux";
import { sagas as currencySagas } from "modules/currency/redux";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield effects.all([
        counterSagas.watchIncreaseAsync(),
        currencySagas.watchFetchCurrency(),
    ]);
}

export function runSagas() {
    sagaMiddleware.run(rootSaga);
}