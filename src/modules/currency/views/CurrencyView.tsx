import { connect } from "react-redux";
import { RootState } from "common/redux";
import { CurrencyDisplay } from "../components";

const mapStateToProps = (state: RootState) => {
    return ({
        rate: state.currency.value,
        base: "USD",
        target: state.currency.type,
    })
}

export const CurrencyView = connect(
    mapStateToProps,
)(CurrencyDisplay);