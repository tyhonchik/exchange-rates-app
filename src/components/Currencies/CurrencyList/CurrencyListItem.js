import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

import { Link } from 'react-router-dom';

const listItemStyle = {
    width: "200px",
    maxWidth: "250px",
    margin: "30px",
    flex: "1"
}

const currencyListItem = (props) => {
    return (
        <Link to={"/info/" + props.currId}>
            <Card interactive={true} elevation={Elevation.TWO} style={listItemStyle}>
                <h5 className={props.loading ? "pt-skeleton" : ""}>{props.title}</h5>
                {/* <Button>Submit</Button> */}
            </Card>
        </Link>
    )
}

export default currencyListItem;