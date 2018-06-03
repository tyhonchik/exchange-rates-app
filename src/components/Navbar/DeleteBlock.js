import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@blueprintjs/core";
import { removeCurrency } from "../../store/actions/actions";


class DeleteBlock extends Component {

    render() {
        return (
            <Button
                className="pt-minimal"
                icon="delete"
                text="Удалить из списка моих валют"
                onClick={() => this.props.deleteCurrency(this.props.currencyId)} />
        )
    }
}



const mapStateToProps = (globalState, ownProps) => {

    return {
        currencyId: ownProps.match.params.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCurrency: (id) => dispatch(removeCurrency(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBlock);