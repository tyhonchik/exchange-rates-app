import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
// import { currencies, currenciesHasError, currenciesIsLoading } from './reducers';
import CurrencyReducer from './reducers';

export default combineReducers({
    // currencies,
    // currenciesHasError,
    // currenciesIsLoading,
    currs: CurrencyReducer,
    routerReducer
});