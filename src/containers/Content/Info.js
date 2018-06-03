import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import CurrencyInfo from "../../components/Currencies/CurrencyInfo";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux";
import { fetchCurrencies, fetchCurrenciesFailure, fetchCurrenciesSuccess } from "../.././store/actions/actions";

class Info extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <Aux>
                <header>
                    <Navbar pageType="info" {...this.props}/>
                </header>
                <main>
                    <CurrencyInfo {...this.props} />
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencyList: state.currs.currencyList.currencies,
        loading: state.currs.currencyList.loading,
        error: state.currs.currencyList.error,
    };
};

const mapDispatchToProps = (dispatch) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Info);