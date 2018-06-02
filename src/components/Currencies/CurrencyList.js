import React, { Component } from "react";
import CurrencyListItem from "./CurrencyListItem";
import { NonIdealState, Spinner } from "@blueprintjs/core";
import { connect } from "react-redux";
import { fetchCurrencies, fetchCurrenciesFailure, fetchCurrenciesSuccess } from "../../store/actions/actions";

const listStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center"
};

const spinnerStyle = {
  position: "fixed",
  margin: "150px auto",
  top: "50px"
};

class CurrencyList extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    let spinner = <Spinner style={spinnerStyle} />;

    if (!this.props.loading) {
      spinner = null;
    }

    if (this.props.error) {
      return (
        <NonIdealState
          style={{ marginTop: "80px" }}
          title="No currencies found :("
          description="Try reload page"
          visual="error"
        />
      );
    }

    return (
      <div style={listStyles}>
        {spinner}
        {this.props.currencyList.map(item => (
          <CurrencyListItem
            key={item.id}
            title={item.name}
            loading={this.props.loading}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
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
