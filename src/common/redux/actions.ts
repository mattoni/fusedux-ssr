import { CounterAction } from "modules/counter/redux";
import { CurrencyAction } from "modules/currency/redux";

export type RootAction =
    | CounterAction
    | CurrencyAction;