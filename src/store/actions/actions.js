//Currency list
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE';

//Add new currency to MyList
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_CURRENCY_SUCCESS = 'ADD_CURRENCY_SUCCESS';
export const ADD_CURRENCY_FAILURE = 'ADD_CURRENCY_FAILURE';
export const RESET_ADDED_CURRENCY = 'RESET_ADDED_CURRENCY';

//Fetch currency
export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_FAILURE = 'FETCH_CURRENCY_FAILURE';
export const RESET_ACTIVE_CURRENCY = 'RESET_ACTIVE_CURRENCY';

//Delete currency
export const DELETE_CURRENCY = 'DELETE_POST';
export const DELETE_CURRENCY_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_CURRENCY_FAILURE = 'DELETE_POST_FAILURE';
export const RESET_DELETED_CURRENCY = 'RESET_DELETED_CURRENCY';

const PROXY_URL = "https://cors2-fearless-parrot.eu-gb.mybluemix.net/";    // IBM Bluemix
const CURRENCY_LIST_URL = "cash.rbc.ru/cash/json/cash_currencies/";
const CURRENCY_ITEM_URL = "cash.rbc.ru/cash/json/cash_rates/?city=1&currency=";

export function fetchCurrencies() {
  const request = fetch(PROXY_URL + CURRENCY_LIST_URL, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json"
    }
  });
  
  return {
    type: FETCH_CURRENCIES,
    payload: request
  };
}

export function fetchCurrenciesSuccess(currencies) {
  return {
    type: FETCH_CURRENCIES_SUCCESS,
    payload: currencies
  };
}

export function fetchCurrenciesFailure(error) {
  return {
    type: FETCH_CURRENCIES_FAILURE,
    payload: error
  };
}


export function fetchCurrency(id) {
  const request = fetch(PROXY_URL + CURRENCY_ITEM_URL + id, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json"
    }
  });
  
  return {
    type: FETCH_CURRENCY,
    payload: request
  };
}

export function fetchCurrencySuccess(currency) {
  return {
    type: FETCH_CURRENCY_SUCCESS,
    payload: currency
  };
}

export function fetchCurrencyFailure(error) {
  return {
    type: FETCH_CURRENCY_FAILURE,
    payload: error
  };
}

export function resetActiveCurrency() {
  return {
    type: RESET_ACTIVE_CURRENCY
  }
}


export function addCurrency(currency) {
  return {
    type: ADD_CURRENCY,
    payload: currency
  };
}

export function removeCurrency(id) {
  return {
    type: DELETE_CURRENCY,
    payload: id
  };
}