import * as React from "react";
import { SFC } from "react";
import { getStyles } from "typestyle/lib";
import { RootState, PRELOADED_STATE } from "common/redux";
import { Helmet } from "react-helmet";

interface HtmlProps {
    appString: string;
    bundles: string[];
    state: RootState;
}

export const Html: SFC<HtmlProps> = (props) => {
    const helmet = Helmet.renderStatic();
    return (
        <html>
            <head>
                {helmet.title.toComponent()}
                <style id="styles-target">
                    {getStyles()}
                </style>
                {helmet.link.toComponent()}
                {helmet.meta.toComponent()}
                <meta
                    httpEquiv="Content-Type"
                    content="text/html"
                    charSet="utf-8"
                />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: props.appString }} />
            </body>
            <script dangerouslySetInnerHTML={{ __html: `window.${PRELOADED_STATE}=${JSON.stringify(props.state)}` }} />
            {props.bundles.map(b => (
                <script key={b} src={b} />
            ))}
        </html>
    )
}