import { connect } from "react-redux";
import { RootState } from "common/redux";
import { counterActions } from "../redux";
import { Counter } from "../components";

const mapStateToProps = (state: RootState) => {
    return ({
        count: state.counter.count
    })
}

export const CounterView = connect(
    mapStateToProps,
    {
        onIncrement: counterActions.IncreaseCounter.create,
        onDecrement: counterActions.DecreaseCounter.create,
        onIncrementAsync: counterActions.IncreaseCounterAsync.create,
    }
)(Counter);