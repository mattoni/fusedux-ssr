import { setupPage, normalize } from "csstips";
import { cssRule, cssRaw, fontFace } from "typestyle";
import { Colors } from "./colors";

export function initPageStyles() {
    cssRaw(`
        @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,300italic,400italic,600,600italic,700,700italic,200,200italic);
    `);

    fontFace({
        fontFamily: "Source Sans Pro, sans-serif",
        fontStyle: "normal",
    });

    setupPage('#root');
    normalize();

    // Set base rem size to 1rem = 10px
    cssRule("html", {
        fontSize: "62.5%",
    });

    // Standardize body properties
    cssRule("body", {
        color: `${Colors.text}`,
        fontFamily: "Source Sans Pro",
        fontSize: "1.5rem",
        lineHeight: 1.825,
        "-webkit-font-smoothing": "antialiased",
        textRendering: "auto",
    });
}

