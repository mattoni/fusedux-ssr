import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppView } from "modules/app/views";
import { store } from "common/redux";
import { ConnectedRouter } from "react-router-redux";
import { history } from "common/router";
import { initPageStyles } from "common/styles";
import { setStylesTarget, forceRenderStyles } from "typestyle";

import { currencyActionCreators } from "modules/currency/redux";
import { counterActionCreators } from "modules/counter/redux";

async function initialize() {
    initPageStyles();

    const app = (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppView />
            </ConnectedRouter>
        </Provider>
    );

    const styleDiv = document.getElementById('styles-target');
    if (!styleDiv) {
        throw new Error("Unable to render styles: missing target");
    }

    render(app, document.getElementById("root"));
    setStylesTarget(styleDiv);
    forceRenderStyles();
    store.dispatch(currencyActionCreators.FetchCurrency.create("JPY"));
}

initialize();