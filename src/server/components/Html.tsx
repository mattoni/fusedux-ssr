import * as React from "react";
import { SFC } from "react";
import { getStyles } from "typestyle/lib";
import { initPageStyles } from "common/styles";

interface HtmlProps {
    bundles: string[];
}

export const Html: SFC<HtmlProps> = (props) => {
    initPageStyles();
    return (
        <html>
            <head>
                <style id="styles-target">
                    {getStyles()}
                </style>
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
                <div id="root">
                    {props.children}
                </div>
            </body>
            {props.bundles.map(b => (
                <script key={b} src={b} />
            ))}
        </html>
    )
}