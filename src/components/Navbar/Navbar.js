import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import AddBlock from "./AddBlock";
import DeleteBlock from "./DeleteBlock";
import Aux from "../../hoc";
import { connect } from "react-redux";
import {
  fetchCurrencies,
  fetchCurrenciesFailure,
  fetchCurrenciesSuccess
} from "../.././store/actions/actions";

import {
  Navbar,
  Alignment,
  NavbarGroup,
  NavbarHeading,
  Button,
  Tooltip
} from "@blueprintjs/core";

class Nav extends PureComponent {
  componentDidMount() {
    this.props.fetchData();
  }

  renderRedirect = () => {
    localStorage.clear();
    
    this.props.history.go('/');
  };

  render() {
    let nav = null;
    var isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    let clearStorageBtn = (
      <Tooltip content="Очистить localStorage">
        <Button onClick={this.renderRedirect} minimal="true" icon="trash" />
      </Tooltip>
    );

    if(!isChrome && !isOpera && !isEdge && !isFirefox){
      clearStorageBtn = null;
    }

    switch (this.props.pageType) {
      case "home":
        nav = (
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Мои валюты</NavbarHeading>
              {clearStorageBtn}
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
              {this.props.myCurrencies > 0 ? (
                <Aux>
                  <span>
                    добавлять валюту{" "}
                    <span role="img" aria-label="right">
                      👉
                    </span>{" "}
                  </span>
                  <AddBlock {...this.props} />
                </Aux>
              ) : (
                ""
              )}
            </NavbarGroup>
          </Navbar>
        );

        break;

      case "info":
        nav = (
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <Link to="/">
                <Button
                  className="pt-minimal"
                  icon="arrow-left"
                  text="вернуться к списку"
                />
              </Link>
              {clearStorageBtn}
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
              <DeleteBlock {...this.props} />
            </NavbarGroup>
          </Navbar>
        );
        break;

      default:
        nav = (
          <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Мои валюты | default</NavbarHeading>
              <Tooltip content="Очистить localStorage">
                <Button
                  onClick={this.renderRedirect}
                  minimal="true"
                  icon="trash"
                />
              </Tooltip>
            </NavbarGroup>
          </Navbar>
        );
        break;
    }

    return nav;
  }
}

const mapStateToProps = state => {
  return {
    myCurrencies: state.currs.myCurrencies.currencies.length,
    currencyList: state.currs.currencyList.currencies,
    loading: state.currs.currencyList.loading,
    error: state.currs.currencyList.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () =>
      dispatch(fetchCurrencies())
        .payload.then(response => response.data)
        //   console.log(response);
        //   if (!response.ok) {
        //     dispatch(fetchCurrenciesFailure(response.statusText));
        //     throw Error(response.statusText);
        //   }
        //   return response;
        // })
        // .then(response => response.json())
        .then(items => {console.log(items); return dispatch(fetchCurrenciesSuccess(items));})
        .catch(error => dispatch(fetchCurrenciesFailure(error)))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
