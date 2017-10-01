import * as Hapi from "hapi";
import { StaticRouter } from 'react-router'
import * as React from "react";
import { renderToString } from "react-dom/server";
import { AppView } from "modules/app/views";
import { Html } from "./components";
import { store } from "common/redux";
import { Provider } from "react-redux";

interface StaticContext {
    url?: string;
}

export const handleAppRequest = (req: Hapi.Request, reply: Hapi.ReplyNoContinue) => {
    const context: StaticContext = {};
    console.log("Serving ", req.path);
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

    reply(`<!doctype html>${renderToString(<Html bundles={["/js/vendor.js", "/js/client.js"]}>{app}</Html>)}`);
}