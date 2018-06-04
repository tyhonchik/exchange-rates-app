import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import CurrencyReducer from './reducers';

export default combineReducers({
    currs: CurrencyReducer,
    routerReducer
});