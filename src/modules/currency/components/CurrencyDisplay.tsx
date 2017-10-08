import * as React from "react";
import { SFC } from "react";
import { style } from "typestyle";
import { Colors } from "common/styles";
import { Currency } from "modules/currency/redux";

interface CurrencyDisplayProps {
    base: Currency;
    target: Currency;
    rate: number;
}

const Styles = {
    wrapper: style({
        gridColumn: "1/3",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        $nest: {
            "& button": {
                backgroundColor: `${Colors.mainRed}`,
                border: "none",
                color: `${Colors.text}`,
                padding: "2rem",
                margin: "1rem",
                cursor: "pointer",
                outline: "none",
            },
            "& button:hover": {
                transition: "background .2s ease-in-out",
                backgroundColor: `${Colors.darkRed}`,
            }
        }
    }),
    number: style({
        fontSize: "10rem",
        color: `${Colors.lightGray}`,
    }),
    value: style({
        color: `${Colors.green}`,
    })
}

export const CurrencyDisplay: SFC<CurrencyDisplayProps> = (props) => (
    <div className={Styles.wrapper}>
        <div className={Styles.number}>
            $1 USD = <span className={Styles.value}>{format(props.rate, props.target)}</span>
        </div>
    </div>
)

function format(value: number, currency: Currency = "USD") {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    });

    return formatter.format(value);
}