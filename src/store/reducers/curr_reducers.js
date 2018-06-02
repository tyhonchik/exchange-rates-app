import {
    FETCH_CURRENCIES, FETCH_CURRENCIES_SUCCESS, FETCH_CURRENCIES_FAILURE,
    FETCH_CURRENCY, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_FAILURE, RESET_ACTIVE_CURRENCY,
    ADD_CURRENCY, ADD_CURRENCY_SUCCESS, ADD_CURRENCY_FAILURE,
    DELETE_CURRENCY, DELETE_CURRENCY_SUCCESS, DELETE_CURRENCY_FAILURE
} from '../actions/actions';

const INITIAL_STATE = {
    myCurrencies: { currencies: [] },  //, error:null, loading: false
    currencyList: { currencies: [], error: null, loading: false },
    activeCurrency: { currency: null, error: null, loading: false },
    addedCurrency: { currency: null, error: null, loading: false },
    deletedCurrency: { currency: null, error: null, loading: false }

};

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {

        case FETCH_CURRENCIES:// start fetching posts and set loading = true
            return { ...state, currencyList: { currencies: [], error: null, loading: true } };
        case FETCH_CURRENCIES_SUCCESS:// return list of posts and make loading = false
            return { ...state, currencyList: { currencies: action.payload, error: null, loading: false } };
        case FETCH_CURRENCIES_FAILURE:// return error and make loading = false
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, currencyList: { currencies: [], error: error, loading: false } };

        case FETCH_CURRENCY:
            return { ...state, activeCurrency: { ...state.activeCurrency, loading: true } };
        case FETCH_CURRENCY_SUCCESS:
            return { ...state, activeCurrency: { currency: action.payload, error: null, loading: false } };
        case FETCH_CURRENCY_FAILURE:
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, activeCurrency: { currency: null, error: error, loading: false } };
        case RESET_ACTIVE_CURRENCY:
            return { ...state, activeCurrency: { currency: null, error: null, loading: false } };

        case ADD_CURRENCY:
            return { ...state, addedCurrency: { ...state.addedCurrency, loading: true } }
        case ADD_CURRENCY_SUCCESS:
            return { ...state, addedCurrency: { currency: action.payload, error: null, loading: false } }
        case ADD_CURRENCY_FAILURE:
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, addedCurrency: { currency: null, error: error, loading: false } }
        case RESET_ADDED_CURRENCY:
            return { ...state, addedCurrency: { currency: null, error: null, loading: false } };

        case DELETE_CURRENCY:
            return { ...state, deletedCurrency: { ...state.deletedCurrency, loading: true } }
        case DELETE_CURRENCY_SUCCESS:
            return { ...state, deletedCurrency: { currency: action.payload, error: null, loading: false } }
        case DELETE_CURRENCY_FAILURE:
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, deletedCurrency: { currency: null, error: error, loading: false } }
        case RESET_DELETED_CURRENCY:
            return { ...state, deletedCurrency: { currency: null, error: null, loading: false } }

        default:
            return state;
    }
}