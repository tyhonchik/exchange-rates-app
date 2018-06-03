import React, { PureComponent } from 'react';
import Aux from "../../../hoc/Aux";
import { Button, Card, Elevation, NonIdealState, Spinner } from "@blueprintjs/core";
import { Cell, Column, Table, TableLoadingOption } from "@blueprintjs/table";

const columns = ["Банк", "Покупка", "Продажа", "Дата обновления", "Телефон", "Метро"]

const blockStyle = {
    width: "100%",
    padding: "50px",
}

const tableStyle = {
    width: "80%",

}

class CurrencyInfo extends PureComponent {
    componentWillUnmount() {
        this.props.resetMe();
    }

    componentDidMount() {
        this.props.fetchCurrency(this.props.currencyId);
    }

    
    render() {
        Date.prototype.timeNow = function () {
            return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
       }
        const { currency, loading, error } = this.props.activeCurrency;

        const currencyList = [...this.props.currencyList];
        const activeCurrency = this.props.currencyList.filter((item) => item.id === parseInt(this.props.currencyId));

        const renderCell = (rowIndex, columnIndex) => {
            const bank = currency.banks[rowIndex];

            let outTime = null;
            const date = new Date(bank.dt_last_published);
            if (date != null){
                outTime = date.timeNow();//.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            }

            switch (columnIndex) {
                case 0: return <Cell>{bank.name}</Cell>
                case 1: return <Cell>{bank.rate.buy}</Cell>
                case 2: return <Cell>{bank.rate.sell}</Cell>
                case 3: return <Cell>{outTime}</Cell>
                case 4: return <Cell>{bank.phone}</Cell>
                case 5: return <Cell>{bank.metro ? bank.metro[0] ? bank.metro[0][0] : "Нет данных": "Нет данных"}</Cell>
                default: return <Cell>Ooops..</Cell>
            }
        };

        if (error) {
            return (
                <NonIdealState
                    style={{ marginTop: "80px" }}
                    title="Нет данных :("
                    description={error ? error.message : "Ошибка получения данных"}
                    visual="error"
                />
            );
        }

        let list = columns.map((column, index) => {
            return (
                <Column key={index} name={column} />
            )
        });

        if (currency != null && currency.banks != null && currency.banks.length > 0) {
            const buyArr = currency.banks
                .filter(item => item.rate.buy != null)
                .map(item => parseFloat(item.rate.buy));

            const sellArr = currency.banks
                .filter(item => item.rate.sell != null)
                .map(item => parseFloat(item.rate.sell));

            activeCurrency.maxBuy = Math.max(...buyArr);
            activeCurrency.minSell = Math.min(...sellArr);

            list = columns.map((column, index) => {
                return (
                    <Column key={index} name={column} cellRenderer={renderCell} />
                )
            })
        }
        else if (!loading) {
            return <NonIdealState
                style={{ marginTop: "80px" }}
                title="Данных нет :("
                visual="error"
            />
        }

        let table = <Table enableGhostCell={true} numRows="10" loadingOptions={TableLoadingOption.CELLS}>
            {list}
        </Table>

        if (!loading && currency != null && currency.banks != null) {
            table = <Table enableGhostCell={true} numRows={currency.banks.length} >
                {list}
            </Table>
        }


        return (
            <Aux>
                <div style={blockStyle}>

                    <h1 className={loading ? "pt-skeleton" : ""}>{loading ? "Loading" : activeCurrency ? activeCurrency[0] ? activeCurrency[0].name : "---" : "---"}</h1>
                    <h5 className={loading ? "pt-skeleton" : ""}>
                        Покупка (макс.): {loading ? "Loading" : activeCurrency ? activeCurrency.maxBuy : "---"} руб.
                    </h5>
                    <h5 className={loading ? "pt-skeleton" : ""}>
                        Продажа (мин.): {loading ? "Loading" : activeCurrency ? activeCurrency.minSell : "---"} руб.
                    </h5>
                    <div style={tableStyle}>
                        {table}
                    </div>
                </div>
            </Aux>
        );
    }
}

export default CurrencyInfo;