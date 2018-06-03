import { connect } from "react-redux";
import { fetchCurrencies, fetchCurrenciesFailure, fetchCurrenciesSuccess } from "../../../store/actions/actions";
import CurrencyList from './CurrencyList';

const mapStateToProps = (state) => {
    return {
        currencyList: state.currs.currencyList.currencies,
        loading: state.currs.currencyList.loading,
        error: state.currs.currencyList.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    const out = dispatch(fetchCurrencies());
    console.log(out);
    return {
        fetchData: () => dispatch(fetchCurrencies()).payload
            .then((response) => {
                if (!response.ok) {
                    dispatch(fetchCurrenciesFailure(response.statusText))
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(fetchCurrenciesSuccess(items)))
            .catch((error) => dispatch(fetchCurrenciesFailure(error)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList);