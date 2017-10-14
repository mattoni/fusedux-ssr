import * as React from "react";
import { SFC } from "react";
import { Link } from "react-router-dom";
import { style } from "typestyle";
import { Colors } from "common/styles";
import { links, routes } from "common/router";
import { Store } from "react-redux";
import { RootState } from "common/redux";
import { RouteRenderer } from "common/router/components/RouteRenderer";

interface AppProps {
    store: Store<RootState>
}

const Styles = {
    wrapper: style({
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto",
    }),
    header: style({
        display: "flex",
        backgroundColor: `${Colors.darkGray}`,
    }),
    link: style({
        transition: "background .2s ease-in-out",
        height: "100%",
        padding: "1rem",
        color: `${Colors.white}`,
        textDecoration: "none",
        $nest: {
            "&:hover": {
                cursor: "pointer",
                backgroundColor: `${Colors.darkRed}`,
            }
        }
    })
}


export const AppView: SFC<AppProps> = (props: AppProps) => (
    <div>
        <Header />
        <main className={Styles.wrapper} role="stage">
            {routes.map(route => (
                <RouteRenderer
                    key={route.path}
                    route={route}
                    store={props.store} />
            ))}
        </main>
    </div>
);

export const Header: SFC = () => (
    <header className={Styles.header}>
        <Link className={Styles.link} to={links.home()}>Home</Link>
        <Link className={Styles.link} to={links.counter()}>Counter</Link>
        <Link className={Styles.link} to={links.currency()}>Currency</Link>
    </header>
);