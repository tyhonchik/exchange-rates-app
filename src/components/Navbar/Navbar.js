import React from "react";
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Navbar,
  Alignment,
  NavbarGroup,
  NavbarHeading,
  Button
} from "@blueprintjs/core";

const navbar = props => {
  let nav = null;

  switch (props.pageType) {
    case "home":
      nav =
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Мои валюты</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className="pt-minimal" icon="plus" />
          </NavbarGroup>
        </Navbar>;

      break;

    case "info":
      nav =
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <button onClick={() => props.changePage()} className="pt-minimal" icon="arrow-left" />
            <NavbarHeading>USD</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className="pt-minimal" icon="delete" />
          </NavbarGroup>
        </Navbar>;
        break;

    default:
      nav =
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Мои валюты | default</NavbarHeading>
          </NavbarGroup>
        </Navbar>;
      break;

  }

  return nav;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(navbar)
