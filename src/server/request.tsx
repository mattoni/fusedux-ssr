import * as Hapi from "hapi";
import { StaticRouter, matchPath } from 'react-router'
import * as React from "react";
import { renderToString } from "react-dom/server";
import { AppView } from "modules/app/views";
import { Html } from "./components";
import { initStore, sagaMiddleware, rootSaga, RootState } from "common/redux";
import { Provider, Store } from "react-redux";
import { routes } from "common/router";
import { END } from "redux-saga";

interface StaticContext {
    url?: string;
}

export const handleAppRequest = (req: Hapi.Request, reply: Hapi.ReplyNoContinue) => {
    const context: StaticContext = {};
    const store = initStore()

    if (context.url) {
        reply.redirect(context.url);
        return;
    }

    const respond = async () => {
        const runningSagas = sagaMiddleware.run(rootSaga).done;
        await execRoutes(req.path, store);
        store.dispatch(END);

        await Promise.all([
            runningSagas,
        ]);

        const app = renderToString(
            <Provider store={store}>
                <StaticRouter
                    location={req.path}
                    context={context}>
                    <AppView store={store} />
                </StaticRouter>
            </Provider>
        );

        reply(`
            <!doctype html>
                ${renderToString(
                <Html
                    appString={app}
                    state={store.getState()}
                    bundles={["/js/vendor.js", "/js/client.js"]} />)
            }
        `);
    }

    respond();
}

async function execRoutes(path: string, store: Store<RootState>) {
    let promise;
    routes.some(r => {
        const match = matchPath(path, r);
        if (match && r.onEnter) {
            promise = r.onEnter(store);
        }
        return match !== null;
    });
    return promise;
}