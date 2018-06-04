import React, { Component } from "react";
import CurrencyListItem from "./CurrencyListItem";
import { NonIdealState } from "@blueprintjs/core";
import AddBlock from '../../Navbar/AddBlock';

const listStyles = {
  margin: "0",
  padding: "0",
  display: "grid",
  gridGap: "1px",
  grid: "repeat(5, 15rem) / repeat(5, 15rem)"
};

class CurrencyList extends Component {
  render() {
    if (
      this.props.myCurrencies.currencies === null ||
      this.props.myCurrencies.currencies.length === 0
    ) {
      const addBlock = <AddBlock {...this.props} />
      return (
        <NonIdealState
          style={{ marginTop: "80px" }}
          title="Ваш список валют пока пуст"
          description="Добавьте первую из списка 👇"
          visual="geosearch"
          action={addBlock}
          className="NonIdealState"
        />
      );
    }

    return (
      <div style={{ width: "47vw", margin: "55px auto" }}>
        <div style={listStyles}>
          {this.props.myCurrencies.currencies.map(item => (
            <CurrencyListItem
              key={item.id}
              title={item.name}
              country={item.country}
              currId={item.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CurrencyList;
