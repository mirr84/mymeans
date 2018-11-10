import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/index';
import axios from "axios";

const store = createStore(reducer);
store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));

axios.interceptors.request.use(
    (config) => {
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
