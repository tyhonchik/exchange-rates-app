import { connect } from "react-redux";
import { resetActiveCurrency } from "../../../store/actions/actions";
import CurrencyInfo from './CurrencyInfo';

const mapStateToProps = (globalState, ownProps) => {
    return {
        activeCurrency: globalState.currs.activeCurrency,
        currencyId: ownProps.match.params.id,
        currencyList: globalState.currs.currencyList.currencies,
        loading: globalState.currs.currencyList.loading,
        error: globalState.currs.currencyList.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetMe: () => {
            dispatch(resetActiveCurrency());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyInfo);