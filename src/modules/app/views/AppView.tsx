import * as React from "react";
import { SFC } from "react";
import { Route } from "react-router";
import { style } from "typestyle";

import CounterView from "../../counter/views";
import { Colors } from "common/styles";

interface AppProps {

}

const Styles = {
    wrapper: style({
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",
    }),
    header: style({
        gridArea: "1 / span 3",
        display: "grid",
        justifyItems: "center",
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
        backgroundColor: `${Colors.darkGray}`,
        $nest: {
            "& > div": {
                transition: "background .2s ease-in-out",            
                height: "100%",     
                padding: "1rem",                
            },
            "& > div:hover": {
                cursor: "pointer",
                backgroundColor: `${Colors.darkRed}`,
            }
        }
    })
}

export const AppView: SFC<AppProps> = () => (
    <div>
        <Header />
        <main className={Styles.wrapper} role="stage">
            <Route exact path="/" component={CounterView} />
        </main>
    </div>
);

export const Header: SFC = () => (
    <header className={Styles.header}>
        <div>Cool Thing 1</div>
        <div>Cool Thing 2</div>
    </header>
);