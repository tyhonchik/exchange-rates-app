import React from "react";
import { Card } from "@blueprintjs/core";
import { Link } from 'react-router-dom';

const listItemStyle = {
    width: "100%",
    height: "100%",
    borderRadius:"0px"
}

const currencyListItem = (props) => {
    return (
        <Link to={"/info/" + props.currId} style={{textDecoration:"none"}}>
            <Card interactive={true}  style={listItemStyle}>
                <h5>{props.title}</h5>
                <small style={{textDecoration:"none", color:"#333"}}> {props.country ? "Страна: " + props.country : "Глобальная валюта"}</small>
            </Card>
        </Link>
    )
}

export default currencyListItem;