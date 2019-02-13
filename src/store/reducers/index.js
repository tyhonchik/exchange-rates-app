import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import CurrencyReducer from './reducers';

export default (history) => combineReducers({
    currs: CurrencyReducer,
    router: connectRouter(history)
});