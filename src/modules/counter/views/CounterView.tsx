import { connect } from "react-redux";
import { RootState } from "common/redux";
import { counterActionCreators } from "../redux";
import { Counter } from "../components";

const mapStateToProps = (state: RootState) => {
    return ({
        count: state.counter.count
    })
}

export const CounterView = connect(
    mapStateToProps,
    {
        onIncrement: counterActionCreators.IncreaseCounter.create,
        onDecrement: counterActionCreators.DecreaseCounter.create ,
        onIncrementAsync: counterActionCreators.IncreaseCounterAsync.create,       
    }
)(Counter);