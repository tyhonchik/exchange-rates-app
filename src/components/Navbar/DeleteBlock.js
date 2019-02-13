import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@blueprintjs/core";
import { removeCurrency, addCurrency } from "../../store/actions/actions";
import { push } from "connected-react-router";

class DeleteBlock extends Component {
  render() {
    let currency = null;
    const currencyList = [...this.props.currencyList];
    if (currencyList != null && currencyList.length > 0) {
      currency = currencyList.filter(
        item => item.id === parseInt(this.props.currencyId, 10)
      )[0];
    }

    let button = null;

    if (currency != null){
        if(this.props.myCurrencies.filter(curr => curr.id === parseInt(currency.id, 10)).length <= 0) {
            button = (
              <Button
                className="pt-minimal"
                icon="plus"
                text="Добавить эту валюту себе в список"
                onClick={() => this.props.addCurrency(currency)}
              />
            );
          }
          else{
            button = (
                <Button
                  className="pt-minimal"
                  icon="delete"
                  text="Удалить из списка моих валют"
                  onClick={() => this.props.deleteCurrency(this.props.currencyId)}
                />
              );
          }
    } 

    return button;
  }
}

const mapStateToProps = (globalState, ownProps) => {
  return {
    currencyId: ownProps.match.params.id,
    currencyList: globalState.currs.currencyList.currencies,
    myCurrencies: globalState.currs.myCurrencies.currencies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCurrency: id => {
      dispatch(removeCurrency(id));
      dispatch(push("/"));
    },
    addCurrency: currency => {
      dispatch(addCurrency(currency));
      dispatch(push("/"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteBlock);
