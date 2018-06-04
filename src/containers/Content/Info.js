import React, { Component } from "react";
import Aux from "../../hoc";
import CurrencyInfo from "../../components/Currencies/CurrencyInfo";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux";
import {
  fetchCurrency, fetchCurrencyFailure, fetchCurrencySuccess,
} from "../.././store/actions/actions";

class Info extends Component {
  componentDidMount() {
    this.props.fetchCurrency(this.props.match.params.id)

  }
  
  render() {      
    return (
      <Aux>
        <header>
          <Navbar pageType="info" {...this.props} />
        </header>
        <main>
          <CurrencyInfo {...this.props} />
        </main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencyList: state.currs.currencyList.currencies,
    loading: state.currs.currencyList.loading,
    error: state.currs.currencyList.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrency: id => {
      dispatch(fetchCurrency(id))
        .payload.then(response => {
          if (!response.ok) {
            dispatch(fetchCurrencyFailure(response.statusText));
            throw Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(item => dispatch(fetchCurrencySuccess(item)))
        .catch(error => dispatch(fetchCurrencyFailure(error)));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
// export default Info;
