import * as React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { AppView } from "modules/app/views";
import { initStore, runSagas, PRELOADED_STATE } from "common/redux";
import { ConnectedRouter } from "react-router-redux";
import { history } from "common/router";
import { initPageStyles } from "common/styles";
import { setStylesTarget, forceRenderStyles } from "typestyle";
import { updateAllowRouteLoad } from "modules/app/redux";

async function initialize() {
    initPageStyles();
    const store = initStore(window[PRELOADED_STATE]);
    delete window[PRELOADED_STATE];
    runSagas();

    const app = (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppView store={store} />
            </ConnectedRouter>
        </Provider>
    );

    const styleDiv = document.getElementById("styles-target");
    if (!styleDiv) {
        throw new Error("Unable to render styles: missing target");
    }

    hydrate(app, document.getElementById("root"));
    setStylesTarget(styleDiv);
    forceRenderStyles();

    // Allow further route changes to run the 'onEnter' func
    store.dispatch(updateAllowRouteLoad());
}

initialize();
