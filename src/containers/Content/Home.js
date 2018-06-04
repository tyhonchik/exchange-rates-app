import React, { Component } from "react";
import Aux from "../../hoc";
import CurrencyList from "../../components/Currencies/CurrencyList";
import Navbar from "../../components/Navbar/Navbar";

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