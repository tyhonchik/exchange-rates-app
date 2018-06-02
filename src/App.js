import React, { Component } from "react";
import "./App.css";
import Aux from "./hoc/Aux";
import { Route } from 'react-router-dom'
import Home from "./containers/Content/Home";
import Info from "./containers/Content/Info";


class App extends Component {
  render() {

    return (
      <Aux>
        <Route exact path="/" component={Home} />
        <Route path="/info" component={Info} />
      </Aux>
    );
  }
}

export default App;
