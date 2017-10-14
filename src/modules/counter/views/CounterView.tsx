import { connect } from "react-redux";
import { RootState } from "common/redux";
import { counterACs } from "../redux";
import { Counter } from "../components";

const mapStateToProps = (state: RootState) => {
    return ({
        count: state.counter.count
    })
}

export const CounterView = connect(
    mapStateToProps,
    {
        onIncrement: counterACs.IncreaseCounter.create,
        onDecrement: counterACs.DecreaseCounter.create,
        onIncrementAsync: counterACs.IncreaseCounterAsync.create,
    }
)(Counter);