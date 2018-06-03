import React, { Component } from "react";
import CurrencyListItem from "./CurrencyListItem";
import { NonIdealState, Spinner } from "@blueprintjs/core";


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

  render() {
    let spinner = <Spinner style={spinnerStyle} />;

    if (this.props.myCurrencies != null ) {
      spinner = null;
    }

    if (this.props.myCurrencies === null || this.props.myCurrencies.length === 0) {
      return (
        <NonIdealState
          style={{ marginTop: "80px" }}
          title="No currencies found :("
          description="Добавьте валюты"
          visual="error"
        />
      );
    }
console.log(this.props);
    return (
      <div style={listStyles}>
        {spinner}
        {this.props.myCurrencies.currencies.map(item => (
          <CurrencyListItem
            key={item.id}
            title={item.name}
            loading={this.props.loading}
            currId={item.id}
          />
        ))}
      </div>
    );
  }
}

export default CurrencyList;