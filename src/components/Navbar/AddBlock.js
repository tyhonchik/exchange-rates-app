import React, { Component } from "react";
import { connect } from "react-redux";
import { Suggest } from "@blueprintjs/select";
import { MenuItem, Button } from "@blueprintjs/core";
import Aux from "../../hoc/Aux";
import { fetchCurrencies, fetchCurrenciesFailure, fetchCurrenciesSuccess, addCurrency } from "../../store/actions/actions";


class AddBlock extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

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
        return `${currency.name.toLowerCase()} ${currency.country ? currency.country.toLowerCase() : ""}`.indexOf(query.toLowerCase()) >= 0;
    };

    renderInputValue = (curr) => curr.name;

    addedCurrency = null;
    handleValueChange = (curr) => this.addedCurrency = curr;

    render() {
        return (
            <Aux>
            <Suggest
                itemPredicate={this.filterCurrency}
                itemRenderer={this.renderCurrency}
                items={[...this.props.currencyList]}
                noResults={<MenuItem disabled={true} text="Нет такой валюты" />}
                inputValueRenderer={this.renderInputValue}
                onItemSelect={this.handleValueChange}
                popoverProps={true}
            />
            <Button className="pt-minimal" icon="plus" onClick={() => this.props.addCurrency(this.addedCurrency)} />
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
            .catch((error) => dispatch(fetchCurrenciesFailure(error))),

        addCurrency: (currency) => dispatch(addCurrency(currency))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlock);