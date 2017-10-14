import { links, StaticRoute } from "common/router";
import HomeView from "../views";

export const homeRoute: StaticRoute = {
    path: links.home(),
    component: HomeView,
    exact: true,
};