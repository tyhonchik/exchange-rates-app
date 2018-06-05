import React, { Component } from "react";
import CurrencyListItem from "./CurrencyListItem";
import { NonIdealState } from "@blueprintjs/core";
import AddBlock from '../../Navbar/AddBlock';


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
          description="Добавляйте из списка 👇"
          visual="geosearch"
          action={addBlock}
          className="NonIdealState"
        />
      );
    }
    
    return (
      <div style={{ width: "47vw", margin: "55px auto" }}>
        <div className="currencyList"> 
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
