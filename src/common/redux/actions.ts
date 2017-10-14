import { CounterAction } from "modules/counter/redux";
import { CurrencyAction } from "modules/currency/redux";
import { AppAction } from "modules/app/redux";

export type RootAction =
    | AppAction
    | CounterAction
    | CurrencyAction;