import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import CurrencyList from "../../components/Currencies/CurrencyList";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux";
import { fetchCurrencies, fetchCurrenciesFailure, fetchCurrenciesSuccess } from "../.././store/actions/actions";

class Home extends Component {
    
    render() {
        return (
            <Aux>
                <header>
                    <Navbar pageType="home"/>
                </header>
                <main>
                    <CurrencyList />
                </main>
            </Aux>
        )
    }
}

export default Home;