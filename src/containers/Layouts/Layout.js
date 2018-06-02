import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Navbar from "../../components/Navbar/Navbar";
import MainContent from "../MainContent/MainContent";

class Layout extends Component{
    state = {
        pageType: "main"
    };

    render(){
        return(
            <Aux>
                <Navbar pageType={this.state.pageType} />
                <MainContent pageType={this.state.pageType}/>
            </Aux>
        )
    }
}

export default Layout;