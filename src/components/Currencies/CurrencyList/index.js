import { connect } from "react-redux";
import CurrencyList from './CurrencyList';

const mapStateToProps = (state) => {
    return {
        myCurrencies: state.currs.myCurrencies
    };
};

export default connect(mapStateToProps, null)(CurrencyList);