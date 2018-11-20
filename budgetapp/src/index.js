import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import budgetReducer from './reducers';
import expenseReducer from './reducers';

import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(expenseReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,

    document.getElementById('root')
);