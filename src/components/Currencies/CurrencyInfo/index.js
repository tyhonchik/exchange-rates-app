import { connect } from "react-redux";
import { fetchCurrency, fetchCurrencyFailure, fetchCurrencySuccess, resetActiveCurrency } from "../../../store/actions/actions";
import CurrencyInfo from './CurrencyInfo';

const mapStateToProps = (globalState, ownProps) => {
    // console.log(ownProps);
    
    return {
        activeCurrency: globalState.currs.activeCurrency,
        currencyId: ownProps.match.params.id
    };
};

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchCurrency: (id) => {dispatch(fetchCurrency(id)).payload
            .then((response) => {
                if (!response.ok) {
                    dispatch(fetchCurrencyFailure(response.statusText))
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(item => dispatch(fetchCurrencySuccess(item)))
            .catch((error) => dispatch(fetchCurrencyFailure(error)))
        },

        resetMe: () => {
            dispatch(resetActiveCurrency());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyInfo);