import React, { Component } from "react";
import { connect } from "react-redux";
import { Suggest } from "@blueprintjs/select";
import { MenuItem } from "@blueprintjs/core";

import { addCurrency } from "../../store/actions/actions";

class AddBlock extends Component {
  renderCurrency = (currency, { handleClick, modifiers, query }) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const text = currency.name;
    return (
      <MenuItem
        active={modifiers.active}
        label={currency.country}
        key={currency.id}
        onClick={handleClick}
        text={text}
      />
    );
  };

  filterCurrency = (query, currency) => {
    return (
      `${currency.name.toLowerCase()} ${
        currency.country ? currency.country.toLowerCase() : ""
      }`.indexOf(query.toLowerCase()) >= 0
    );
  };

  renderInputValue = curr => curr.name;

  handleValueChange = curr => this.props.addCurrency(curr);

  render() {
    return (
      <Suggest
        itemPredicate={this.filterCurrency}
        itemRenderer={this.renderCurrency}
        items={[...this.props.currencyList]}
        noResults={<MenuItem disabled={true} text="Нет такой валюты" />}
        inputValueRenderer={this.renderInputValue}
        onItemSelect={this.handleValueChange}
        popoverProps={{popoverClassName: 'popover-list'}}
        inputProps={{ placeholder: "Код валюты или страна" }}
      />
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
    addCurrency: currency => dispatch(addCurrency(currency))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBlock);
