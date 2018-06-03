import React from "react";
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { removeCurrency } from "../../store/actions/actions";
import AddBlock from "./AddBlock";
import DeleteBlock from "./DeleteBlock";

import {
  Navbar,
  Alignment,
  NavbarGroup,
  NavbarHeading,
  Button
} from "@blueprintjs/core";

const navbar = props => {
  let nav = null;
  console.log(props);

  switch (props.pageType) {
    case "home":
      nav =
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Мои валюты</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <AddBlock {...props}/>
          </NavbarGroup>
        </Navbar>;

      break;

    case "info":
      nav =
        <Navbar>
          <NavbarGroup align={Alignment.LEFT}>
            <Button onClick={() => props.changePage()} className="pt-minimal" icon="arrow-left" text="вернуться к списку" />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <DeleteBlock {...props}/>
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
