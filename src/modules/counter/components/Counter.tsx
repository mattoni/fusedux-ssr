import * as React from "react";
import { SFC } from "react";
import { style } from "typestyle";
import { Colors } from "common/styles";
import { Helmet } from "react-helmet";

interface CounterProps {
    count: number;
    onIncrement: () => any;
    onDecrement: () => any;
    onIncrementAsync: () => any;
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
                color: `${Colors.white}`,
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
}

export const Counter: SFC<CounterProps> = (props) => (
    <div className={Styles.wrapper}>
        <Helmet>
            <title>FuseDux Counter</title>
        </Helmet>
        <div className={Styles.number}>
            {props.count}
        </div>
        <div>
            <button type="button" onClick={props.onIncrement}>
                {`Increment`}
            </button>
            <button type="button" onClick={props.onDecrement}>
                {`Decrement`}
            </button>
            <button type="button" onClick={props.onIncrementAsync}>
                {`Increment in 1s`}
            </button>
        </div>
    </div>
)