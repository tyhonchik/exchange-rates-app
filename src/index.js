import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/store'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = <Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <App />
        </div>
    </ConnectedRouter>
</Provider>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
