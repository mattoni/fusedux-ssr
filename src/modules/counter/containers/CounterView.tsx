import { connect } from "react-redux";
import { RootState } from "common/redux";
import {
    incrementCounter,
    decrementCounter,
    incrementCounterAsync,
} from "../redux";
import { Counter } from "../components";

const mapStateToProps = (state: RootState) => {
    return {
        count: state.counter.count,
    };
};

export const CounterView = connect(mapStateToProps, {
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
    onIncrementAsync: incrementCounterAsync,
})(Counter);
