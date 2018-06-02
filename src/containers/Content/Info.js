import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import CurrencyInfo from "../../components/Currencies/CurrencyInfo";
import Navbar from "../../components/Navbar/Navbar";


class Info extends Component {

    render() {
        return (
            <Aux>
                <header>
                    <Navbar pageType="info"/>
                </header>
                <main>
                    <CurrencyInfo />
                </main>
            </Aux>
        )
    }
}

export default Info;