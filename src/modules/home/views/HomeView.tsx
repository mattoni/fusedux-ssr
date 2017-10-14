import * as React from "react";
import { SFC } from "react";
import { style } from "typestyle";
import { Colors } from "common/styles";
import { Helmet } from "react-helmet";

interface HomeProps {

}

const Styles = {
    wrapper: style({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: `${Colors.lightGray}`,
    }),
    title: style({
        fontSize: "10rem",
        margin: 0,
    }),
    fuse: style({
        color: `${Colors.mainRed}`
    }),
    subHeader: style({
        fontSize: "1.8rem",
        fontWeight: 600,
    })
}

export const HomeView: SFC<HomeProps> = () => (
    <div className={Styles.wrapper}>
        <Helmet>
            <title>FuseDux Home</title>
        </Helmet>
        <h1 className={Styles.title}>
            <span className={Styles.fuse}>Fuse</span>Dux
        </h1>
        <div className={Styles.subHeader}>
            The <span className={Styles.fuse}>ultimate</span> in modern type-safe React
        </div>
    </div>
)