import React, { PureComponent } from "react";
import Aux from "../../../hoc";
import { NonIdealState } from "@blueprintjs/core";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const blockStyle = {
  width: "100%",
  padding: "50px"
};

class CurrencyInfo extends PureComponent {
  componentWillUnmount() {
    this.props.resetMe();
  }

  render() {
    Date.prototype.timeNow = function() {
      return (
        (this.getHours() < 10 ? "0" : "") +
        this.getHours() +
        ":" +
        (this.getMinutes() < 10 ? "0" : "") +
        this.getMinutes() +
        ":" +
        (this.getSeconds() < 10 ? "0" : "") +
        this.getSeconds()
      );
    };

    const { currency, loading, error } = this.props.activeCurrency;

    const currencyList = [...this.props.currencyList];
    const activeCurrency = currencyList.filter(
      item => item.id === parseInt(this.props.currencyId, 10)
    )[0];

    if (error) {
      return (
        <NonIdealState
          style={{ marginTop: "80px" }}
          title="Нет данных :("
          description={error ? error.message : "Ошибка получения данных"}
          visual="error"
          className="NonIdealState"
        />
      );
    }

    let table = (
      <BootstrapTable striped hover options={{ noDataText: "..." }}>
        <TableHeaderColumn isKey dataField="name">
          Наименование
        </TableHeaderColumn>
        <TableHeaderColumn dataField="">Покупка</TableHeaderColumn>
        <TableHeaderColumn dataField="">Продажа</TableHeaderColumn>
        <TableHeaderColumn dataField="">Дата обновления</TableHeaderColumn>
        <TableHeaderColumn dataField="">Телефон</TableHeaderColumn>
        <TableHeaderColumn dataField="">Метро</TableHeaderColumn>
      </BootstrapTable>
    );

    if (currency != null) {
      if (!activeCurrency) {
        return (
          <NonIdealState
            style={{ marginTop: "80px" }}
            title="Запрашиваемой Вами валюты нет  ¯\_(ツ)_/¯"
            visual="heart-broken"
          className="NonIdealState"
          />
        );
      }

      if (currency.banks != null && currency.banks.length > 0) {
        const buyArr = currency.banks
          .filter(item => item.rate.buy != null)
          .map(item => parseFloat(item.rate.buy));

        const sellArr = currency.banks
          .filter(item => item.rate.sell != null)
          .map(item => parseFloat(item.rate.sell));

        activeCurrency.maxBuy = Math.max(...buyArr);
        activeCurrency.minSell = Math.min(...sellArr);

        const tableCurrencyData = currency.banks.map(item => {
          const outItem = {
            name: item.name,
            rateBuy: item.rate.buy,
            rateSell: item.rate.sell,
            pubTime: new Date(item.dt_last_published).timeNow(),
            phone: item.phone,
            metro: item.metro
              ? item.metro[0]
                ? item.metro[0][0]
                  ? item.metro[0][0]
                  : "-"
                : "-"
              : "-"
          };

          return outItem;
        });

        table = (
          <BootstrapTable data={tableCurrencyData} striped hover>
            <TableHeaderColumn
              isKey
              dataField="name"
              tdStyle={{ whiteSpace: "normal" }}
            >
              Наименование
            </TableHeaderColumn>
            <TableHeaderColumn dataField="rateBuy">Покупка</TableHeaderColumn>
            <TableHeaderColumn dataField="rateSell">Продажа</TableHeaderColumn>
            <TableHeaderColumn dataField="pubTime">
              Дата обновления
            </TableHeaderColumn>
            <TableHeaderColumn dataField="phone">Телефон</TableHeaderColumn>
            <TableHeaderColumn
              dataField="metro"
              tdStyle={{ whiteSpace: "normal" }}
            >
              Метро
            </TableHeaderColumn>
          </BootstrapTable>
        );
      }
    } else if (!loading) {
      return (
        <NonIdealState
          style={{ marginTop: "80px" }}
          title="Запрашиваемой Вами валюты нет  ¯\_(ツ)_/¯"
          visual="heart-broken"
          className="NonIdealState"
        />
      );
    }

    return (
      <Aux>
        <div style={blockStyle}>
          <h1
            className={loading ? "pt-skeleton" : ""}
            style={{ display: "inline-block" }}
          >
            {loading ? "Loading" : activeCurrency ? activeCurrency.name : "---"}
          </h1>
          {"   "}
          <small className={loading ? "pt-skeleton" : ""}>
            {activeCurrency
              ? activeCurrency.country
                ? activeCurrency.country
                : "Глобальная валюта"
              : "Глобальная валюта"}
          </small>
          <br />
          <h6
            className={loading ? "pt-skeleton" : ""}
            style={{ display: "table" }}
          >
            Покупка (макс.):{" "}
            {loading
              ? "Loading"
              : activeCurrency
                ? activeCurrency.maxBuy
                  ? activeCurrency.maxBuy
                  : "---"
                : "---"}{" "}
            руб.
          </h6>
          <h6
            className={loading ? "pt-skeleton" : ""}
            style={{ display: "table" }}
          >
            Продажа (мин.):{" "}
            {loading
              ? "Loading"
              : activeCurrency
                ? activeCurrency.minSell
                  ? activeCurrency.minSell
                  : "---"
                : "---"}{" "}
            руб.
          </h6>
          <div style={{ marginTop: "50px" }}>{table}</div>
        </div>
      </Aux>
    );
  }
}

export default CurrencyInfo;
