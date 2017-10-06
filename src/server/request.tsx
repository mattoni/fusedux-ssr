import * as Hapi from "hapi";
import { StaticRouter, matchPath } from 'react-router'
import * as React from "react";
import { renderToString } from "react-dom/server";
import { AppView } from "modules/app/views";
import { Html } from "./components";
import { store, sagaMiddleware } from "common/redux";
import { Provider } from "react-redux";
import { routes } from "common/router";

import { END } from "redux-saga";
import { currencyActionCreators, sagas } from "modules/currency/redux";

interface StaticContext {
    url?: string;
}

export const handleAppRequest = (req: Hapi.Request, reply: Hapi.ReplyNoContinue) => {
    const context: StaticContext = {};
    console.log("serving", req.path)
    const app = (
        <Provider store={store}>
            <StaticRouter
                location={req.path}
                context={context}>
                <AppView />
            </StaticRouter>
        </Provider>
    );

    if (context.url) {
        reply.redirect(context.url);
        return;
    }

    const r = async () => {
        const runningSagas = sagaMiddleware.run(sagas.watchFetchCurrency).done;
        const f = currencyActionCreators.FetchCurrency.create("JPY");
        store.dispatch(f);
        store.dispatch(END);
        await Promise.all([
            runningSagas,
            execRoutes(req.path)
        ]);

        reply(`<!doctype html>${renderToString(<Html bundles={["/js/vendor.js", "/js/client.js"]}>{app}</Html>)}`);
    }

    r();
}

async function execRoutes(path: string) {
    let promise;
    routes.some(r => {
        const match = matchPath(path, r);
        if (match && r.onEnter) {
            promise = r.onEnter();
        }
        return match !== null;
    });
    return promise;
}